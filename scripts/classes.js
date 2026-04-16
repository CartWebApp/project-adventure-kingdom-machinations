export class Player {
    constructor(saveNumber, stats, weapons, armor, inventory, decisions){
        this.saveNumber = saveNumber;
        this.stats = stats;
        this.weapons = weapons;
        this.armor = armor;
        this.inventory = inventory;
        this.decisions = decisions;
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

