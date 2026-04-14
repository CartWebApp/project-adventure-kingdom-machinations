import {Player, Item} from "/classes.js";

let isReading = true;
let isChoosing = false;

const story = {
    intro: {
        background: "",
        text: [
            "You find yourself in the midst of battle, armed with only a dagger. A squad of 10 men surround you, carrying shields and spears.",
            `"Freeze! Do not move!”`,
            `Your body felt extremely sluggish. Try as you might, it was as if an external force was preventing you from moving at all.`
        ],

        choices: [
            {text: "", scene: "", nextStep: "Intro2W", HP: 0, STR: 1, INT: -1, SPD: 0, FORT: 0, SAN: 0},
            {text: "", scene: "", nextStep: "Intro2w", HP: 0, STR: 1, INT: -1, SPD: 0, FORT: 0, SAN: 0},
            {text: "", scene: "", nextStep: "", HP: 0, STR: 1, INT: -1, SPD: 0, FORT: 0, SAN: 0}
        ]
    }
}

const newPlayer =  new Player(1, [1,2,3,4,5], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], ["intro", "intro2W"])
console.log(newPlayer);
