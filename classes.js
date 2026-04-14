export class Player {
    constructor(saveNumber, stats, weapons, armor, inventory, decisions){
        this.saveNumber = 0;
        this.stats = [];
        this.weapons = [];
        this.armor = [];
        this.inventory = [];
        this.decisions = [];
    }
}

export class Item {
    constructor(name, description, stats, appearance){
        this.name = "";
        this.description = '';
        this.stats = [];
        this.appearance = '';
    }
}

const newPlayer =  new Player(1, [1,2,3,4,5], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], [new Item("exe", "new", [1,1,1,1,1], "")], ["intro", "intro2W"])

