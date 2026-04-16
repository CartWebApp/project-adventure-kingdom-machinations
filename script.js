import {Player, Item} from "./scripts/classes.js";
import {story} from "./scripts/story.js";

const scene = document.getElementById("scene");
const newGame = document.getElementById("continue-game"); //will update later so that will check local browser storage for player JSON's. If empty, button will appear as new game
const gameContinuation = document.getElementById("continue-game");
const options = document.getElementById("options");

let isReading = true;
let isChoosing = false;
let clicks = 0;

newGame.addEventListener("click", ()=>{
    console.log("clicked");
    scenePlaythrough(story.intro);
})


/*
const newPlayer =  new Player(1, [1,2,3,4,5], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], ["intro", "intro2W"])
console.log(newPlayer);
newPlayer.stats.forEach(stat => {
    console.log(stat);
});

tesing out layout of player class
*/


//advance text functions and game modifications on user input

function scenePlaythrough(event){
    const options = document.getElementById("options");
    isReading = true;
    clicks = 0;
    

    options.addEventListener("click", () => {
        console.log(`${clicks}`);
        
        if (clicks >= event.text.length){ //if clicks exceed text pieces in array, advance text function will stop
            isReading = false;
        }
        console.log(`isReading is "${isReading}"`);

        generateScene(event);
        advanceText(event);
        generateOptions(event.choices);

        clicks++;
    })
}

function generateScene(scene){
    const background = document.getElementById("scene");
    background.style.backgroundImage = `url(${scene.background})`;
}


function generateOptions(choices){ //will take an array
    if (isReading) return;

    options.innerHTML = ``; //clears textbox

    choices.forEach((choice) => {
        let option = document.createElement("li"); //creating choices
        option.innerHTML = `${choice.text}`;
        options.appendChild(option);

        option.addEventListener("click", () => {
            console.log("An option was clicked")
            scenePlaythrough(story[choice.nextStep]);
        })

    });
}


function advanceText(event){ //array of story
    if (!isReading) return; //if not viewing text, function does nothing

    options.innerHTML = `${event.text[clicks]}`; //insert into textbox
    console.log("clicked")
}

