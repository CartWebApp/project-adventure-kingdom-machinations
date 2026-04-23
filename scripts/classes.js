export class Player {
    constructor(saveNumber, stats, weapons, armor, inventory, decisions){
        this.saveNumber = saveNumber; //for save file
        this.stats = stats; //array: [HP, STR, INT, FORT, SPD, SAN]
        this.weapons = weapons; //user item class
        this.armor = armor; //user item class
        this.inventory = inventory; //user item class
        this.decisions = decisions; //for player history
        this.clicks = 0;
    }
}

export class Item {
    constructor(name, description, stats, appearance){
        this.name = name || '';
        this.description = description || "";
        this.stats = stats || [];
        this.appearance = appearance || "";
    }
}

const newPlayer =  new Player(1, [1,2,3,4,5], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], ["intro", "intro2W"]);