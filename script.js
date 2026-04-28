import {Player, Enemy, Item, Armor, Weapon} from "./scripts/classes.js";
import {story} from "./scripts/story.js";
import {playerImpact, attack, defend, checkHealth} from "./scripts/combatAndStats.js";

const background = document.querySelector(".border-container"); //background
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");

const options = document.getElementById("options");
const gameText = document.getElementById("gameText");
const saveFile = document.querySelectorAll(".file");
const openSaveOverlay = document.getElementById("save-nav");
const closeSaveOverlau = document.getElementById(`closeSave`);

const playerStats = document.querySelectorAll(".playerStat");

let isReading = true;
let isCombat = false;
let isAlive = true;
let isPlaying  = false;

let clicks = 0;
let currentScene = ``;
let currentPlayer; //creating spot for player



newGame.addEventListener("click", ()=>{ //if user wants a new game, go back to intro. Note: will clear local storage.
    currentScene = story.intro;
    currentPlayer = new Player(1, [100,10,10,10,10,100], [], [], [], []); //new Player
    isPlaying = true;

    document.getElementById("menuNavigation").style.display = `flex`;
    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);

    playerImpact(currentPlayer.stats); //update stats
    console.log(currentPlayer.stats);

    generateScene(currentScene);
    advanceText(currentScene);
})

gameText.addEventListener("click", () => {
    if(!isPlaying) return; //not advance if not playing
    if (!isReading) return; //clicks will not increase when not reading
    if (isCombat) return; //will not advance during combat

    clicks++

    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);
    currentPlayer.clicks = clicks;

    checkHealth();
    generateScene(currentScene);
    advanceText(currentScene); //onto next text
    generateOptions(currentScene.choices); //will only run once text run out
})

function generateScene(scene) { // adds background
    background.style.setProperty('--scene-bg', `url(${scene.background})`); //changes background
}


function generateOptions(choices){
    if(!isPlaying) return; //not advance if not playing
    if (isReading) return;


    gameText.classList.add(`notActive`);
    options.classList.remove(`notActive`);

    clicks = 0; //resetting clicks
    currentPlayer.clicks = clicks;

    options.innerHTML = ``;
    gameText.innerHTML = ``;

    choices.forEach((choice) => {
        let option = document.createElement("li"); //creating choice element
        option.innerHTML = `<button>${choice.text}</button>`;
        options.appendChild(option);

        option.addEventListener("click", () => {
            isReading = true; //clicking immediately allows click to advance to happen

            currentScene = story[choice.nextStep]; //update scene
            playerImpact(choice.impact); //impacting stats
            checkHealth(); //if below 0, death scene
            advanceText(currentScene);

            currentPlayer.decisions.push(`${choice.text}`); //update Player history
        })

    });
}


function advanceText(event){ //array of story chunk
    if(!isPlaying) return; //not advance if not playing
    if (clicks >= event.text.length) isReading = false; //if making a decision, does not run 
    if (!isReading) return; //if player is not reading, return
    if (isCombat) return;

    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);

    options.innerHTML = ``;
    gameText.innerHTML = `${event.text[clicks]}`; //insert into textbox

    currentPlayer.decisions.push(`${event.text[clicks]}`); //update Player history
}


//save functions
openSaveOverlay.addEventListener("click", () => {
    document.getElementById("saveFiles").classList.remove("notActive");
    document.getElementById("saveFiles").classList.add("saveActive");
})

closeSaveOverlau.addEventListener("click", ()=>{
    document.getElementById("saveFiles").classList.add("notActive");
    document.getElementById("saveFiles").classList.remove("saveActive");
})

console.log(saveFile);
saveFile.forEach((file, index) => {
    file.addEventListener("click", () => {
        let playerFile = pullSaveFiles();
        playerFile[index] = currentPlayer;

        let filebackground = document.querySelector(`#save${index} > img`);
        filebackground.style.background = `url(.${currentScene.background})`;

        localStorage.setItem("savedPlayers", JSON.stringify(playerFile))
        console.log(`Save file #${index} was clicked`);

        document.getElementById("saveFiles").classList.add("notActive");
    })

})

function pullSaveFiles(){
    let saveFiles = JSON.parse(localStorage.getItem("savedPlayers")) || [{},{},{},{},{},{}];
    return saveFiles;
}
