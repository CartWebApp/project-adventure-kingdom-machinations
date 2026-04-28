export const story = {
    intro: {
        background: `/backgrounds/battle-vision.avif`,
        text: [
            "You find yourself in the midst of battle, armed with only a dagger. A squad of 10 men surround you, carrying shields and spears.",
            `"Freeze! Do not move!”`,
            `Your body felt extremely sluggish. Try as you might, it was as if an external force was preventing you from moving at all.`
        ],

        choices: [
            { text: "Attack the men", nextStep: "intro2W", impact: [0, 0, -5, 5, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            { text: "Try and talk things out", nextStep: "intro2H", impact: [0, 0, 5, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            { text: "Set down your weapon", nextStep: "intro2T", impact: [0, 0, 5, -5, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []}
        ]
    },

    intro2W: {
        background: "/backgrounds/battle-vision.avif",
        text: [
            "You reason that you would rather fight than get captured, and you try to fight against the force keeping your body still. The moment you so much as twitch, the men quickly attack.",
            `“UGH-”`,
            `Suddenly, you awake with your fist in the air. It was a nightmare, one that had persisted your entire life. It was strange; you had never been on a battlefield before.`,
            `[+5 fortitude, -5 intelligence]`
        ],

        choices: [
            { text: "Begin your morning training", nextStep: "dailyW", impact: [2, 2, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            { text: "Take a walk outside to calm down", nextStep: "dailyGA", impact: [0, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            { text: "Make some breakfast", nextStep: "dailyGB", impact: [2, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []}
        ]
    },

    intro2H: {
        background: "/backgrounds/battle-vision.avif",
        text: [
            `You reason that talking things out would be best. You try to open your mouth to no avail. The man in front of you steps forward. He readies his spear, “Screw this.”`,
            `“...”`,
            `Suddenly, you're in bed. It was a vision, one that had appeared constantly your entire life. It was strange; you had never been on a battlefield before.`,
            `[+5 intelligence]`
        ],

        choices: [
            { text: "Begin your morning training", nextStep: "dailyW", impact: [2, 2, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            { text: "Take a walk outside to calm down", nextStep: "dailyGA", impact: [0, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            { text: "Make some breakfast", nextStep: "dailyGB", impact: [2, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []}]
    },

    intro2T: {
        background: "/backgrounds/battle-vision.avif",
        text: [
            `You reason that you should surrender; it would probably lead to your survival in this situation. You fight against your sluggish body to set the weapon down. The moment you so much as twitch, the men swiftly attack.`,
            `“AHH-”`,
            `Suddenly, you awake with your hand on your heart. It was a vision, one that had appeared constantly your entire life. It was strange; you had never been on a battlefield before.`,
            `[-5 fortitude, +5 intelligence]`
        ],

        choices: [
            {text: "Go back to sleep", nextStep: "dailyT", impact: [0,0,0,0,0,0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: "Take a walk outside to calm down", nextStep: "dailyGA", impact: [0,0,0,0,0,0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: "Make some breakfast", nextStep: "dailyGB", impact: [0,0,0,0,0,0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []}
        ]
    },

    mockLeadUp:{
        background: ``,
        text: [`YOU DARE LOOK AT ME?`, `LET'S DO THIS!`, `I AM DANGEROUS!`],
        choices: [
            {text: `Calm Down`, nextStep: ``, impact: [], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: `LET'S DO THIS`, nextStep: `mockBattle`, impact: [0,0,0,0,0,0], combat: false, enemy: [100, 50, 50, 50, 50], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: `I'm Outta Here!`, nextStep: ``, impact: [], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
        ]
    },

    mockBattle:{
        background: ``,
        text: [],
        choices: [
            {text: `Attack`},
            {text: `Defend`},
            {text: `Inventory`},
            {text: `Run Away`}
        ]
    },

    deathRIP: {
        background: "/backgrounds/death.jpg",
        text: [
            `Oh...`,
            `Seems like you ran out of health...`,
            `RIP`
        ],

        choices: [
            {text: `Restart your attempt`, nextStep: `intro`},
            {text: `Load a save file`},
            {text: `Go to home`}
        ]
    }
}