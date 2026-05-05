// order for stats is HP, STR, INT, FORT, SPD, and Sanity 
import { Player, Enemy, Item, Armor, Weapon } from "./classes.js";
import { story } from "./story.js";
import { advanceText, deathScene, generateScene, combatOver } from "../script.js";

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
const enemyStats = document.querySelectorAll(`.enemyStat`);
const enemyStatBar = document.getElementById(`enemyStats`);
let isCombat = false;
let isAlive = true;
let currentPlayer = new Player(1, [100, 5, 5, 5, 5, 100], [], [], [], []); //new Player 

function calculateRandomDamage(baseDamage) {
    if (baseDamage <= 0) return 0;
    const multiplier = Math.random() * (1.2 - 0.8) + 0.8;
    return Math.ceil(baseDamage * multiplier);
}

export function playerImpact(array) {
    playerStats.forEach((stat, index) => {
        let statNumber = Number(stat.innerHTML); //will access number in HTML span in list 
        stat.innerHTML = `${statNumber + array[index]}`; //adds/subtracts story impact number to list 
    })
}

export function enemyImpact(array) {
    enemyStats.forEach((stat, index) => {
        let statNumber = Number(stat.innerHTML);
        console.log(`this is the enemy stats: ${array}`)
        stat.innerHTML = `${statNumber + array[index]}`;
    })
}

export function attack(playerStatsArray, enemyStatsArray) {
    //0: HP, 1: STR, 2: INT, 3: FORT, 4: SPD, 5: SAN 
    if (!isCombat) return;

    let baseEnemyAtk = (.75 * enemyStatsArray[1] - .5 * playerStatsArray[3]);
    let basePlayerAtk = (.85 * playerStatsArray[1] - .25 * enemyStatsArray[3]);

    let enemyAtk = calculateRandomDamage(baseEnemyAtk);
    let playerAtk = calculateRandomDamage(basePlayerAtk);

    if (enemyStatsArray[4] >= 1.25 * playerStatsArray[4]) {
        //enemy attack first if 1.25x faster 
        playerStatsArray[0] -= enemyAtk;
        playerStatsArray[0] = Math.max(0, playerStatsArray[0]);
        playerStats.forEach((stat, index) => { //player lose health 
            stat.innerHTML = `${playerStatsArray[index]}`;
        })
        if (playerStatsArray[0] <= 0) {
            isAlive = false; //death 
        } else {
            enemyStatsArray[0] -= playerAtk;
            enemyStatsArray[0] = Math.max(0, enemyStatsArray[0]);
            enemyStats.forEach((stat, index) => { //enemy lose health 
                stat.innerHTML = `${enemyStatsArray[index]}`;
            })
            if (enemyStatsArray[0] <= 0) {
                isReading = true;//victory! 
                isCombat = false;
                currentScene = story[currentScene.nextStep];
                combatOver();
            }
        }
    } else {
        //player attack first 
        enemyStatsArray[0] -= playerAtk;
        enemyStatsArray[0] = Math.max(0, enemyStatsArray[0]);
        enemyStats.forEach((stat, index) => { //enemy lose health 
            stat.innerHTML = `${enemyStatsArray[index]}`;
        })
        if (enemyStatsArray[0] <= 0) {
            isReading = true;//victory! 
            isCombat = false;
            currentScene = story[currentScene.nextStep];
            combatOver();
        } else {
            playerStatsArray[0] -= enemyAtk;
            playerStatsArray[0] = Math.max(0, playerStatsArray[0]);
            playerStats.forEach((stat, index) => { //player lose health 
                stat.innerHTML = `${playerStatsArray[index]}`;
            })
            if (playerStatsArray[0] <= 0) {
                isAlive = false; //death 
            }
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
    if (!isCombat) return;

    let baseEnemyAtk = (.45 * enemyStatsArray[1] - .8 * playerStatsArray[3]);
    let basePlayerAtk = (.5 * playerStatsArray[1] - .3 * enemyStatsArray[3]);

    let enemyAtk = calculateRandomDamage(baseEnemyAtk);
    let playerAtk = calculateRandomDamage(basePlayerAtk);

    if (enemyStatsArray[4] >= 1.25 * playerStatsArray[4]) {
        //enemy attack first if 1.25x faster 
        playerStatsArray[0] -= enemyAtk;
        playerStatsArray[0] = Math.max(0, playerStatsArray[0]);
        playerStats.forEach((statDisplay, index) => {
            statDisplay.innerHTML = playerStatsArray[index];
        });
        if (playerStatsArray[0] <= 0) {
            isAlive = false; //death 
        } else {
            enemyStatsArray[0] -= playerAtk;
            enemyStatsArray[0] = Math.max(0, enemyStatsArray[0]);
            enemyStats.forEach((statDisplay, index) => {
                statDisplay.innerHTML = enemyStatsArray[index];
            });
            if (enemyStatsArray[0] <= 0) {
                isReading = true;//victory! 
                isCombat = false;
                currentScene = story[currentScene.nextStep];
                combatOver();
            }
        }
    } else {
        //player attack first 
        enemyStatsArray[0] -= playerAtk;
        enemyStatsArray[0] = Math.max(0, enemyStatsArray[0]);
        enemyStats.forEach((stat, index) => { //enemy lose health 
            stat.innerHTML = `${enemyStatsArray[index]}`;
        })
        if (enemyStatsArray[0] <= 0) {
            isReading = true;//victory! 
            isCombat = false;
            currentScene = story[currentScene.nextStep];
            combatOver();
        } else {
            playerStatsArray[0] -= enemyAtk;
            playerStatsArray[0] = Math.max(0, playerStatsArray[0]);
            playerStats.forEach((stat, index) => { //player lose health 
                stat.innerHTML = `${playerStatsArray[index]}`;
            })
            if (playerStatsArray[0] <= 0) {
                isAlive = false; //death 
            }
        }
    }
    playerStatsArray[5] -= 1; //sanity drops after any attack 
    playerStats.forEach((stat, index) => { //player lose health 
        stat.innerHTML = `${playerStatsArray[index]}`;
    })
    console.log(playerStatsArray, enemyStatsArray);
    return playerStatsArray, enemyStatsArray;
}

export function checkHealth() {
    if (isAlive) return;
    console.log('player is dead')
    deathScene();
}

export function combatExists(choice) {
    isCombat = choice.combat;

    if (!choice.combat) return;
    enemyStatBar.classList.remove(`noEnemy`);
    isReading = false; //not reading 

    let enemy = new Enemy(choice.enemyName, choice.enemyStats, choice.enemyAppearance); //enemy holder 
    console.log(enemy);
    background.style.setProperty('--scene-bg', `url(${enemy.appearance})`); //changes background 
    console.log(`these are the enemy: ${enemy.stats}`)

    document.querySelector(`.enemyName`).innerHTML = `${enemy.name}`;
    enemyImpact(enemy.stats);
    options.innerHTML = ``; 
    

    gameText.innerHTML = `Combat Started: Facing ${enemy.name}!`; 
    gameText.classList.remove(`notActive`); 
    options.classList.remove(`notActive`);

    currentScene.choices.forEach((choice, index) => {
   
            currentScene = story[choice.nextStep];

        let option = document.createElement("li"); //creating choice element 
        option.innerHTML = `<button>${choice.text}</button>`;
        options.appendChild(option);
        option.addEventListener("click", () => {

            if (!isCombat) return;
            console.log(`COMBAT`);

            if (index === 0) { //attack 
                attack(currentPlayer.stats, enemy.stats);
                checkHealth();
            }

            if (index === 1) { //defend 
                defend(currentPlayer.stats, enemy.stats);
                checkHealth();
            }

            if (index === 2) { //inventory //open inventory logic 
            }

            if (index === 3) { //run away, change scene 
                combatOver();
                console.log(`running away`)
            }
        })
    })
}
