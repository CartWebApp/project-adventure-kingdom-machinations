export const story = {
    intro: {
        background: `/backgrounds/battle-vision.avif`,
        text: [
            "You find yourself in the midst of battle, armed with only a dagger. A squad of 10 men surround you, carrying shields and spears.",
            `"Freeze! Do not move!”`,
            `Your body felt extremely sluggish. Try as you might, it was as if an external force was preventing you from moving at all.`
        ],

        choices: [
            {text: "Attack the men", scene: "", nextStep: "intro2W", impact: [0,0,0,0,0,0]},
            {text: "Try and talk things out", scene: "", nextStep: "intro2H", impact: [0,0,0,0,0,0]},
            {text: "Set down your weapon", scene: "", nextStep: "intro2T", impact: [0,0,0,0,0,0]}
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
            {text: "Begin your morning training", scene: "", nextStep: "dailyW", impact: [0,0,0,0,0,0]},
            {text: "Take a walk outside to calm down", scene: "", nextStep: "dailyGA", impact: [0,0,0,0,0,0]},
            {text: "Make some breakfast", scene: "", nextStep: "dailyGB", impact: [0,0,0,0,0,0]}
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
            {text: "Read a book to calm down", scene: "", nextStep: "dailyH", impact: [0,0,0,0,0,0]},
            {text: "Take a walk outside to calm down", scene: "", nextStep: "dailyGA", impact: [0,0,0,0,0,0]},
            {text: "Make some breakfast", scene: "", nextStep: "dailyGB", impact: [0,0,0,0,0,0]}
        ]
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
            {text: "Go back to sleep", scene: "", nextStep: "dailyT", impact: [0,0,0,0,0,0]},
            {text: "Take a walk outside to calm down", scene: "", nextStep: "dailyGA", impact: [0,0,0,0,0,0]},
            {text: "Make some breakfast", scene: "", nextStep: "dailyGB", impact: [0,0,0,0,0,0]}
        ]
    }
}