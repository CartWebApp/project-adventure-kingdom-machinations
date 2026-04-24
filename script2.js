import {Player, Item} from "./scripts/classes.js";
import {story} from "./scripts/story.js";
import {playerImpact, attack, defend, checkHealth} from "./scripts/combatAndStats.js";

const background = document.getElementById(`#gameScreen`); //background
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");

const options = document.getElementById("options");
const gameText = document.getElementById("gameText");
const saveFile = document.querySelectorAll(".file");
const openSaveOverlay = document.getElementById("save-nav");
const gameNav = document.getElementById(`menuNavigation`);

const playerStats = document.querySelectorAll(".playerStat");

let isReading = true;
let clicks = 0;
let currentScene = ``;
let currentPlayer; //creating spot for player

attack([100,50,50,50,50,100],[100,50,50,50,50,100]);
defend([100,50,50,50,50,100],[100,50,50,50,50,100]);

newGame.addEventListener("click", ()=>{ //if user wants a new game, go back to intro. Note: will clear local storage.
    currentScene = story.intro;
    currentPlayer = new Player(1, [100,5,5,5,5,100], [], [], [], []); //new Player

    gameNav.classList.remove(`notActive`);
    gameNav.classList.add(`gameNavActive`);

    playerImpact(currentPlayer.stats); //update stats
    console.log(currentPlayer.stats);

    generateScene(currentScene);
    advanceText(currentScene);
})

gameText.addEventListener("click", () => {
    if (!isReading) return; //clicks will not increase when not reading
    clicks++
    gameText.classList.remove("notActive");
    currentPlayer.clicks = clicks;

    checkHealth();
    generateScene(currentScene);
    advanceText(currentScene); //onto next text
    generateOptions(currentScene.choices); //will only run once text run out
})

function generateScene(scene) { // adds background
    background.style.backgroundImage = `url(${scene.background})`; //changes background
}


function generateOptions(choices){
    if (isReading) return;

    gameText.classList.add("notActive");
    clicks = 0; //resetting clicks
    currentPlayer.clicks = clicks;

    options.innerHTML = ``;
    gameText.innerHTML = ``;

    choices.forEach((choice) => {
        let option = document.createElement("li"); //creating choice element
        option.innerHTML = `<button>${choice.text}<button>`;
        options.appendChild(option);

        option.addEventListener("click", () => {
            isReading = true; //clicking immediately allows click to advance to happen

            currentPlayer.decisions.push(`${choice.text}`); //update Player history
            playerImpact(choice.impact);

            currentScene = story[choice.nextStep]; //update scene
            checkHealth();
            advanceText(currentScene);
        })

    });
}


function advanceText(event){ //array of story chunk
    if (clicks >= event.text.length) isReading = false; //if making a decision, does not run 
    if (!isReading) return;

    gameText.classList.remove("notActive");
    options.innerHTML = ``;
    gameText.innerHTML = `${event.text[clicks]}`; //insert into textbox

    currentPlayer.decisions.push(`${event.text[clicks]}`); //update Player history
}


//save functions
openSaveOverlay.addEventListener("click", () => {
    document.getElementById("saveFiles").classList.remove("notActive");
})

console.log(saveFile);

saveFile.forEach((file, index) => {
    file.addEventListener("click", () => {
        let playerFile = pullSaveFiles(); //pulling save files or empty array of files
        playerFile[index] = currentPlayer; //on click, assign current player to nth file

        let filebackground = document.querySelector(`#save${index} > img`); //changing background
        filebackground.style.background = `url(.${currentScene.background})`;

        localStorage.setItem("savedPlayers", JSON.stringify(playerFile)); //update storage
        console.log(`Save file #${index} was clicked`);
    })

})

function pullSaveFiles(){
    let saveFiles = JSON.parse(localStorage.getItem("savedPlayers")) || [{},{},{},{},{},{}];
    return saveFiles;
}

