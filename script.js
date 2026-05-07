import {Player, Enemy, Item, Armor, Weapon} from "./scripts/classes.js";
import {story} from "./scripts/story.js";
import {playerImpact, enemyImpact, attack, defend, checkHealth, combatExists} from "./scripts/combatAndStats.js";

const background = document.querySelector(".border-container"); //background
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");

const options = document.getElementById("options");
const gameText = document.getElementById("gameText");
const saveFile = document.querySelectorAll(".file");
const loadFiles = document.querySelectorAll(`.loadFile`);

const openSaveOverlay = document.getElementById("save-nav");
const closeSaveOverlay = document.getElementById(`closeSave`);

const playerStats = document.querySelectorAll(".playerStat");
const enemyStatBar = document.getElementById(`enemyStats`);
const gameHistory = document.getElementById(`gameHistory`);
const gameHistoryText = document.getElementById(`gameHistoryText`)

let isReading = true;
let isCombat = false;
let isAlive = true;
let isPlaying  = false;

let clicks = 0;
let currentScene = ``;
let currentPlayer; //creating spot for player


updatingSaveFiles();

newGame.addEventListener("click", ()=>{ //if user wants a new game, go back to intro. Note: will clear local storage.
    currentScene = story.intro;


    currentPlayer = new Player(1, [100,10,10,10,10,100], [], [], [], []); //new Player
    currentPlayer.currentScene = story.intro;
    localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage

    isPlaying = true;

    document.getElementById("menuNavigation").style.display = `flex`;
    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);

    playerImpact(currentPlayer.stats); //update stats

    generateScene(currentScene);
    advanceText(currentScene);
})

gameContinuation.addEventListener("click", ()=>{
    document.getElementById("loadFiles").classList.remove("notActive");
    document.getElementById("loadFiles").classList.add("loadActive");
})

gameText.addEventListener("click", () => {
    if(!isPlaying) return; //not advance if not playing
    if (!isReading) return; //clicks will not increase when not reading
    if (isCombat) return; //will not advance during combat

    clicks++
    currentPlayer.clicks = clicks; //updating saved clicks
    localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage

    enemyStatBar.classList.add(`noEnemy`); //removing enemy stat bar and options, adding game text

    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);

    
    generateScene(currentScene);
    advanceText(currentScene); //onto next text
    generateOptions(currentScene.choices); //will only run once text run out
})

export function generateScene(scene) { // adds background
    background.style.setProperty('--scene-bg', `url(${scene.background})`); //changes background
}


function generateOptions(choices){
    if(!isPlaying) return; //not advance if not playing
    if (isReading) return;
    if (isCombat) return;

    console.log(choices)

    gameText.classList.add(`notActive`);
    options.classList.remove(`notActive`);

    clicks = 0; //resetting clicks
    currentPlayer.clicks = clicks; //resetting player clicks
    localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage

    options.innerHTML = ``; //resetting
    gameText.innerHTML = ``;

    choices.forEach((choice, index) => {
        let option = document.createElement("li"); //creating choice element
        option.innerHTML = `<button>${choice.text}</button>`; //including button
        options.appendChild(option);
        console.log(`${choices[index].text}`)


        option.addEventListener("click", () => {
            combatExists(choice); //if combat exists, load combat screen
            if(choice.combat) return;

            console.log(`option was clicked`);

            if (!isAlive && index == 1){ //open inventory
                //load a save file
            } else if (!isAlive && index == 2){ //go to home
                window.location.reload();
            } else {
                isReading = true; //clicking immediately allows click to advance to happen
                currentPlayer.isReading = true;

                currentScene = story[choice.nextStep]; //update scene
                currentPlayer.currentScene = story[choice.nextStep];

                playerImpact(choice.impact); //impacting stats
                currentPlayer = pullActivePlayer();

                advanceText(currentScene);
                generateScene(currentScene);

                if (!isAlive && index == 0){
                    playerStats.forEach((stat, index) => {
                        stat.innerHTML = `${currentPlayer.stats[index]}`; //adds/subtracts story impact number to list
                    })
                    return; 
                } else{ //if still alive
                    currentPlayer.decisions.push(`${choices[index].text}`); //update Player history
                    console.log(currentPlayer)


                    let historyText = document.createElement(`p`); //updating save overlay
                    historyText.innerHTML = `${choices[index].text}`;
                    gameHistoryText.appendChild(historyText);

                    console.log(`${choice}`);
                }
                localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage
                
            }
            
        })

    });
}


export function advanceText(event){ //array of story chunk
    if(!isPlaying) return; //not advance if not playing
    if (!isReading) return; //if player is not reading, return
    if (isCombat) return;
    if (clicks >= event.text.length){
        isReading = false; //if making a decision, does not run 
        currentPlayer.isReading = false;
        localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage
        return;
    }

    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);

    options.innerHTML = ``;
    gameText.innerHTML = `${event.text[clicks]}`; //insert into textbox

    console.log(`Advance Text`)

    if (clicks >= event.text.length){
        return
    } else {
    currentPlayer.decisions.push(`${event.text[clicks]}`); //update Player history

    let historyText = document.createElement(`p`);
    historyText.innerHTML = `${event.text[clicks]}`;
    gameHistoryText.appendChild(historyText);

    localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage
}

}



console.log(saveFile);
saveFile.forEach((file, index) => {
    file.addEventListener("click", () => {
        let playerFile = pullSaveFiles();

        playerFile[index] = currentPlayer;
        console.log(currentPlayer);


        const filebackground = document.querySelector(`#save${index} > button > img`); //changing save background
        filebackground.style.backgroundImage = `url(${currentScene.background})`;

        const loadbackground = document.querySelector(`#load${index} > button > img`); //changing load background
        loadbackground.style.backgroundImage = `url(${currentScene.background})`;

        localStorage.setItem("savedPlayers", JSON.stringify(playerFile)); //saving players to local storage
        console.log(`Save file #${index} was clicked`);

        document.getElementById("saveFiles").classList.add("notActive");
    })

})

loadFiles.forEach((file, index) => {
    file.addEventListener(`click`, () =>{

        let playerFile = pullSaveFiles(); //pulling save files
        currentPlayer = playerFile[index]; //making current player = save file index

        clicks = currentPlayer.clicks //updating clicks
        currentScene = currentPlayer.currentScene;
        isPlaying = currentPlayer.isPlaying;
        isCombat = currentPlayer.isCombat;
        isReading = currentPlayer.isReading;
        isAlive = currentPlayer.isAlive;

        gameHistoryText.innerHTML = ``; //resetting history

        currentPlayer.decisions.forEach(decision => { //adding history
            let historyText = document.createElement(`p`);
            historyText.innerHTML = `${decision}`;
            gameHistoryText.appendChild(historyText);
        })

        localStorage.setItem("activePlayer", JSON.stringify(currentPlayer)); //saving active player to local storage

        //setting up scene
        generateScene(currentScene);
        advanceText(currentScene); //onto next text
        generateOptions(currentScene.choices); //will only run once text run out

        document.getElementById("loadFiles").classList.add("notActive");
        document.getElementById("loadFiles").classList.remove("loadActive");
    })

})

function pullSaveFiles(){
    let saveFiles = JSON.parse(localStorage.getItem("savedPlayers")) || [{},{},{},{},{},{}];
    return saveFiles;
}

export function pullActivePlayer(){
    let saveFiles = JSON.parse(localStorage.getItem("activePlayer")) || [{},{},{},{},{},{}];
    return saveFiles;
}


export function deathScene(){
    isAlive = false;
    isReading = true;
    isCombat = false;

    currentPlayer.isAlive = false;
    currentPlayer.isReading = true;
    currentPlayer.isCombat = false;

    currentScene = story.deathRIP;
    currentPlayer.currentScene = story.deathRIP;

    clicks = 0;
    currentPlayer.clicks = 0;

    advanceText(currentScene);
    generateScene(currentScene);
}

export function combatOver(){
    isReading = true;
    isCombat = false;
    clicks = 0;

    currentPlayer = pullActivePlayer();

    currentPlayer.isReading = true;
    currentPlayer.isCombat = false;
    currentPlayer.clicks = 0;

    console.log(currentScene);

    currentScene = story[currentScene.nextStep];
    currentPlayer.currentScene = story[currentScene.nextStep];

    
    console.log(currentScene);
    generateScene(currentScene);
    advanceText(currentScene);
}

function updatingSaveFiles(){
    let saveFiles = JSON.parse(localStorage.getItem("savedPlayers")) || [{},{},{},{},{},{}];
    console.log(saveFiles);

    saveFiles.forEach((file, index) => {
        console.log(file);
        if(!file.background) return;
        const filebackground = document.querySelector(`#save${index} > button > img`); //changing save background
        filebackground.style.backgroundImage = `url(${file.currentScene.background})`;
    })
}

let enemy = new Enemy("Bob", [100,10,12,15,100], ``);
console.log(enemy)

//save functions
openSaveOverlay.addEventListener("click", () => {
    document.getElementById("saveFiles").classList.remove("notActive");
    document.getElementById("saveFiles").classList.add("saveActive");
})

closeSaveOverlay.addEventListener("click", ()=>{
    document.getElementById("saveFiles").classList.add("notActive");
    document.getElementById("saveFiles").classList.remove("saveActive");
})

//Nav Event listeners
document.querySelector(`#exit-nav > button`).addEventListener("click", ()=>{
    window.location.reload();
})

//load overlay
document.querySelector(`#load-nav > button`).addEventListener("click", () => {
    document.getElementById("loadFiles").classList.remove("notActive");
    document.getElementById("loadFiles").classList.add("loadActive");
})

document.querySelector(`#closeLoad`).addEventListener("click", ()=>{
    document.getElementById("loadFiles").classList.add("notActive");
    document.getElementById("loadFiles").classList.remove("loadActive");
})

//inventory
document.querySelector(`#inventory-nav > button`).addEventListener("click", () => {
    document.getElementById("inventory").classList.remove("notActive");
    document.getElementById("inventory").classList.add("active");
})

document.querySelector(`#closeInventory`).addEventListener("click", ()=>{
    document.getElementById("inventory").classList.add("notActive");
    document.getElementById("inventory").classList.remove("active");
})

//history
document.querySelector(`#history-nav > button`).addEventListener("click", () => {
    gameHistory.classList.remove("notActive");
    gameHistory.classList.add("active");
})

document.querySelector(`#closeHistory`).addEventListener("click", ()=>{
    gameHistory.classList.add("notActive");
    gameHistory.classList.remove("active");
})


