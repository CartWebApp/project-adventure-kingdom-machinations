import {Player, Item} from "./scripts/classes.js";
import {story} from "./scripts/story.js";

const scene = document.getElementById("scene"); //background
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");

const options = document.getElementById("options");
const gameText = document.getElementById("gameText");

let isReading = true;
let isChoosing = false;
let clicks = 0;
let currentScene = ``;
let currentPlayer; //creating spot for player

newGame.addEventListener("click", ()=>{ //if user wants a new game, go back to intro. Note: will clear local storage.
    currentScene = story.intro;
    currentPlayer = new Player(1, [0,0,0,0,0,0], [], [], [], []); //new Player
    console.log(currentPlayer);
    advanceText(currentScene);
})

gameText.addEventListener("click", () => {
    if (!isReading) return; //clicks will not increase when not reading
    clicks++

    advanceText(currentScene); //onto next text
    generateOptions(currentScene.choices); //will only run once text run out
})

function generateScene(scene){ //adds background
    const background = document.getElementById("scene");
    background.style.backgroundImage = `url(${scene.background})`; //changing background
}


function generateOptions(choices){
    if (isReading) return;

    clicks = 0; //resetting clicks

    options.innerHTML = ``;
    gameText.innerHTML = ``;

    choices.forEach((choice) => {
        let option = document.createElement("li"); //creating choices
        option.innerHTML = `${choice.text}`;
        options.appendChild(option);

        option.addEventListener("click", () => {
            isReading = true; //clicking immediately allows click to advance to happen

            currentPlayer.decisions.push(`${choice.text}`); //update Player history

            currentScene = story[choice.nextStep]; //update scene
            advanceText(currentScene);
        })

    });
}


function advanceText(event){ //array of story
    if (clicks >= event.text.length) isReading = false;
    if (!isReading) return;


    options.innerHTML = ``;
    gameText.innerHTML = `${event.text[clicks]}`; //insert into textbox

    currentPlayer.decisions.push(`${event.text[clicks]}`); //update Player history
}

