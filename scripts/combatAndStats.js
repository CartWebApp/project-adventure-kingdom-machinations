//order for stats is HP, STR, INT, FORT, SPD, and Sanity
import {Player, Enemy, Item, Armor, Weapon} from "./classes.js";
import {story} from "./story.js";

let currentScene = ``;
let clicks = 0;
let isReading = false;

const background = document.querySelector(".border-container"); //background
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");

const options = document.getElementById("options");
const gameText = document.getElementById("gameText");
const saveFile = document.querySelectorAll(".file");
const openSaveOverlay = document.getElementById("save-nav");
const closeSaveOverlay = document.getElementById(`closeSave`);
const playerStats = document.querySelectorAll(".playerStat");
const enemyStats = document.querySelectorAll(`.enemyStat`)

let isCombat = false;
let isAlive = true;

let currentPlayer = new Player(1, [100,5,5,5,5,100], [], [], [], []); //new Player

export function playerImpact(array){
    playerStats.forEach((stat, index) => {
        let statNumber = Number(stat.innerHTML); //will access number in HTML span in list
        stat.innerHTML = `${statNumber + array[index]}`; //adds/subtracts story impact number to list
    })
}

export function enemyImpact(array){
    enemyStats.forEach((stat, index) => {
        let statNumber = Number(stat.innerHTML);
        console.log(`this is the enemy stats: ${array}`)
        stat.innerHTML = `${statNumber + array[index]}`;
    })
}

export function attack(playerStatsArray, enemyStatsArray){ //0: HP, 1: STR, 2: INT, 3: FORT, 4: SPD, 5: SAN
let enemyAtk = Math.ceil(.75 * enemyStatsArray[1] - .5 * playerStatsArray[3]); //subtract (75% of STR minus 50% FORT) from player HP
let playerAtk = Math.ceil(.85 * playerStatsArray[1] - .25 * enemyStatsArray[3]); //subtract (85% STR minus 25% FORT) from enemy HP

    if (enemyStatsArray[4] >= 1.25 * playerStatsArray[4]) { //enemy attack first if 1.25x faster
        playerStatsArray[0] -= enemyAtk > 0 ? enemyAtk : 0; //if attack less than 0, no damage
        playerStats.forEach((stat, index) => { //player lose health
            stat.innerHTML = `${playerStatsArray[index]}`;
        })

        if (playerStatsArray[0] <= 0){
            isAlive = false; //death
            return;
        } else {
            enemyStatsArray[0] -= playerAtk > 0 ? playerAtk : 0;
            enemyStats.forEach((stat, index) => { //enemy lose health
                stat.innerHTML = `${enemyStatsArray[index]}`;
            })
        }
    } else { //player attack first
        enemyStatsArray[0] -= playerAtk > 0 ? playerAtk : 0;
        enemyStats.forEach((stat, index) => { //enemy lose health
            stat.innerHTML = `${enemyStatsArray[index]}`;
        })

        if (enemyStatsArray[0] <= 0){
            isReading = true;//victory!
            isCombat = false;
            currentScene = currentScene.nextStep;
            return;
        } else {
            playerStatsArray[0] -= enemyAtk > 0 ? enemyAtk : 0;
            playerStats.forEach((stat, index) => { //player lose health
                stat.innerHTML = `${playerStatsArray[index]}`;
            })
        }
    }

    playerStatsArray[5] -= 1; //sanity drops after any attack
    playerStats.forEach((stat, index) => { //player lose health
        stat.innerHTML = `${playerStatsArray[index]}`;
    })
    console.log(playerStatsArray, enemyStatsArray);
    return playerStatsArray, enemyStatsArray;
}

export function defend(playerStatsArray, enemyStatsArray) {
let enemyAtk = Math.ceil(.45 * enemyStatsArray[1] - .8 * playerStatsArray[3]); //subtract (45% of STR minus 80% FORT) from player HP
let playerAtk = Math.ceil(.5 * playerStatsArray[1] - .3 * enemyStatsArray[3]); //subtract (50% STR minus 25% FORT) from enemy HP

    if (enemyStatsArray[4] >= 1.25 * playerStatsArray[4]) { //enemy attack first if 1.25x faster
        playerStatsArray[0] -= enemyAtk > 0 ? enemyAtk : 0; //if attack less than 0, no damage
        playerStats.forEach((stat, index) => { //player lose health
            stat.innerHTML = `${playerStatsArray[index]}`;
        })

        if (playerStatsArray[0] <= 0){
            isAlive = false; //death
            return;
        } else {
            enemyStatsArray[0] -= playerAtk > 0 ? playerAtk : 0;
            enemyStats.forEach((stat, index) => { //enemy lose health
                stat.innerHTML = `${enemyStatsArray[index]}`;
            })
        }
    } else { //player attack first
        enemyStatsArray[0] -= playerAtk > 0 ? playerAtk : 0;
        enemyStats.forEach((stat, index) => { //enemy lose health
            stat.innerHTML = `${enemyStatsArray[index]}`;
        })

        if (enemyStatsArray[0] <= 0){
            isReading = true;//victory!
            isCombat = false;
            currentScene = currentScene.nextStep;
            return;
        } else {
            playerStatsArray[0] -= enemyAtk > 0 ? enemyAtk : 0;
            playerStats.forEach((stat, index) => { //player lose health
                stat.innerHTML = `${playerStatsArray[index]}`;
            })
        }
    }

    playerStatsArray[5] -= 1; //sanity drops after any attack
    playerStats.forEach((stat, index) => { //player lose health
        stat.innerHTML = `${playerStatsArray[index]}`;
    })
    console.log(playerStatsArray, enemyStatsArray);
    return playerStatsArray, enemyStatsArray;
}

export function checkHealth(){
    if(!isAlive) return;
    clicks = 0; //reset and move to death screen
    isAlive = false;
    isReading = true;
    currentScene = `deathRIP`;
}

export function combatExists(choice){
    isCombat = choice.combat;
    if (!choice.combat) return;

    isReading = false; //not reading
    let enemy = new Enemy(choice.enemyName, choice.enemyStats, choice.enemyAppearance); //enemy holder
    console.log(enemy);
    
    background.style.setProperty('--scene-bg', `url(${enemy.appearance})`); //changes background
    console.log(`these are the enemy: ${enemy.stats}`)
    enemyImpact(enemy.stats);

    options.innerHTML = ``; //clearing
    gameText.innerHTML = ``;

    gameText.classList.add(`notActive`); //making visible
    options.classList.remove(`notActive`);

    currentScene = story[choice.nextStep]; //update scene

    currentScene.choices.forEach((choice, index) => {
        let option = document.createElement("li"); //creating choice element
        option.innerHTML = `<button>${choice.text}</button>`;
        options.appendChild(option);

        option.addEventListener("click", () => {
            if (index === 0){ //attack
                attack(currentPlayer.stats, enemy.stats);
                checkHealth();
            }
            if (index === 1){ //defend
                defend(currentPlayer.stats, enemy.stats);
                checkHealth();
            }
            if (index === 2){ //inventory
                //open inventory logic
            }
            if (index === 3){ //run away, change scene
                isReading = true;
                isCombat = false;
                currentScene = currentScene.nextStep;
            }
        })
    })
}