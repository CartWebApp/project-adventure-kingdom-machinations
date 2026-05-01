import {Player, Enemy, Item, Armor, Weapon} from "./scripts/classes.js";
import {story} from "./scripts/story.js";
import {playerImpact, enemyImpact, attack, defend, checkHealth, combatExists} from "./scripts/combatAndStats.js";

const background = document.querySelector(".border-container"); //background
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");

const options = document.getElementById("options");
const gameText = document.getElementById("gameText");
const saveFile = document.querySelectorAll(".file");
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

    enemyStatBar.classList.add(`noEnemy`);
    gameText.classList.remove(`notActive`);
    options.classList.add(`notActive`);
    currentPlayer.clicks = clicks;
    
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
    currentPlayer.clicks = clicks;

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

                currentScene = story[choice.nextStep]; //update scene
                playerImpact(choice.impact); //impacting stats

                advanceText(currentScene);
                generateScene(currentScene);

                if (!isAlive && index == 0){
                    playerStats.forEach((stat, index) => {
                        stat.innerHTML = `${currentPlayer.stats[index]}`; //adds/subtracts story impact number to list
                    })
                    return; 
                } else{
                    currentPlayer.decisions.push(`${choices[index].text}`); //update Player history
                    console.log(currentPlayer)


                    let historyText = document.createElement(`p`); //updating save overlay
                    historyText.innerHTML = `${choices[index].text}`;
                    gameHistoryText.appendChild(historyText);

                    console.log(`${choice}`);
                }

                
            }
            
        })

    });
}


export function advanceText(event){ //array of story chunk
    if(!isPlaying) return; //not advance if not playing
    if (!isReading) return; //if player is not reading, return
    if (isCombat) return;
    if (clicks >= event.text.length) isReading = false; //if making a decision, does not run 
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
}

}




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

export function deathScene(){
    isAlive = false;
    isReading = true;
    isCombat = false;
    currentScene = story.deathRIP;
    clicks = 0;
    advanceText(currentScene);
    generateScene(currentScene);
}

export function combatOver(){
    isReading = true;
    isCombat = false;
    clicks = 0;
    console.log(currentScene);
    currentScene = story[currentScene.nextStep];
    console.log(currentScene);
    generateScene(currentScene);
    advanceText(currentScene);
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


