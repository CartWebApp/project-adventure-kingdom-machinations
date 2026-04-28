export const story = {
    intro: {
        background: `/backgrounds-png/battle-vision.png`,
        text: [
            "You find yourself in the midst of battle, armed with only a dagger. A squad of 10 men surround you, carrying shields and spears.",
            `"Freeze! Do not move!”`,
            `Your body feels extremely sluggish. Try as you might, it was as if an external force was preventing you from moving at all.`
        ],

        choices: [
            { text: "Attack the men", nextStep: "intro2W", impact: [0, 0, -5, 5, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Try and talk things out", nextStep: "intro2H", impact: [0, 0, 5, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Set down your weapon", nextStep: "intro2T", impact: [0, 0, 5, -5, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    intro2W: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            "You reason that you would rather fight than get captured, and you try to fight against the force keeping your body still. The moment you so much as twitch, the men quickly attack.",
            `“UGH-”`,
            `Suddenly, you awake with your fist in the air. It was a nightmare, one that had persisted your entire life. It was strange; you had never been on a battlefield before.`,
            `[+5 fortitude, -5 intelligence]`
        ],

        choices: [
            { text: "Begin your morning training", nextStep: "day1Morning", impact: [2, 2, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Take a walk outside to calm down", nextStep: "day1Morning", impact: [0, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Make some breakfast", nextStep: "day1Morning", impact: [2, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    intro2H: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `You reason that talking things out would be best. You try to open your mouth to no avail. The man in front of you steps forward. He readies his spear, “Screw this.”`,
            `“...”`,
            `Suddenly, you're in bed. It was a vision, one that had appeared constantly your entire life. It was strange; you had never been on a battlefield before.`,
            `[+5 intelligence]`
        ],

        choices: [
            { text: "Begin your morning training", nextStep: "day1Morning", impact: [2, 2, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Take a walk outside to calm down", nextStep: "day1Morning", impact: [0, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Make some breakfast", nextStep: "day1Morning", impact: [2, 0, 0, 2, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }]
    },

    intro2T: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `You reason that you should surrender; it would probably lead to your survival in this situation. You fight against your sluggish body to set the weapon down. The moment you so much as twitch, the men swiftly attack.`,
            `“AHH-”`,
            `Suddenly, you awake with your hand on your heart. It was a vision, one that had appeared constantly your entire life. It was strange; you had never been on a battlefield before.`,
            `[-5 fortitude, +5 intelligence]`
        ],

        choices: [
            { text: "Go back to sleep", nextStep: "day1Morning", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Take a walk outside to calm down", nextStep: "day1Morning", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Make some breakfast", nextStep: "day1Morning", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    mockLeadUp: {
        background: ``,
        text: [`YOU DARE LOOK AT ME?`, `LET'S DO THIS!`, `I AM DANGEROUS!`],
        choices: [
            { text: `Calm Down`, nextStep: ``, impact: [], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: `LET'S DO THIS`, nextStep: `mockBattle`, impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [100, 50, 50, 50, 50], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: `I'm Outta Here!`, nextStep: ``, impact: [], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    mockBattle: {
        background: ``,
        text: [],
        choices: [
            { text: `Attack` },
            { text: `Defend` },
            { text: `Inventory` },
            { text: `Run Away` }
        ]
    },

    deathRIP: {
        background: "/backgrounds-png/death.png",
        text: [
            `Oh...`,
            `Seems like you ran out of health...`,
            `RIP`
        ],

        choices: [
            { text: `Restart your attempt`, nextStep: `intro` },
            { text: `Load a save file` },
            { text: `Go to home` }
        ]
    },

    day1Morning: {
        background: "/backgrounds-png/church.png",
        text: [
            `The bishop's words hang over your head like a storm cloud that refuses to pass. You leave him standing in the doorway—or on the church steps—and try to return to your life.`,
            `But Brenwall has changed. Or maybe you have. The royal soldiers in their black-and-gold livery are posted at the market entrance now.`,
            `People stop talking when you walk by. The church bells seem to ring a little longer than they used to.`,
            `You have a few days before the pressure becomes unavoidable.`
        ],
        choices: [
            { text: `The morning after the bishop's visit, you wake with your jaw clenched. Another nightmare—another field of bodies, another sky the color of rust.`, nextStep: "day1Morning2", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }]
    },

    day1Morning2: {
        background: "/backgrounds-png/bedroom.png",
        text: [
            `You sit at the edge of your bed and try to slow your breathing.`
        ],

        choices: [
            { text: "Watch the Aldenmere soldiers drill", nextStep: "day1W", impact: [0, 0, 0, 1, 0, -1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Return to the church", nextStep: "day1H", impact: [0, 0, 2, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Go to the market", nextStep: "day1T", impact: [0, 0, 0, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Sit by the river at the edge of town", nextStep: "day1GA", impact: [0, 0, 0, 0, 0, 3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Stay home and tend to your chores", nextStep: "day1GB", impact: [0, 0, 0, 1, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },


    day1W: {
        background: "/backgrounds-png/training.png",
        text: [
            `You make your way toward the drill yard on the northern edge of town. A company of twenty soldiers is running formation exercises under the bark of a broad-shouldered sergeant.`,
            `You watch from the fence. The movements are mechanical, deliberate—nothing like the frantic chaos in your visions.`,
            `And yet something in your chest tightens watching them. A familiar dread, and beneath it—something you'd rather not name. Recognition.`,
            `Sir Edran Croft, the town's old weaponsmith, leans against the fence a few posts down from you. He's watching the same drill.`,
            `"You're the one the bishop's been talking about, aren't you?" he says without looking at you. He doesn't say it like a question.`,
            `You don't answer. He doesn't push. You both watch the soldiers for another few minutes in silence.`,
            `"Come by the forge sometime," he says eventually, and walks away.`
        ],

        choices: [
            { text: "Go to the market", nextStep: "day2", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },



    day1H: {
        background: "/backgrounds-png/church.png",
        text: [
            `The bishop, Brother Callen, is in the middle of leading morning prayers when you arrive.`,
            `He spots you immediately and wraps things up early, pulling you into the vestibule with an expression of barely-contained urgency.`,
            `"I've been reading the full text of Aelara's prophecy," he says, pressing a worn parchment into your hands. "There is more to it than I initially told you. Read this. Please."`,
            `The parchment describes the 'bearer of a past life's grief' finding peace not through war, but through understanding.`,
            `It also mentions a second soul, 'forged in iron,' who would either stand beside the first or destroy them. You're not sure which part is more unsettling.`,
            `"The King has already sent his steward to inquire about you," Callen adds. "You need to decide soon."`
        ],

        choices: [
            { text: "Go to the market", nextStep: "day2", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day1T: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `The market is loud and warm and smells like bread and horse. Exactly what you need. You browse the stalls without any intention of buying anything, letting the noise drown out the bishop's words.`,
            `At a cloth merchant's stall near the back, a man you've never seen before gives you a nod of acknowledgement—as if he knows you.`,
            `He's lean, dark-eyed, dressed like a traveling merchant. He doesn't approach you. Just nods, and goes back to inspecting a bolt of linen.`,
            `You think nothing of it and head home.`
        ],

        choices: [
            { text: "Go to the market", nextStep: "day2", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day1GA: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `The river runs along the southern edge of Brenwall. You find a flat rock and sit on it and watch the water until your breathing evens out. A child is fishing nearby.`,
            `An old woman is hanging laundry on a line strung between two birch trees. The world continues. It doesn't care about prophecies. You try to borrow a little of that indifference.`
        ],

        choices: [
            { text: "You wake up deciding what to do today", nextStep: "day1Morning2", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day1GB: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You scrub the floor, chop wood, patch the leak in the roof that's been annoying you for a week. Physical tasks. Real tasks. Your hands know what to do even when your head doesn't.`
        ],

        choices: [
            { text: "You wake up deciding what to do today", nextStep: "day1Morning2", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day2: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Two days after the bishop's visit, you're in the market when you witness a confrontation. A Vorthane refugee family—a mother, a father, two small children—is being turned away from a food stall.`,
            `"We don't sell to Vorthies," the merchant snaps. The soldiers posted nearby don't move.`
        ],

        choices: [
            { text: "Keep walking. It isn't your problem", nextStep: "day2W", impact: [0, 0, 0, 0, 0, -1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Step in and pay for the food yourself", nextStep: "day2H", impact: [0, 0, 2, 0, 0, 3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Observe the family", nextStep: "day2T", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Tell him the sanctions don't apply to civilians", nextStep: "day2G", impact: [0, 0, 2, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day2W: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You pass by without stopping. There's a twitch of discomfort in your chest that you set aside. The war has gone on for years. You have bigger concerns.`
        ],

        choices: [
            { text: "Rest for tomorrow", nextStep: "day3", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    day2H: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You step forward, set a handful of coins on the merchant's counter, and say, quietly but clearly, "I'll cover it." The merchant looks at you—looks at the soldiers—and decides it's not worth the argument.`,
            `The mother thanks you in Vorthane-accented Aldenmeri, her voice barely above a whisper. One of the children looks up at you with enormous eyes.`,
            `Sister Maevis, who was shopping in the adjacent stall, witnessed this. She approaches you on your walk home.`,
            `"I've been hoping to speak with you," she says gently. "Brother Callen told me about the prophecy. I have a different perspective on it than he does, if you'd be willing to hear it."`,
            `You tell her you'll think about it.`
        ],

        choices: [
            { text: "Rest for tomorrow", nextStep: "day3", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    day2T: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You follow the family at a careful distance. They settle in an alley near the river, huddling together over what little food they carried with them.`,
            `You notice they're not alone—there are perhaps a dozen Vorthane civilians camped in the alley, keeping out of sight.`,
            `When you turn to leave, you nearly walk into the lean merchant from yesterday. Up close, his eyes are calmer than they should be for a man in a cramped alley.`,
            `"Interesting, isn't it," he says, very quietly, "the things that happen in a town the King pretends are going well." He tips his head and disappears back into the crowd.`
        ],

        choices: [
            { text: "Rest for tomorrow", nextStep: "day3", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    day2G: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You tell the merchant the law. He grumbles but fills a bag. The soldiers eye you warily. The father presses your hand in thanks. Nothing dramatic. Just a small thing that needed doing.`
        ],

        choices: [
            { text: "Rest for tomorrow", nextStep: "day3", impact: [0, 0, 1, 0, 0, -2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    day3: {
        background: "/backgrounds-png/living-room.png",
        text: [
            `The next day, a royal steward arrives at your door. He's a small, immaculate man with ink-stained fingers and a practiced smile.`,
            `"His Majesty, King Hadvar, requests your presence at the royal hall in three days' time," he says, pressing a sealed letter into your hands. The wax seal is the crest of Aldenmere—a crowned stag.`,
            `"The King has been informed of the prophecy and believes you may be the one Aelara has blessed. He is most eager to meet with you."`,
            `He leaves without waiting for an answer.`,
            `You break the seal. The letter is polished, formal, and warm in a way that makes the back of your neck prickle. The King has heard of the prophecy.`,
            `He is 'delighted.' He 'humbly requests' your assistance in 'resolving the conflict with Vorthane in the name of peace.' He will provide 'full resources of the crown' to ensure you are 'prepared to fulfill your destiny.'`,
            `The letter does not ask. It assumes.`
        ],

        choices: [
            { text: "Go to Sir Edran Croft's forge", nextStep: "day3W", impact: [0, 0, 3, 1, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Go to the church", nextStep: "day3H", impact: [0, 0, 4, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Search for the merchant", nextStep: "day3T", impact: [0, 0, 4, 0, 0, -2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Stay home and read the letter again", nextStep: "day3G", impact: [0, 0, 2, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    day3W: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `The forge is at the end of the eastern lane. Sir Edran is hammering a sword blank when you push the door open. He doesn't stop working.`,
            `"Read it, did you," he says. Still not a question.`,
            `You ask how he knew.`,
            `"Because Hadvar sends that letter to everyone he thinks is useful." He sets the hammer down and looks at you properly for the first time. He's older than he looks from a distance—there are scars on his forearms and`,
            `a deep one across his jaw that you hadn't noticed before. "I got one twenty years ago. Before the last campaign. Before I lost half my company on the Vorthane border."`,
            `He wipes his hands on a cloth.`,
            `"I'll tell you what the letter doesn't: the King doesn't want peace. He wants the iron mines past the Vorthane border and he wants someone he can put in front of his army`,
            `so his soldiers will follow without question. A prophecy is a very useful thing to a very ambitious man."`,
            `You ask what you should do.`,
            `"That depends on what you want." He picks the hammer back up. "But I'll tell you this—if you're going to do anything at all, you should know how to fight. You're welcome at my yard any morning."`,
            `Sir Edran is now available as a mentor. Proceeding to train with him leads to the Wrath Route.`
        ],

        choices: [
            { text: "", nextStep: "", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day3H: {
        background: "/backgrounds-png/church.png",
        text: [
            `Sister Maevis is lighting candles in the nave when you arrive. She's perhaps sixty, with sharp dark eyes and the unhurried movements of someone who has learned that patience is more productive than urgency.`,
            `"Sit," she says, gesturing to the nearest pew.`,
            `You sit. She finishes lighting her candles. Then she sits across from you.`,
            `"Brother Callen is a good man," she begins, "but he leads with his heart. I lead with my eyes." She folds her hands in her lap. "The prophecy—the full text, not the version the King's scribes have been circulating—does not promise victory in battle.`,
            `It promises understanding. The word the original inscription uses, in Old Aelaran, is vorath. It means something closer to 'reckoning.'""`,
            `She lets that settle.`,
            `"You've been having the visions your whole life. Have they ever shown you a winner?"`,
            `You think about it. They haven't. Only the fighting. Only the fear.`,
            `"Aelara shows you what was," she says gently. "Not what must be again."`,
            `Sister Maevis is now available as a mentor. Proceeding with her leads to the Holy Route.`
        ],

        choices: [
            { text: "", nextStep: "", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day3T: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You find Davan Cole at the same cloth merchant's stall. This time he sees you coming and folds his sample of linen without hurry.`,
            `"You got the King's letter," he says.`,
            `You ask how he could possibly know that.`,
            `He gives a small smile. "Because I'm very good at knowing things." He tilts his head toward the alley. You follow him, not sure why.`,
            `In the alley's relative privacy, his expression changes—still composed, but more serious.`,
            `"My name is Davan. I am not, precisely, a cloth merchant. I am someone who has seen what both kingdoms look like from the outside, and I will tell you clearly: the version of events King Hadvar has given his people is not the full version.`,
            `The iron mines your kingdom controls were Vorthane farmland sixty years ago—razed and seized by Hadvar's grandfather. The people who work those mines are taxed to starvation while the crown funds its military."`,
            `He watches your face.`,
            `"I know what the prophecy says. I know what you have on your chest. And I know that the King will use you as a weapon and discard you when the war is won." He pauses. "There are people in Vorthane who believe the prophecy too. And they interpret it very differently."`,
            `He presses a small token into your hand—a plain copper disc with a mark you don't recognize—and walks away.`,
            `Davan Cole is now available as a mentor. Following him leads to the Traitor Route.`
        ],

        choices: [
            { text: "", nextStep: "", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day3G: {
        background: "/backgrounds-png/living-room.png",
        text: [
            `You read the letter four times. The words are careful. Too careful. Every sentence gives the King something and you nothing in writing. There is no mention of the goddess. There is no mention of the full prophecy. There is no acknowledgment of what this journey might cost you.`,
            `You set it down and look at the mark on your chest in the mirror. It is the same birthmark it has always been. A faint, curved line, like the arc of a blade. Or a wing. It depends on the light.`
        ],

        choices: [
            { text: "", nextStep: "", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

}