export const story = {
    intro: {
        background: `/backgrounds-png/battle-vision.png`,
        text: [
            "You find yourself in the midst of battle, armed with only a dagger. A squad of 10 men surround you, carrying shields and spears.",
            `"Freeze! Do not move!"`,
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
            `"UGH-"`,
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
            `You reason that talking things out would be best. You try to open your mouth to no avail. The man in front of you steps forward. He readies his spear, "Screw this."`,
            `"..."`,
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
            `"AHH-"`,
            `Suddenly, you awake with your hand on your heart. It was a vision, one that had appeared constantly your entire life. It was strange; you had never been on a battlefield before.`,
            `[-5 fortitude, +5 intelligence]`
        ],

        choices: [
            { text: "Go back to sleep", nextStep: "day1Morning", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Take a walk outside to calm down", nextStep: "day1Morning", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Make some breakfast", nextStep: "day1Morning", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
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
            `"Because Hadvar sends that letter to everyone he thinks is useful." He sets the hammer down and looks at you properly for the first time. He's older than he looks from a distance—there are scars on his forearms and a deep one across his jaw that you hadn't noticed before. "I got one twenty years ago. Before the last campaign. Before I lost half my company on the Vorthane border."`,
            `He wipes his hands on a cloth.`,
            `"I'll tell you what the letter doesn't: the King doesn't want peace. He wants the iron mines past the Vorthane border and he wants someone he can put in front of his army so his soldiers will follow without question. A prophecy is a very useful thing to a very ambitious man."`,
            `You ask what you should do.`,
            `"That depends on what you want." He picks the hammer back up. "But I'll tell you this—if you're going to do anything at all, you should know how to fight. You're welcome at my yard any morning."`,
            `Sir Edran is now available as a mentor. Proceeding to train with him leads to the Wrath Route.`
        ],

        choices: [
            { text: "Make your decision", nextStep: "day4", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day3H: {
        background: "/backgrounds-png/church.png",
        text: [
            `Sister Maevis is lighting candles in the nave when you arrive. She's perhaps sixty, with sharp dark eyes and the unhurried movements of someone who has learned that patience is more productive than urgency.`,
            `"Sit," she says, gesturing to the nearest pew.`,
            `You sit. She finishes lighting her candles. Then she sits across from you.`,
            `"Brother Callen is a good man," she begins, "but he leads with his heart. I lead with my eyes." She folds her hands in her lap. "The prophecy—the full text, not the version the King's scribes have been circulating—does not promise victory in battle. It promises understanding. The word the original inscription uses, in Old Aelaran, is vorath. It means something closer to 'reckoning.'"`,
            `She lets that settle.`,
            `"You've been having the visions your whole life. Have they ever shown you a winner?"`,
            `You think about it. They haven't. Only the fighting. Only the fear.`,
            `"Aelara shows you what was," she says gently. "Not what must be again."`,
            `Sister Maevis is now available as a mentor. Proceeding with her leads to the Holy Route.`
        ],

        choices: [
            { text: "Make your decision", nextStep: "day4", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day3T: {
        background: "/backgrounds-png/alley.png",
        text: [
            `You find Davan Cole at the same cloth merchant's stall. This time he sees you coming and folds his sample of linen without hurry.`,
            `"You got the King's letter," he says.`,
            `You ask how he could possibly know that.`,
            `He gives a small smile. "Because I'm very good at knowing things." He tilts his head toward the alley. You follow him, not sure why.`,
            `In the alley's relative privacy, his expression changes—still composed, but more serious.`,
            `"My name is Davan. I am not, precisely, a cloth merchant. I am someone who has seen what both kingdoms look like from the outside, and I will tell you clearly: the version of events King Hadvar has given his people is not the full version. The iron mines your kingdom controls were Vorthane farmland sixty years ago—razed and seized by Hadvar's grandfather. The people who work those mines are taxed to starvation while the crown funds its military."`,
            `He watches your face.`,
            `"I know what the prophecy says. I know what you have on your chest. And I know that the King will use you as a weapon and discard you when the war is won." He pauses. "There are people in Vorthane who believe the prophecy too. And they interpret it very differently."`,
            `He presses a small token into your hand—a plain copper disc with a mark you don't recognize—and walks away.`,
            `Davan Cole is now available as a mentor. Following him leads to the Traitor Route.`
        ],

        choices: [
            { text: "Make your decision", nextStep: "day4", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day3G: {
        background: "/backgrounds-png/living-room.png",
        text: [
            `You read the letter four times. The words are careful. Too careful. Every sentence gives the King something and you nothing in writing. There is no mention of the goddess. There is no mention of the full prophecy. There is no acknowledgment of what this journey might cost you.`,
            `You set it down and look at the mark on your chest in the mirror. It is the same birthmark it has always been. A faint, curved line, like the arc of a blade. Or a wing. It depends on the light.`
        ],

        choices: [
            { text: "Make your decision", nextStep: "day4", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
        ]
    },

    day4: {
        background: "/backgrounds-png/living-room.png",
        text: [
            `On the fourth day, before the King's summons, you make a decision. Everything so far has been drifting. Now you have to choose a direction.`
        ],

        choices: [
            { text: "Go to Sir Edran's forge at dawn and tell him you want to train", nextStep: "day4W", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Go to the church and tell Sister Maevis you want to understand the prophecy", nextStep: "day4H", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Find Davan Cole and tell him you want to hear more about Vorthane", nextStep: "day4T", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // wrath route

    day4W: {
        background: "/backgrounds-png/training.png",
        text: [
            `You arrive at Sir Edran's yard before the sun is properly up. He's already there, in a padded sparring doublet, with two wooden practice blades resting against the fence.`,
            `"Good," he says. "You're punctual. That's the first useful quality a soldier can have."`,
            `He tosses you one of the wooden blades.`,
            `"Second useful quality: don't flinch."`,
            `He comes at you without further warning.`
        ],
        choices: [
            { text: "Begin training", nextStep: "w_firstSpar", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_firstSpar: {
        background: "/backgrounds-png/training.png",
        text: [
            `It's nothing like the visions. In the visions, your body knows what to do even if you don't. Here, in the waking world, your body is entirely ignorant. You block three strikes by luck and take the fourth directly to the ribs.`,
            `"You're not entirely hopeless," Edran says, which you suspect is the most encouraging thing he knows how to say. "You have instincts. They're buried deep, but they're there. We'll dig them out."`,
            `You train for the next three mornings. Your muscles ache constantly. Your sleep is worse than usual—the visions are more frequent when your body is exhausted. But something is shifting. Something underneath the fear.`,
            `[+3 STR, +2 FORT, +1 SPD, -5 SAN]`
        ],
        choices: [
            { text: "Attend the King's audience", nextStep: "w_kingAudience", impact: [0, 3, 0, 2, 1, -5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kingAudience: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `On the appointed day, you go to the royal hall. You are not alone in the waiting chamber—Brother Callen has been summoned too, and he grips his prayer beads with white-knuckled urgency.`,
            `"I spoke to the King's advisor," he whispers to you. "They intend to officially designate you as the 'Chosen of Aelara' in a public ceremony. It will be used to rally the military for a campaign into Vorthane."`,
            `King Hadvar is younger than you expected—perhaps forty, with a soldier's build gone slightly soft and a carefully groomed beard. He has kind eyes that you immediately do not trust.`,
            `"Ah! The one spoken of by Aelara herself." He stands, which is apparently unusual. "I am told Sir Edran Croft has taken an interest in your training. He was the finest knight this kingdom produced in a generation. You are in excellent hands."`,
            `He speaks for some time about honor and duty and the suffering of Aldenmere's people under Vorthane's trade blockades. Children are going hungry. The war must end.`,
            `His words are not wrong. That is what makes them dangerous.`
        ],
        choices: [
            { text: "Agree to join the royal military officially", nextStep: "w_kingW", impact: [0, 0, 0, 2, 0, -2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Ask for time to train privately under Edran first", nextStep: "w_kingH", impact: [0, 0, 3, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Agree but say nothing of substance—keep your options open", nextStep: "w_kingT", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Ask about the full text of the prophecy before committing", nextStep: "w_kingG", impact: [0, 0, 4, 0, 0, -1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kingW: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You agree. The King looks pleased in a way that makes Brother Callen close his eyes briefly. You are officially inducted into the Aldenmere military reserve as a 'special designation recruit.'`,
            `You will train under Sir Edran, with access to the military barracks and its armory.`,
            `[+2 FORT, -2 SAN — Received: Soldier's Boots +3 SPD]`
        ],
        choices: [
            { text: "Begin your training at the barracks", nextStep: "w_trainingMontage", impact: [0, 0, 0, 2, 3, -2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kingH: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `The King grants you the arrangement with barely concealed impatience. You will train under Edran but remain officially unaffiliated until you are ready. This gives you more freedom but fewer resources.`,
            `[+3 INT, +1 SAN]`
        ],
        choices: [
            { text: "Begin your training", nextStep: "w_trainingMontage", impact: [0, 0, 3, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kingT: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `The King takes your vague agreement as a full one. You leave with an official designation and a private uncertainty. You've bought yourself time.`,
            `[+2 INT]`
        ],
        choices: [
            { text: "Begin your training", nextStep: "w_trainingMontage", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kingG: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `The King's advisor produces a copy of the prophecy—clearly an edited version. You note two sentences that are different from what you read in the church. The King is patient with your question but his patience has edges.`,
            `You agree to train while you investigate further.`,
            `[+4 INT, -1 SAN]`
        ],
        choices: [
            { text: "Begin your training", nextStep: "w_trainingMontage", impact: [0, 0, 4, 0, 0, -1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_trainingMontage: {
        background: "/backgrounds-png/training.png",
        text: [
            `The barracks are loud, competitive, and exhausting. Under Sir Edran's direction you train daily. You meet the people you will be working alongside.`,
            `Lira Vel—a quick, wiry archer from the eastern farmlands who makes jokes when she's nervous and is always nervous—becomes your closest friend at the barracks.`,
            `Torben is a massive recruit who wanted to be a farmer but whose village was destroyed in a Vorthane raid. He wants to fight. He will not be talked out of it.`,
            `Commander Rael oversees your unit. He's efficient, cold, and quietly resentful that a 'prophecy child' has been dropped into his command structure.`,
            `Vellick is a recruit who watches you too carefully and asks slightly too many questions. You're not sure whose side he's on.`,
            `After four weeks of general training, Sir Edran presents you with a choice.`
        ],
        choices: [
            { text: "Choose your specialization", nextStep: "w_classSelection", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_classSelection: {
        background: "/backgrounds-png/training.png",
        text: [
            `"Every soldier in Aldenmere specializes. The military's strength is in coordination between its three branches. You'll need to pick one," Sir Edran says.`,
            `He shows you three paths.`
        ],
        choices: [
            { text: "Join the Archer Corps", nextStep: "w_classArcher", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Train as a melee knight under Sir Edran", nextStep: "w_classKnight", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Study battlefield magic under the court's arcanist", nextStep: "w_classMage", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_classArcher: {
        background: "/backgrounds-png/training.png",
        text: [
            `You take to the bow with unexpected ease. The stillness required—breath in, breath out, release—suits something in you. The visions are less intrusive when your body is still and your mind is entirely focused on a target.`,
            `Lira trains alongside you and becomes a genuine friend. You spend evenings comparing notes on technique. She tells you about her family, her village, her fear that she signed up for the wrong reasons.`,
            `You don't tell her about the mark on your chest, but she notices it once when you're adjusting your armor and says nothing, which you respect.`,
            `[Received: Longbow +8 STR, Leather Bracer +3 SPD +2 FORT]`,
            `[+5 STR, +4 SPD, +3 FORT, +2 SAN]`
        ],
        choices: [
            { text: "Continue training and watch for Vellick", nextStep: "w_barracksVellick", impact: [0, 5, 0, 3, 4, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_classKnight: {
        background: "/backgrounds-png/training.png",
        text: [
            `Edran is a demanding teacher and an unexpectedly thoughtful one. He doesn't just teach you how to swing a sword—he teaches you why. Footwork. Weight distribution. How fear changes your breathing and what to do about it.`,
            `"You're not fighting to win," he tells you during one session, when you've just knocked him back for the first time. "You're fighting to survive long enough for the other person to make a mistake. Remember that."`,
            `Torben trains alongside you. He's a natural and he knows it, and his enthusiasm is the only thing that keeps the long drills from grinding you down entirely.`,
            `[Received: Iron Sword +10 STR, Chainmail +8 FORT -2 SPD]`,
            `[+6 STR, +5 FORT, -1 SPD, +1 SAN]`
        ],
        choices: [
            { text: "Continue training and watch for Vellick", nextStep: "w_barracksVellick", impact: [0, 6, 0, 5, -1, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_classMage: {
        background: "/backgrounds-png/training.png",
        text: [
            `The court's arcanist is a small, ancient woman named Oreth who speaks mostly in questions and finds your combat visions professionally fascinating.`,
            `Battlefield magic in Aldenmere is mostly terrain manipulation, elemental bursts, and enhancement spells that boost your allies' reflexes or slow an opponent's limbs.`,
            `You prove to have a strong aptitude for the enhancement school. Oreth suggests this may connect to your past-life experiences—some knowledge, she theorizes, lives in something deeper than memory.`,
            `Vellick is also in the mage track, which means you spend most of your training time being vaguely watched by someone who makes you uneasy.`,
            `[Received: Apprentice Staff +5 STR +8 INT, Spellbook +5 INT]`,
            `[+4 STR, +7 INT, +2 FORT, -1 SAN]`
        ],
        choices: [
            { text: "Continue training and watch for Vellick", nextStep: "w_barracksVellick", impact: [0, 4, 7, 2, 0, -1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_barracksVellick: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `Three weeks into class training, you return to your bunk to find your things have been searched. Nothing is missing, but the organization is wrong—subtle, but wrong.`
        ],
        choices: [
            { text: "Confront Vellick directly", nextStep: "w_vellickW", impact: [0, 0, 0, 0, 0, -1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Report it to Commander Rael", nextStep: "w_vellickH", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Say nothing—start watching Vellick back", nextStep: "w_vellickT", impact: [0, 0, 3, 0, 2, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Tell Sir Edran", nextStep: "w_vellickG", impact: [0, 0, 1, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_vellickW: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `Vellick denies it flatly. You tell him you know he's lying. He tells you to prove it. You don't push further, but the dynamic between you hardens into open wariness.`,
            `[-1 SAN]`
        ],
        choices: [
            { text: "Receive your deployment orders", nextStep: "w_outpostSelect", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_vellickH: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `Rael investigates with the subtle enthusiasm of a man who already suspected Vellick and needed a reason. Vellick is questioned and cleared—officially. But he's reassigned to a different unit.`,
            `He leaves you with a look that is not quite a threat.`,
            `[+2 INT]`
        ],
        choices: [
            { text: "Receive your deployment orders", nextStep: "w_outpostSelect", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_vellickT: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `Saying nothing turns out to be the right call. Vellick, unaware you noticed, continues watching you—which means you continue watching him.`,
            `Two weeks later, you catch him in the mage library copying a report you'd left on your desk. You now have something solid.`,
            `[+3 INT, +2 SPD — You have evidence of Vellick's activities should you need it later.]`
        ],
        choices: [
            { text: "Receive your deployment orders", nextStep: "w_outpostSelect", impact: [0, 0, 3, 0, 2, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_vellickG: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `Edran takes it seriously with minimal fuss. He quietly has Vellick reassigned to a border patrol company.`,
            `"Happens," he says. "Every organization has its leaks." He doesn't tell you who Vellick was reporting to, but the way he says it suggests he has suspicions.`,
            `[+1 INT, +1 SAN]`
        ],
        choices: [
            { text: "Receive your deployment orders", nextStep: "w_outpostSelect", impact: [0, 0, 1, 0, 0, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_outpostSelect: {
        background: "/backgrounds-png/training.png",
        text: [
            `Eight weeks after entering the barracks, Commander Rael calls your unit together.`,
            `"King Hadvar has authorized a forward deployment. The outposts along the eastern border need reinforcing—Vorthane has been probing them with increased frequency. Your unit will be dispatched to assist."`,
            `Sir Edran finds you that evening. "Pick carefully," he says. "Torlol is the lightest assignment—border traders, minimal contact. Hostels is a staging ground, moderate skirmishes. Rugol is a full forward position—real fighting, real losses. Zirnak—" He pauses. "I'd rather you weren't sent to Zirnak. But if you insist, I won't stop you."`
        ],
        choices: [
            { text: "Torlol Outpost — light border patrol", nextStep: "w_outpostTorlol", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Hostels Outpost — regular skirmishes", nextStep: "w_outpostHostels", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Rugol Outpost — forward position, intense combat", nextStep: "w_outpostRugol", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Zirnak Outpost — deep forward, heavy casualties", nextStep: "w_outpostZirnak", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_outpostTorlol: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Torlol sits at the edge of a forest, watching a trade road that used to be busy and isn't anymore. It's almost peaceful. Almost. The quiet has a tension underneath it like a wire pulled tight.`,
            `You do border patrol, check papers, keep the peace between the occasional frightened Vorthane civilian trying to cross and the soldiers itching for an excuse to turn them back.`,
            `The combat comes in small bursts—a squad of Vorthane scouts every few days, skirmishes in the treeline. Nothing overwhelming. Enough to remind your body what the visions have always tried to tell it.`,
            `Lira or Torben is stationed here with you. You are grateful for the company.`,
            `[Enemies: Vorthane scouts in groups of 2-3. Light armor, short swords.]`,
            `[+5 STR, +3 FORT, +4 SPD, -8 SAN — Received: Aldenmere Ration x2]`
        ],
        choices: [
            { text: "Intelligence arrives about a Vorthane hero", nextStep: "w_kaelDiscovery", impact: [0, 5, 0, 3, 4, -8], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_outpostHostels: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Hostels is a proper military camp—tents, cookfires, a hundred soldiers in various states of readiness. The skirmishes are regular: Vorthane light infantry probing the camp's perimeter, pulling back when met with resistance.`,
            `You fight here for three weeks. You learn what it feels like to not know if the person running at you intends to kill you until they are very close.`,
            `The visions used to scare you. They still scare you. But now they're accompanied by something operational—a part of your mind that stays cold even when the rest of you is screaming.`,
            `[Enemies: Vorthane light infantry in groups of 4-6. Medium armor, spears and short swords. One squad leader per engagement.]`,
            `[+7 STR, +5 FORT, +3 SPD, -15 SAN — Received: Herbal Tincture x2]`
        ],
        choices: [
            { text: "Intelligence arrives about a Vorthane hero", nextStep: "w_kaelDiscovery", impact: [0, 7, 0, 5, 3, -15], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_outpostRugol: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Rugol is as far forward as Aldenmere officially acknowledges having positions. You are met by a captain named Sera who has the eyes of someone who has not slept properly in months.`,
            `"Welcome to Rugol. We have Vorthane regulars positioned half a mile out. They test us every three days. Last week they tested us twice in one day."`,
            `The fighting here is the hardest thing you have ever done. The visions—so long a source of dread—become something else in these moments: a library of instinct. Your body remembers things your mind never learned. You survive things you shouldn't.`,
            `This also frightens you more than the enemy does.`,
            `[Enemies: Vorthane regulars in groups of 6-10. Heavy armor, pikes and broadswords. Two officers per engagement.]`,
            `[+10 STR, +6 FORT, +5 SPD, -25 SAN — Received: Herbal Tincture x3, Smelling Salts x1]`
        ],
        choices: [
            { text: "Intelligence arrives about a Vorthane hero", nextStep: "w_kaelDiscovery", impact: [0, 10, 0, 6, 5, -25], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_outpostZirnak: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Zirnak is not on the official maps. You understand why the moment you see it—it's a ruin of a camp, rebuilt on top of itself so many times that the foundations of the newest structures rest on charred timbers.`,
            `The commander here, a gaunt man named Harwick, greets you with something close to pity. "You're the prophecy one. I'll be honest with you. We've had three of those through here. Didn't help any of them."`,
            `Zirnak is under near-constant pressure. You fight here for a week that feels like a year. The nightmares during the rare hours of sleep are indistinguishable from the days.`,
            `But you find something here: a letter taken from a Vorthane officer during a skirmish, describing orders to find their own chosen one—a 'hero of the battlefield.' The name in the letter is: Kael of the Ashen Blade.`,
            `[Enemies: Vorthane elite infantry and cavalry in groups of 8-15. One named enemy officer per engagement.]`,
            `[+13 STR, +8 FORT, +7 SPD, -40 SAN — Received: Herbal Tincture x3, Smelling Salts x2, Enemy Letter (knowledge of Kael)]`
        ],
        choices: [
            { text: "Act on the intelligence about Kael", nextStep: "w_kaelDiscovery", impact: [0, 13, 0, 8, 7, -40], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kaelDiscovery: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `However you come by the information—through a letter, through a prisoner's confession, through intelligence reports—the truth becomes clear.`,
            `Vorthane has a hero of their own. Kael of the Ashen Blade. A warrior of extraordinary capability who has been fighting since childhood.`,
            `The Vorthane king is positioning him as their fulfillment of Aelara's prophecy—their proof that the goddess sides with them.`,
            `This changes things.`,
            `[+3 INT]`
        ],
        choices: [
            { text: "Infiltrate the enemy kingdom and find Kael yourself", nextStep: "w_infiltrate", impact: [0, 0, 3, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Report back to King Hadvar and request royal support", nextStep: "w_reportKing", impact: [0, 0, 3, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Press the attack on your current position", nextStep: "w_doubleDown", impact: [0, 0, 3, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_infiltrate: {
        background: "/backgrounds-png/alley.png",
        text: [
            `You request a leave of absence from Commander Rael. He grants it without asking why—he has the look of a man who has stopped asking questions about you. Lira gives you a Vorthane civilian's travel cloak she's been keeping for exactly no reason she'll explain.`,
            `The border crossing takes two days of careful, slow travel. Vorthane, when you reach it, is not what the king's speeches prepared you for. The fields are drought-scarred from years of trade disruption. People look tired in the way that has nothing to do with sleep.`,
            `The propaganda about Aldenmere's aggression is on every notice board. A nation of people who have been told the same story in the opposite direction.`,
            `You make your way toward the Vorthane capital using the letter's return address as a guide.`
        ],
        choices: [
            { text: "Find Kael", nextStep: "w_findKael", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_findKael: {
        background: "/backgrounds-png/training.png",
        text: [
            `You find him in a training yard outside the capital fortress—not because you were looking in the right place, but because he finds you.`,
            `He is exactly what a hardened warrior looks like: scars accumulated with the efficiency of someone who has never had time to let them fully heal, a stillness that is not calm but controlled.`,
            `He looks at your chest—at the mark—without apparent surprise.`,
            `"I was told to expect someone like you," he says. His voice is quieter than you expected.`
        ],
        choices: [
            { text: "Attack immediately—end this before it complicates itself", nextStep: "w_kaelFight", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Ask him what he knows about the prophecy", nextStep: "w_kaelTalk", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Tell him you're not here to fight—propose something else", nextStep: "w_kaelAlliance", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kaelFight: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `He is better than you. He has always been better than you. But he is also tired—you can see it in the slight slowness of his second step.`,
            `You have something he doesn't: the instincts from a life of battle that your body remembers even when you don't want it to.`,
            `The fight is long and brutal. You win by the narrowest margin. Kael, bleeding on the ground, looks up at you.`,
            `"The goddess told me... one of us would have to yield." He meets your eyes. "I yield."`,
            `The Vorthane leadership, hearing that their hero has been bested, begins to fracture. Aldenmere forces push forward.`,
            `[+5 STR, +5 FORT, -30 SAN — Received: Ashen Blade Fragment +5 STR]`
        ],
        choices: [
            { text: "Fight your way back to Aldenmere", nextStep: "w_fightBack", impact: [0, 5, 0, 5, 0, -30], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kaelTalk: {
        background: "/backgrounds-png/alley.png",
        text: [
            `Kael's expression shifts—something guarded becoming something more honest.`,
            `"The full text," he says. "You've read it?"`,
            `You tell him what you know. He tells you what he knows. Together, the two versions form something neither kingdom's scribes gave you: a prophecy that speaks of two chosen souls, not one. The peace was always meant to come from both of them.`,
            `You spend two days in a safe house comparing notes, learning each other's histories. He tells you about growing up in Vorthane—the raids, the starvation, the king who pointed at Aldenmere and said that is why you suffer.`,
            `On the second night, he says: "So what do we do?"`,
            `[+8 INT, +5 SAN]`
        ],
        choices: [
            { text: "Fight your way back together, present both kingdoms with proof", nextStep: "w_fightBack", impact: [0, 0, 8, 0, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_kaelAlliance: {
        background: "/backgrounds-png/alley.png",
        text: [
            `Kael is silent for a long moment.`,
            `"You came here alone," he says. "Without the Aldenmere army."`,
            `"Yes."`,
            `"That is either very stupid or very brave." Another pause. "Possibly both."`,
            `He agrees to hear you out. What follows is the most unlikely negotiation you've ever participated in—two people who were sent to destroy each other, sitting across a table, trying to figure out if there's another option.`,
            `[+6 INT, +4 SAN]`
        ],
        choices: [
            { text: "Fight your way back to Aldenmere together", nextStep: "w_fightBack", impact: [0, 0, 6, 0, 0, 4], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_fightBack: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `Whether Kael is your enemy or your unexpected ally, you fight your way back through Vorthane territory to the Aldenmere lines.`,
            `The journey is its own story—ambushes, desperate sprints through forest roads, a night sheltering in the ruins of a village that used to be Vorthane's and is now nobody's.`,
            `[+5 STR, +4 SPD, -20 SAN]`
        ],
        choices: [
            { text: "Return to Aldenmere and face the king", nextStep: "w_returnDecision", impact: [0, 5, 0, 0, 4, -20], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_reportKing: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You return to King Hadvar and report what you've learned about Kael. His eyes brighten in a way that makes you uncomfortable.`
        ],
        choices: [
            { text: "Request the full royal army be deployed against Kael", nextStep: "w_reportKingArmy", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Propose going alone or with a small team", nextStep: "w_reportKingAlone", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_reportKingArmy: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `The royal army is a considerably more effective instrument against a fortified Vorthane position than you alone would be. The campaign is hard but successful.`,
            `[+5 STR, +5 FORT, -20 SAN]`
        ],
        choices: [
            { text: "Return with the army and face what comes next", nextStep: "w_returnDecision", impact: [0, 5, 0, 5, 0, -20], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_reportKingAlone: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `You go alone or with a small squad. It's harder, longer, and considerably more dangerous. But it's yours.`,
            `[+7 STR, +6 SPD, -30 SAN]`
        ],
        choices: [
            { text: "Return and face what comes next", nextStep: "w_fightBack", impact: [0, 7, 0, 0, 6, -30], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_doubleDown: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `You don't retreat. You press. It's the worst decision and you know it's the worst decision and you do it anyway.`,
            `The fighting becomes overwhelming—Vorthane regulars, then officers, then finally Kael himself, deployed to stop you personally.`,
            `You win. Barely. You're not entirely sure how.`,
            `[+8 STR, +5 FORT, +4 SPD, -35 SAN]`
        ],
        choices: [
            { text: "Return to Aldenmere", nextStep: "w_returnDecision", impact: [0, 8, 0, 5, 4, -35], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_returnDecision: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You make it back. Sir Edran meets you at the camp perimeter. He looks at you the way a man looks at someone who has just returned from somewhere he wasn't sure you'd come back from.`,
            `"Well?" he says.`,
            `You tell him what you found. Now you must decide what to do with it.`
        ],
        choices: [
            { text: "Propose to the king that you eradicate Vorthane while you have the advantage", nextStep: "w_endEradicate", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Propose a formal peace treaty", nextStep: "w_endTreaty", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Kill the king and take control yourself to ensure it's done right", nextStep: "w_endKingslayer", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_endEradicate: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `The campaign is brutal, decisive, and final. Vorthane's military collapses without Kael as its symbol. Aldenmere forces secure the grain plains and the ports. King Hadvar celebrates with the kind of enthusiasm that makes you feel nothing.`,
            `You stand in the victory parade and feel the absence of something you can't name.`,
            `Your intelligence shapes what follows. You've seen too much to let conquest become chaos—you draft a governance proposal establishing Vorthane as a protectorate with local representation, binding the two territories through economic necessity rather than military force.`,
            `It is not elegant. It is not just. But it is stable.`,
            `— ENDING: THE IRON PEACE —`,
            `Aldenmere absorbs Vorthane. Under your governance structure, the two territories stabilize. The grain feeds Aldenmere's iron workers. The iron tools Vorthane's farmers. You never stop having the visions. But they come less often.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    w_endTreaty: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You bring Kael's testimony—or the terms you negotiated with him—to the table. The king resists. His advisors resist. Commander Rael, surprisingly, does not. Neither does Lira, who has been quietly furious about the war since she enlisted.`,
            `The negotiation takes weeks. There are points where it nearly collapses. But in the end, there is a treaty. It is imperfect. It is signed.`,
            `You broker a full economic alliance. Aldenmere iron and Vorthane grain. Two kingdoms with different strengths, bound by mutual necessity. Kael, if he is alive, serves as Vorthane's representative. The alliance holds.`,
            `— ENDING: THE LIVING PEACE —`,
            `You did not win a war. You ended one. There is a difference, and you spend the rest of your life trying to explain it to people who weren't there.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },
    mockLeadUp: {
        background: ``,
        text: [`YOU DARE LOOK AT ME?`, `LET'S DO THIS!`, `I AM DANGEROUS!`],
        choices: [
            {text: `Calm Down`, nextStep: ``, impact: [], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: `LET'S DO THIS`, nextStep: `mockBattle`, impact: [0,0,0,0,0,0], combat: true, enemyName: 'Gertrude', enemyStats: [100, 50, 50, 50, 50], enemyAppearance: ``, gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: `I'm Outta Here!`, nextStep: ``, impact: [], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []}
        ]
    },

    w_endKingslayer: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `King Hadvar, when you present your conclusions, reveals himself in the way that powerful men do when they believe they are untouchable: he tells you the treaty is a good idea—just after Vorthane's military is dismantled and its ports transferred to Aldenmere control.`,
            `He says this in the same warm tone the letter was written in.`,
            `You make a decision. The details are not something history records with full accuracy. What is recorded is that King Hadvar died in his private chambers of an apparent heart condition, and that the Chosen of Aelara assumed a regent's council pending a new governance structure.`,
            `You build the alliance. It takes years longer without the symbolic weight of a king behind it, but what it lacks in ceremony it gains in sincerity. Two kingdoms, no kings.`,
            `— ENDING: THE THRONE YOU DIDN'T WANT —`,
            `You govern for eleven years before transitioning power to a council. You are, by most accounts, decent at it. The visions visit you one last time the night before you die—but this time, there is no fear in them.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // holy route

    day4H: {
        background: "/backgrounds-png/church.png",
        text: [
            `You go to the church before the first bells. Sister Maevis is already in the library—a cramped room off the vestibule that smells of old paper and something floral you never identify. She has three books open on the desk.`,
            `"You came," she says. "Good. Sit. We have a great deal to discuss."`,
            `She begins with the history of the prophecy—not the political version, but the original text in Old Aelaran that the church has preserved in its archives but rarely publicizes.`,
            `"The prophecy does not say the hero will win a war," she says. "It says the hero will end the grief that wars make. That is different. Entirely different."`,
            `You think about your visions. The grief in them is not the dying. It's the not-knowing-why.`,
            `[+3 INT, +3 SAN]`
        ],
        choices: [
            { text: "Choose your path within the church", nextStep: "h_studyPath", impact: [0, 0, 3, 0, 0, 3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_studyPath: {
        background: "/backgrounds-png/church.png",
        text: [
            `Sister Maevis lays out the options available to someone in your position within the church.`
        ],
        choices: [
            { text: "Go deeper into scripture and theology — study the full prophecy", nextStep: "h_scholarBegin", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Train as a holy warrior — strengthen both body and spirit", nextStep: "h_holyWarriorBegin", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Go among the people — help refugees and displaced families directly", nextStep: "h_aidWorkerBegin", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // scholar

    h_scholarBegin: {
        background: "/backgrounds-png/church.png",
        text: [
            `You spend your days in the library and in conversation with every priest, sister, and scholar you can find. Brenwall's church turns out to be a hub of opinion—people have traveled here, studied here, and left pieces of their perspectives behind.`,
            `You meet three significant figures.`,
            `Father Orin—an elder priest who frames the conflict with Vorthane as a holy war Aelara herself ordained. His scholarship is rigorous and his conclusions are selective.`,
            `Sister Thalia—a young sister who recently escaped Vorthane after being caught distributing relief supplies across the border. She believes both kingdoms are equally corrupt and equally in need of reform.`,
            `Scholar Reth—a lay academic who studies the resource dispute as an economic problem with a straightforward solution that nobody has implemented because it would reduce both kings' power.`,
            `[+5 INT, +2 SAN per study week — three weeks total. Received: Scholar's Tome +10 INT, Quill of Insight +3 INT]`
        ],
        choices: [
            { text: "Spend the most time with Father Orin — lean toward Aldenmere's cause", nextStep: "h_scholarOrin", impact: [0, 0, 5, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Spend the most time with Sister Thalia — challenge both kingdoms", nextStep: "h_scholarThalia", impact: [0, 0, 5, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Spend the most time with Scholar Reth — pursue the practical alliance", nextStep: "h_scholarReth", impact: [0, 0, 5, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_scholarOrin: {
        background: "/backgrounds-png/church.png",
        text: [
            `Father Orin's conviction is infectious. He believes that Aldenmere's cause is righteous—that the goddess's prophecy was always meant to vindicate this kingdom's suffering under Vorthane's trade blockades.`,
            `His scholarship is deep and his arguments are persuasive. You learn a great deal about the history of the war from one side's perspective.`,
            `But something nags at you. His version has no room for the refugee family in the market. No room for the Vorthane children going hungry on the other side of the border.`,
            `[+5 INT, +2 SAN — you are better prepared to argue Aldenmere's case, but less certain of it]`
        ],
        choices: [
            { text: "Continue studying — something important is still missing", nextStep: "h_scholarDiscovery", impact: [0, 0, 5, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_scholarThalia: {
        background: "/backgrounds-png/church.png",
        text: [
            `Sister Thalia's perspective is uncomfortable and necessary. She spent a year in Vorthane distributing food to people both kingdoms had decided did not matter, and she came back with the kind of clarity that only comes from seeing a problem from the ground.`,
            `"Both kings use the prophecy as a weapon," she tells you. "They have been doing it for generations. The goddess did not give you this mark so that a king could point to it and say 'follow me.'"`,
            `[+5 INT, +2 SAN — you carry Thalia's neutrality as both a compass and a burden]`
        ],
        choices: [
            { text: "Continue studying — the archive holds something important", nextStep: "h_scholarDiscovery", impact: [0, 0, 5, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_scholarReth: {
        background: "/backgrounds-png/church.png",
        text: [
            `Scholar Reth has no patience for mysticism and considerable patience for economic data. He walks you through the resource dispute with the precision of a cartographer: who owns what, who was taxed into giving it up, who benefits now, what a revenue-sharing arrangement would have looked like if anyone had tried it sixty years ago.`,
            `It is the least romantic framing of the prophecy you have encountered. It is also the most actionable.`,
            `[+7 INT — Reth's data becomes a key asset in any peace negotiation you attempt]`
        ],
        choices: [
            { text: "Continue studying — the archive holds something important", nextStep: "h_scholarDiscovery", impact: [0, 0, 7, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_scholarDiscovery: {
        background: "/backgrounds-png/church.png",
        text: [
            `In the third week, you find it. Buried in an archive that hasn't been opened in forty years: the original economic record of the iron mines dispute.`,
            `Aldenmere's claim to the mines is based on a treaty that, in the original Vorthane version, includes a provision that was never honored—a revenue sharing arrangement that would have resolved the resource dispute generations ago.`,
            `Both kingdoms' scribes have been working from versions that omit the provision that doesn't benefit them.`,
            `[+6 INT, +2 SAN — This changes everything you thought you knew about the war. And it gives you something to work with.]`
        ],
        choices: [
            { text: "Begin speaking publicly about what you've found", nextStep: "h_scholarPreaching", impact: [0, 0, 6, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_scholarPreaching: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You begin speaking. In town squares, in church courtyards, outside the barracks. You don't accuse anyone—you present documents, ask questions, describe what you found. People listen because of the mark on your chest, but they stay because of what you're saying.`,
            `The response is not uniformly warm. A royal officer warns you to stop. Commander Rael sends a message through channels.`,
            `But people are listening.`,
            `[+4 INT, +4 SAN, +2 FORT]`
        ],
        choices: [
            { text: "Answer Sister Maevis's summons to the Hearthstone Cathedral", nextStep: "h_cathedralConvergence", impact: [0, 0, 4, 2, 0, 4], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // holy warrior

    h_holyWarriorBegin: {
        background: "/backgrounds-png/training.png",
        text: [
            `Sister Maevis arranges for you to train under the church's small corps of militant defenders—the Wardens. They are not a large force, but they are skilled.`,
            `Their approach to combat is unlike the barracks: they teach you to fight from stillness, to find the place of stillness even in chaos, to let the training of the body reduce the space that fear can occupy.`,
            `This helps your sanity more than the barracks ever could. Somewhat.`,
            `[+3 STR, +2 FORT, +2 SAN per training week — three weeks]`
        ],
        choices: [
            { text: "Choose your holy specialization", nextStep: "h_classSelectionHoly", impact: [0, 3, 0, 2, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_classSelectionHoly: {
        background: "/backgrounds-png/training.png",
        text: [
            `At the end of your initial training, the Head Warden presents you with three specializations.`
        ],
        choices: [
            { text: "Become a Paladin — the sword-and-shield path", nextStep: "h_classPaladin", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Become a Battle Priest — mace and scripture, healer and combatant", nextStep: "h_classBattlePriest", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Become a Crusader — greatsword, maximum force grounded in conviction", nextStep: "h_classCrusader", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_classPaladin: {
        background: "/backgrounds-png/training.png",
        text: [
            `The Blessed Sword feels different from any weapon you've handled. It's not lighter—if anything it's heavier—but there is something about holding it that quiets the worst edge of the visions. As though Aelara is acknowledging what your past life did and telling you it was enough.`,
            `The Blessed Shield is a comfort in combat that is difficult to explain to anyone who hasn't needed a reason to stand still when every instinct says run.`,
            `[Received: Blessed Sword +8 STR +5 SAN, Blessed Shield +6 FORT +3 SAN]`,
            `[+5 STR, +5 FORT, +3 SAN, +2 INT]`
        ],
        choices: [
            { text: "Face the Inquisitor's evaluation", nextStep: "h_inquisitorDuel", impact: [0, 5, 2, 5, 0, 3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_classBattlePriest: {
        background: "/backgrounds-png/training.png",
        text: [
            `The mace is an honest weapon—it requires closeness, commitment, presence. It cannot be used from a distance. The Wardens teach you that this is intentional theology.`,
            `You also learn battlefield medicine. You become, over the course of three weeks, someone people want to keep alive not just because of the prophecy but because you are genuinely useful.`,
            `[Received: Sacred Mace +6 STR +5 INT, Robes of Faith +4 FORT +5 SAN]`,
            `[+4 STR, +5 INT, +4 FORT, +5 SAN]`
        ],
        choices: [
            { text: "Face the Inquisitor's evaluation", nextStep: "h_inquisitorDuel", impact: [0, 4, 5, 4, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_classCrusader: {
        background: "/backgrounds-png/training.png",
        text: [
            `The greatsword requires a specific kind of commitment—you cannot half-measure with a weapon that size. The theology of the Crusader path is the most rigorous of the three: you are required to be more certain of your justification, not less, precisely because the weapon you carry makes error catastrophic.`,
            `You are large with the greatsword in a way you hadn't expected to be.`,
            `[Received: Greatsword +12 STR -2 SPD, Plate Armor +12 FORT -4 SPD]`,
            `[+8 STR, +8 FORT, -3 SPD, +2 SAN]`
        ],
        choices: [
            { text: "Face the Inquisitor's evaluation", nextStep: "h_inquisitorDuel", impact: [0, 8, 0, 8, -3, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_inquisitorDuel: {
        background: "/backgrounds-png/church.png",
        text: [
            `Six weeks into your training, Brother Aldric arrives from the capital church.`,
            `He is young, precise, and very certain of himself. He has been sent to evaluate whether you are genuinely the one the prophecy describes, or whether the Brenwall church has been taken in by someone with a convenient birthmark.`,
            `The evaluation ends, on the third day, with a formal challenge: a duel of scripture. He presents a position; you present a counter. The Head Warden adjudicates.`,
            `Your intelligence will determine the outcome. If you have studied deeply (INT ≥ 25), you win.`
        ],
        choices: [
            { text: "Win the duel — your studies have prepared you (INT ≥ 25)", nextStep: "h_inquisitorWin", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Lose the duel — the gaps in your knowledge show (INT < 25)", nextStep: "h_inquisitorLose", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_inquisitorWin: {
        background: "/backgrounds-png/church.png",
        text: [
            `You know the texts. You know them because Sister Maevis made sure you knew them, and you know them because you studied them yourself. Brother Aldric is good. You are better. He concedes with evident frustration but genuine correctness.`,
            `"The church of Aelara recognizes your designation," he says formally, and bows.`,
            `The church's resources are fully available to you from this point forward.`,
            `[+5 INT, +5 SAN]`
        ],
        choices: [
            { text: "Travel to your assigned outpost as the church's representative", nextStep: "h_outpostSelect", impact: [0, 0, 5, 0, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_inquisitorLose: {
        background: "/backgrounds-png/church.png",
        text: [
            `You know the broad strokes of the texts. You know them the way someone knows a song they've heard many times but never had to sing. Aldric finds the gaps—not cruelly, but efficiently.`,
            `The church is not withdrawn, exactly. But qualified. Sister Maevis remains steadfast and furious, but quietly so.`,
            `[-5 SAN, -3 INT]`
        ],
        choices: [
            { text: "Remain with the church — accept reduced support and continue", nextStep: "h_outpostSelect", impact: [0, 0, -3, 0, 0, -5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Desert — the institution has failed you", nextStep: "h_desertChoice", impact: [0, 0, -3, 0, 0, -5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_desertChoice: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You leave Brenwall at dawn with your class weapon, your items, and a note to Sister Maevis that you write three times before leaving. The road out of town goes east, toward the border.`
        ],
        choices: [
            { text: "Make for Aldenmere's eastern territory — fight Vorthane on your own terms", nextStep: "w_kaelDiscovery", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Cross the border into Vorthane — go to the Cathedral alone", nextStep: "h_cathedralConvergence", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_outpostSelect: {
        background: "/backgrounds-png/training.png",
        text: [
            `Whether you won or lost the duel, you are assigned to one of four outposts as a Warden representative—the church's presence at the military's edge.`,
            `On the road, you come across a refugee camp: fifty or sixty Vorthane civilians camped in the ruins of a farming village. The Aldenmere military has been ignoring them.`
        ],
        choices: [
            { text: "Stop and help the refugees before continuing", nextStep: "h_refugeeH", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Attack — Vorthane civilians in Aldenmere territory are a security risk", nextStep: "h_refugeeW", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Pass by without engaging — you have an assignment", nextStep: "h_refugeeT", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_refugeeH: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You spend half a day here. You learn their names, their histories, how they ended up on the wrong side of a border during a war neither of them started.`,
            `An old man named Fen shows you his hands—a farmer's hands—and tells you he has never held a weapon. His village was burned because a Vorthane officer suspected an Aldenmere informant lived there. Nobody ever confirmed it.`,
            `You give them your rations, your tinctures, and a direction toward a church refuge. You arrive at the outpost late.`,
            `[+6 INT, +5 SAN]`
        ],
        choices: [
            { text: "Continue to your assigned outpost", nextStep: "h_outpostBattle", impact: [0, 0, 6, 0, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_refugeeW: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `You advance on the camp with your weapons drawn. The civilians scatter. You feel nothing for a moment, then feel everything. The visions tonight will be the worst yet.`,
            `[-15 SAN]`
        ],
        choices: [
            { text: "Continue to your assigned outpost", nextStep: "h_outpostBattle", impact: [0, 0, 0, 0, 0, -15], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_refugeeT: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You keep walking. You tell yourself you can't help everyone. This is true. It does not help.`,
            `[-3 SAN]`
        ],
        choices: [
            { text: "Continue to your assigned outpost", nextStep: "h_outpostBattle", impact: [0, 0, 0, 0, 0, -3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_outpostBattle: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You serve at your outpost as the church's representative. The fighting here is real—Vorthane forces probe the border regularly, and the Wardens' training holds up in ways you didn't fully expect until you needed it.`,
            `What changes you is not the combat but the aftermath: the quiet between engagements when the weight of what Fen told you, what Sister Thalia said, what the archive contained refuses to leave.`,
            `Something is pulling you toward the border.`,
            `[+6 STR, +4 FORT, +3 SPD, -18 SAN]`
        ],
        choices: [
            { text: "Answer the pull — go to the Hearthstone Cathedral", nextStep: "h_cathedralConvergence", impact: [0, 6, 0, 4, 3, -18], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_aidWorkerBegin: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You go among the people. Brenwall's church has a small network of aid stations along the border—places where displaced civilians can find food, medicine, and a few days of safety before moving on.`,
            `You work these stations. You listen more than you speak. You learn things about the war that soldiers and kings never hear.`,
            `A Vorthane mother tells you her husband was conscripted two years ago and she has not had word of him since. An Aldenmere farmer tells you the soldiers requisitioned his grain and left him nothing for winter.`,
            `[Received: Healer's Satchel — carry 3 extra consumables, Civilian Cloak +3 SAN]`,
            `[+5 SAN, +4 INT per week — two weeks]`
        ],
        choices: [
            { text: "Follow the mark — it burns stronger closer to the border", nextStep: "h_cathedralConvergence", impact: [0, 0, 8, 0, 0, 10], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // cathedral, all holy paths meet here

    h_cathedralConvergence: {
        background: "/backgrounds-png/church.png",
        text: [
            `Whether you were pushed by Sister Maevis's message, drawn by the burning mark, or simply following your investigation toward its source, you find yourself at the Hearthstone Cathedral.`,
            `It is the largest structure you have ever seen that is not a military fortification—a cathedral of pale stone that spans the neutral territory between the two kingdoms, technically belonging to neither.`,
            `The mark on your chest burns so intensely you have to press your hand against it.`,
            `Inside the cathedral, you find Kael of the Ashen Blade. He has the same look you must have—confused by his own presence here, hand against his chest.`,
            `You look at each other across the nave.`,
            `The torches in the cathedral all flare at once.`,
            `Aelara speaks. Her voice is not a sound. It is a presence—a weight of attention that fills every corner of the cathedral with the feeling of being perfectly, terrifyingly seen.`,
            `"Two who carry the marks. Two who have come." A pause that contains an entire history. "The prophecy named one of you as the instrument of peace. There is only one way to fulfill it. One must end."`
        ],
        choices: [
            { text: "Attack Kael", nextStep: "h_cathedralAttack", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Sacrifice yourself", nextStep: "h_cathedralSacrifice", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Argue against the goddess", nextStep: "h_cathedralArgue", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_cathedralAttack: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `Kael does not raise his weapon. He looks at you—and he looks at his chest—and he makes a decision with his eyes that his hands confirm when they stay at his sides. He is willing to die for this.`,
            `You cannot do it. Or you can, and you do.`,
            `Either way, when the moment passes, the Crest of Unity appears on the altar. Aelara says nothing more. The cathedral goes quiet.`,
            `[Received: Crest of Unity +10 SAN +5 INT]`,
            `[If Kael lives: -20 SAN, +3 INT. If Kael dies: -30 SAN, +5 STR]`
        ],
        choices: [
            { text: "Take the Crest and decide what comes next", nextStep: "h_postCathedral", impact: [0, 0, 3, 0, 0, -20], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_cathedralSacrifice: {
        background: "/backgrounds-png/church.png",
        text: [
            `You kneel. You tell the goddess you will give up your life if it's required. You have had someone else's grief living in your chest your whole life—you understand what sacrifice looks like.`,
            `Kael shouts something. Then he begins arguing with the goddess himself, which you hadn't anticipated. He says—voice cracking—that a goddess of harmony cannot genuinely require the destruction of one of her chosen in order to create harmony.`,
            `The two of you arguing with the goddess together turns out to be the unexpected third option.`,
            `[+8 SAN, +5 INT — Both heroes live]`
        ],
        choices: [
            { text: "Take the Crest that appears on the altar", nextStep: "h_postCathedral", impact: [0, 0, 5, 0, 0, 8], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_cathedralArgue: {
        background: "/backgrounds-png/church.png",
        text: [
            `You speak carefully. The prophecy—the full version, in Old Aelaran—does not say one must end. It says the grief must end. The grief that wars make.`,
            `You tell the goddess, with tremendous respect and considerable nerve, that her test is either a genuine test or a choice, and either way the answer is the same: this is not acceptable.`,
            `Kael stares at you. Then he starts nodding.`,
            `Together, you challenge the framing. The cathedral falls silent for a very long time. Then the Crest of Unity appears on the altar. The goddess, if she is still present, says nothing more. You suspect she is, in her own way, satisfied.`,
            `[+10 INT, +8 SAN — Both heroes live]`
        ],
        choices: [
            { text: "Take the Crest and decide what comes next", nextStep: "h_postCathedral", impact: [0, 0, 10, 0, 0, 8], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_postCathedral: {
        background: "/backgrounds-png/church.png",
        text: [
            `You hold the Crest of Unity. The mark on your chest no longer burns. Kael (if alive) stands beside you in the empty cathedral looking like a man who has just had a considerable number of assumptions rearranged.`,
            `[Received: Crest of Unity +10 SAN +5 INT]`
        ],
        choices: [
            { text: "Tell the church first — present the Crest to the institution and let it lead", nextStep: "h_endChurch", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Go to King Hadvar directly with the Crest and your demands", nextStep: "h_endKing", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Reveal it publicly — don't give the crown the opportunity to contain it", nextStep: "h_endPublic", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_endChurch: {
        background: "/backgrounds-png/church.png",
        text: [
            `The church rallies around the Crest with extraordinary speed. There is a convocation. Both kingdoms' church representatives are summoned.`,
            `Kael and you stand on either side of the altar. Two marks. One crest. The visual argument is so complete that even the most war-minded representatives fall silent.`,
            `A lasting peace is structured. Both kings are required to ratify it with their churches' backing, which removes their ability to simply ignore it.`,
            `— ENDING: THE LASTING COVENANT —`,
            `Neither kingdom becomes the other. Both become something better. It takes longer than anyone would like. It holds.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_endKing: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `King Hadvar receives you with a smile that doesn't quite reach his eyes. He looks at the Crest. He looks at Kael. He begins to calculate.`,
            `His court is already unhappy with Hadvar's management of the war. Your evidence—and the Crest's symbolic weight—is enough to tip the council. Hadvar is removed. A regent council forms.`,
            `You and Kael propose a joint protectorate—a new authority representing both kingdoms. A new governance structure eventually emerges.`,
            `— ENDING: THE TWO-THRONES NATION —`,
            `A nation formed not by conquest but by mutual exhaustion and a willingness, at the end, to try something different. You and Kael govern jointly until you are both old enough to hand it to someone younger.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    h_endPublic: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `You announce the Crest of Unity in the town square of the nearest significant border settlement. You tell them everything—the full prophecy, the hidden treaty provision, the resource dispute, both kings' corruption.`,
            `It goes further than you expected. It always does, when the truth has been suppressed long enough.`,
            `One of the kings orders your arrest. The soldiers he sends hesitate when they see the Crest. They hesitate longer when they see Kael beside you. They eventually go home.`,
            `The peace that follows is built by people who decided to believe in it rather than people who were ordered to.`,
            `— ENDING: THE PEOPLE'S PEACE —`,
            `It is the messiest of the peace endings. It is also, in the opinion of later historians, the most durable.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // traitor route

    day4T: {
        background: "/backgrounds-png/alley.png",
        text: [
            `You find Davan at his usual stall the morning after your decision. He's there before you—which suggests he expected you.`,
            `"I was beginning to think you wouldn't come," he says, which you suspect is a lie. He folds the linen sample he's been pretending to examine. "Walk with me."`,
            `In the river's relative privacy, his expression changes.`,
            `"I'll tell you what I am. I'm a courier. I carry information between people who cannot speak to each other officially. I am not, technically, a spy. I'm more of a... diplomat without portfolio."`,
            `He is definitely also a spy.`,
            `"I can get you across the border. The people I work with in Vorthane believe the chosen one—or both chosen ones—may be the only way to stop the war without more killing."`,
            `He hands you a plain travel cloak and a set of papers. "Think it over. I leave in two days."`,
            `[+4 INT, -2 SAN]`
        ],
        choices: [
            { text: "Witness the notice and make your decision", nextStep: "t_motivationEvent", impact: [0, 0, 4, 0, 0, -2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_motivationEvent: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Before you leave, you witness something that makes the decision easier.`,
            `A public notice is posted by royal order in the town square. It announces that all trade with Vorthane is now illegal—including food trades. Any Aldenmere citizen found trading with Vorthane civilians will be subject to fine and imprisonment.`,
            `Below it, someone has posted a second notice by hand: a list of children in the refugee camp who have died of illness this week. The second notice is torn down by soldiers within the hour.`,
            `You leave with Davan on the third morning.`,
            `[-3 SAN, +3 INT]`
        ],
        choices: [
            { text: "Cross the border with Davan", nextStep: "t_theCrossing", impact: [0, 0, 3, 0, 0, -3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_theCrossing: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `The crossing takes four days of careful travel through forested backcountry. Davan is excellent company in the way that people who are excellent at keeping secrets are excellent company: he is always interesting and never quite fully present.`,
            `"The ordinary people there," he says, on the third evening, "are not your enemies. They've been told you are theirs. That's different."`,
            `You cross at dawn on the fourth day, through a shallow river crossing with papers that identify you as a Vorthane merchant's assistant.`,
            `[+2 SPD, +2 INT]`
        ],
        choices: [
            { text: "The border patrol finds you within the first hour", nextStep: "t_captureOrJoin", impact: [0, 0, 2, 0, 2, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_captureOrJoin: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `The Vorthane border patrol finds you within the first hour. Whether this is bad luck or Davan's plan is unclear. He has, at this point, disappeared.`
        ],
        choices: [
            { text: "Try to fight your way free", nextStep: "t_captureW", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Surrender and try to talk your way out", nextStep: "t_captureH", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Claim you were always on their side — you have come to join them", nextStep: "t_captureT", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_captureW: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `You take out two of them before the third hits you with a pommel across the ear. You wake up in a cell. Your weapons are gone.`,
            `[-5 HP, -3 SAN]`
        ],
        choices: [
            { text: "Talk your way out of this cell", nextStep: "t_prisoner", impact: [-5, 0, 0, 0, 0, -3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_captureH: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `You hold your hands up and give your name and Brother Callen's name and say you are here in peace and need to speak with someone in authority.`,
            `They put you in a cell, but they don't hurt you. Progress.`,
            `[+2 INT]`
        ],
        choices: [
            { text: "Wait and speak to the interrogator", nextStep: "t_prisoner", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_captureT: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `You tell them you were always sympathetic to Vorthane's cause. You tell them you have information about Aldenmere's military positioning. Some of this is true. They look at you with the appropriate suspicion and put you in a cell, but not in the dark one.`,
            `[+3 INT, -2 SAN]`
        ],
        choices: [
            { text: "Wait and speak to the interrogator", nextStep: "t_claim", impact: [0, 0, 3, 0, 0, -2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_prisoner: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `The cell is cold. You have three days of talking to various guards, junior officers, and eventually a senior interrogator named Lenne before the prophecy comes up.`,
            `It comes up because you take off your shirt during a medical examination and the interrogator—who knows the prophecy—goes very still.`,
            `"The mark," she says.`,
            `"Yes," you say.`,
            `There is a silence.`,
            `"King Sorel will want to see you," she says finally. "This changes things."`,
            `[+2 INT]`
        ],
        choices: [
            { text: "Attend the audience with King Sorel", nextStep: "t_kingSorel", impact: [0, 0, 2, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_claim: {
        background: "/backgrounds-png/tavern.png",
        text: [
            `You are kept in a nicer cell and questioned with slightly more respect. When the mark is discovered during a routine examination, the dynamic shifts entirely.`,
            `The officer who sees it goes from professional skepticism to something that resembles awe, which makes you more nervous, not less.`,
            `"The mark. King Sorel will—we need to contact the capital immediately."`,
            `[+3 INT]`
        ],
        choices: [
            { text: "Attend the audience with King Sorel", nextStep: "t_kingSorel", impact: [0, 0, 3, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_kingSorel: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `King Sorel of Vorthane is not what you expected. He is older than Hadvar—gray-bearded, precise in his movements, with the kind of intelligence that presents itself as patience. His court is smaller and less ornate.`,
            `He is cautious, curious, and watching you for lies. You must demonstrate either value or sincerity—ideally both—to earn his trust.`
        ],
        choices: [
            { text: "Appeal to the prophecy — you believe in Aelara, and so does he", nextStep: "t_sorelH", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Tell him about Aldenmere's military positioning — trade information for standing", nextStep: "t_sorelW", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Tell him about the original treaty document — give him the economic solution", nextStep: "t_sorelT", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_sorelH: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You speak about the prophecy—the full version, not the edited one. The king listens carefully. His court priest leans forward. Sorel asks questions that reveal he has studied the texts himself.`,
            `By the end, there is a cautious, conditional trust. He respects the shared framework. You have not won him over, but you have made a start.`,
            `[+4 INT, +2 SAN]`
        ],
        choices: [
            { text: "Begin training with Vorthane's military", nextStep: "t_vorthaneTraining", impact: [0, 0, 4, 0, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_sorelW: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You tell him what you know about Aldenmere's troop positions, Commander Rael's unit, the timing of border patrols. Some of this is still accurate. Some of it may already be stale.`,
            `Sorel is pleased in the way that pragmatic men are pleased—without warmth, with utility. You are accepted provisionally. You are not trusted.`,
            `[+3 INT, -3 SAN — you are useful to Vorthane but feel the weight of that usefulness]`
        ],
        choices: [
            { text: "Begin training with Vorthane's military", nextStep: "t_vorthaneTraining", impact: [0, 0, 3, 0, 0, -3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_sorelT: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You tell him about the treaty provision. You describe the original document, where you found it, what it says. Sorel goes very still.`,
            `His court historian confirms, quietly, that Vorthane's own archive contains an incomplete version of the same document. The room is silent for a long moment.`,
            `"This changes the legal basis of the dispute," Sorel says finally. He looks at you differently now. Not as a weapon. As a resource.`,
            `[+6 INT, +3 SAN]`
        ],
        choices: [
            { text: "Begin training with Vorthane's military", nextStep: "t_vorthaneTraining", impact: [0, 0, 6, 0, 0, 3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_vorthaneTraining: {
        background: "/backgrounds-png/training.png",
        text: [
            `Accepted into Vorthane's military structure, you begin training. Vorthane's military is leaner and more mobile than Aldenmere's. Less iron, more tactics.`,
            `Mira—a Vorthane sergeant whose village was burned in the last Aldenmere campaign—doesn't trust you and says so openly, which you respect.`,
            `Jorin is a young recruit who grew up in Vorthane's capital and has the breathless, frightened enthusiasm of someone who has never actually been in a battle.`,
            `Commander Sevik is your direct superior: efficient, unreadable, fair.`,
            `After three weeks of general training, you specialize.`
        ],
        choices: [
            { text: "Choose your Vorthane class", nextStep: "t_classSelection", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_classSelection: {
        background: "/backgrounds-png/training.png",
        text: [
            `Vorthane's specializations are different from Aldenmere's in subtle ways—leaner, faster, built for a military that has often had to do more with less.`
        ],
        choices: [
            { text: "Archer — Vorthane Shortbow, fast and mobile", nextStep: "t_classArcher", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Knight — Vorthane Cavalry Sword, traditional and respected", nextStep: "t_classKnight", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Mage — Vorthane Focus Gem, precision and power", nextStep: "t_classMage", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_classArcher: {
        background: "/backgrounds-png/training.png",
        text: [
            `The Vorthane shortbow is lighter and faster than Aldenmere's longbow. Different philosophy: where Aldenmere archers are trained to hold a line, Vorthane archers are trained to move, to harry, to never be where the enemy expects.`,
            `You adapt quickly. Mira watches you shoot one afternoon and says nothing, which is the closest she comes to a compliment.`,
            `[Received: Vorthane Shortbow +7 STR +2 SPD, Vorthane Leather Bracer +2 SPD]`,
            `[+5 STR, +4 SPD, +2 FORT, +1 SAN]`
        ],
        choices: [
            { text: "Deploy to an outpost", nextStep: "t_outpostSelect", impact: [0, 5, 0, 2, 4, 1], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_classKnight: {
        background: "/backgrounds-png/training.png",
        text: [
            `The Vorthane cavalry sword is designed for a mounted fighter but works well on foot for someone with the right instincts. It's lighter than Aldenmere's broadswords, faster.`,
            `Mira's trust increases noticeably—she respects traditional soldiers, and the cavalry sword is an honest choice that requires real skill.`,
            `[Received: Vorthane Cavalry Sword +9 STR +1 SPD, Scale Armor +7 FORT -1 SPD]`,
            `[+6 STR, +5 FORT, 0 SPD, +2 SAN]`
        ],
        choices: [
            { text: "Deploy to an outpost", nextStep: "t_outpostSelect", impact: [0, 6, 0, 5, 0, 2], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_classMage: {
        background: "/backgrounds-png/training.png",
        text: [
            `The Vorthane magical tradition is different from Aldenmere's—less enhancement, more direct. The Focus Gem channels elemental energy with precision that Aldenmere's enhancement school lacks.`,
            `Jorin is in the mage track too, and his enthusiasm manages to be infectious even during the most tedious exercises.`,
            `[Received: Vorthane Focus Gem +5 STR +9 INT, Vorthane Spellbook +5 INT]`,
            `[+4 STR, +8 INT, +2 FORT, 0 SAN]`
        ],
        choices: [
            { text: "Deploy to an outpost", nextStep: "t_outpostSelect", impact: [0, 4, 8, 2, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_outpostSelect: {
        background: "/backgrounds-png/training.png",
        text: [
            `After six weeks of training, Commander Sevik assigns you to an outpost. You have some say in where you go.`
        ],
        choices: [
            { text: "Kandu Outpost — light border patrol", nextStep: "t_outpostKandu", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Ora Outpost — regular skirmishes with Aldenmere scouts", nextStep: "t_outpostOra", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Ebote Outpost — forward position, constant fighting", nextStep: "t_outpostEbote", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Corinth Outpost — deep forward, near the iron mines", nextStep: "t_outpostCorinth", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_outpostKandu: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Kandu is a quiet post watching a road that leads nowhere important. You do border checks, break up the occasional skirmish between Vorthane farmers and Aldenmere prospectors working the edge of the mine territory.`,
            `The conflict is granular here—not armies, but individuals, each carrying a kingdom's worth of grievance.`,
            `[Enemies: Aldenmere scouts in groups of 2-3.]`,
            `[+5 STR, +3 FORT, +4 SPD, -8 SAN]`
        ],
        choices: [
            { text: "Receive intelligence and meet Kael", nextStep: "t_kaelMeeting", impact: [0, 5, 0, 3, 4, -8], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_outpostOra: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Ora is a staging camp for Vorthane's eastern response forces. You see Aldenmere's tactics from the receiving end—their formations are different from inside them. You become a better soldier for the perspective shift.`,
            `Mira is stationed here. She watches you fight. After the third engagement, she stops watching you like a threat and starts watching you like a person.`,
            `[Enemies: Aldenmere light infantry in groups of 4-6.]`,
            `[+7 STR, +5 FORT, +3 SPD, -15 SAN]`
        ],
        choices: [
            { text: "Receive intelligence and meet Kael", nextStep: "t_kaelMeeting", impact: [0, 7, 0, 5, 3, -15], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_outpostEbote: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Ebote is hard. The fighting is constant and the resupply is unreliable and everyone here has been here too long. You learn things at Ebote that you could not have learned anywhere else: what it means to keep fighting when the rationale has blurred.`,
            `[Enemies: Aldenmere regulars in groups of 6-10.]`,
            `[+10 STR, +6 FORT, +5 SPD, -25 SAN]`
        ],
        choices: [
            { text: "Receive intelligence and meet Kael", nextStep: "t_kaelMeeting", impact: [0, 10, 0, 6, 5, -25], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_outpostCorinth: {
        background: "/backgrounds-png/town-outpost.png",
        text: [
            `Corinth is a mile from the iron mines. You can see the dust of the mining operations on clear days. It is surreal to fight in the shadow of something so mundane, so physical, so ultimately manageable—if anyone had ever wanted to manage it rather than exploit it.`,
            `You find a letter here—intelligence about Aldenmere's designated hero. About you. The letter is six months old. The person it describes has already crossed the border.`,
            `The letter is about you.`,
            `[Enemies: Aldenmere elite infantry and cavalry.]`,
            `[+13 STR, +8 FORT, +7 SPD, -40 SAN]`
        ],
        choices: [
            { text: "Meet Kael — you've been expected", nextStep: "t_kaelMeeting", impact: [0, 13, 0, 8, 7, -40], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_kaelMeeting: {
        background: "/backgrounds-png/training.png",
        text: [
            `However you come by the intelligence, you eventually meet Kael. He is not what Vorthane's propaganda prepared you for, either.`,
            `He finds you, or you find each other. The meeting is private.`,
            `"You're the Aldenmere chosen," he says. "But you're here."`,
            `"Yes."`,
            `He looks at the mark on your chest—visible above your collar. He pulls down his collar to reveal his own mark: different in shape but identical in its quality—a permanent, slightly luminous irregularity.`,
            `"I've been carrying this since I was born. Do you know what it's like to grow up in a country that sees a mark on your chest and decides your whole life for you?"`,
            `[+4 INT, +3 SAN]`
        ],
        choices: [
            { text: "Decide how to use what you know", nextStep: "t_lateGame", impact: [0, 0, 4, 0, 0, 3], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_lateGame: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You have been inside Vorthane's military. You know both kingdoms' inner workings. Kael stands beside you with the same strange position you occupy—hero of one side, disillusioned with the same story from the opposite direction.`,
            `You have to decide what to do with all of this.`
        ],
        choices: [
            { text: "Push the war — press Aldenmere back with Vorthane's full military force", nextStep: "t_endPushWar", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Work toward a treaty or alliance using your knowledge of both kingdoms", nextStep: "t_endTreaty", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Undermine King Sorel from the inside — he is just as corrupt as Hadvar", nextStep: "t_endUndermineKings", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_endPushWar: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `The campaign is brutal in both directions. Vorthane's grain and port access, combined with Aldenmere's iron—captured in the push—creates a unified resource base that is enormously powerful. King Sorel's victory is complete.`,
            `You helped a kingdom win a war. Your intelligence shapes what follows: with enough understanding of both sides, you build governance structures that prevent the vacuum from becoming another war.`,
            `— ENDING: THE VICTOR'S PEACE —`,
            `You helped a kingdom win a war. Whether you helped the right kingdom is a question you carry.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_endTreaty: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `With Kael's involvement and your knowledge of both kingdoms' inner workings, you are uniquely positioned to broker a genuine peace. It takes longer. There are people on both sides who feel betrayed by you—Aldenmere for your crossing, Vorthane for your neutrality.`,
            `But you sit across tables where no one else could sit. You know the arguments both sides will make before they make them. You know which concessions each king could accept without losing face.`,
            `The treaty is signed. It is imperfect. It holds.`,
            `— ENDING: THE BRIDGE —`,
            `You were a traitor to one kingdom and a citizen of neither. That made you, against all expectations, the most useful person in the room when it mattered.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    t_endUndermineKings: {
        background: "/backgrounds-png/throne-room.png",
        text: [
            `You work from the inside—Vorthane's inside—to expose King Sorel's corruption at the same time that internal forces in Aldenmere expose Hadvar's. The simultaneous collapse of both crowns' legitimacy creates a power vacuum.`,
            `Kael and you are the only figures with broad cross-border credibility. A joint authority is proposed by the church, endorsed by the population, and implemented over the objection of every court official in both kingdoms.`,
            `The process is loud, chaotic, and surprisingly quick once people have decided they are done.`,
            `— ENDING: THE TWO-COLORED FLAG —`,
            `A new nation, built by someone who was loyal to neither of the old ones. In retrospect, that was exactly what the job required.`
        ],
        choices: [
            { text: "Begin again", nextStep: "intro", impact: [0, 0, 0, 0, 0, 0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    // vision events, triggered by sanity thresholds in the game logic

    vision_combat1: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `Between one engagement and the next, your eyes close for a moment—just a moment—and you are somewhere else.`,
            `A different field. A different sky. The smell is the same. The weight of a different weapon in your hand. You are in the middle of something that has already been going badly for some time.`,
            `Beside you, someone is shouting your name—but not your current name. A name you don't recognize but that your body responds to with the automatic urgency of long habit.`,
            `Then you blink and you're back.`,
            `[-5 SAN]`
        ],
        choices: [
            { text: "Press forward", nextStep: "w_outpostTorlol", impact: [0, 0, 0, 0, 0, -5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    vision_combat2: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `This time it lasts longer. Long enough to see the face of the person beside you. Long enough to hear what they're saying. Long enough to feel the precise specific weight of knowing you are going to lose this, and that losing this means something final for someone you love.`,
            `You come back to the present with your hands shaking.`
        ],
        choices: [
            { text: "Sit down and breathe — take the time even if you don't have it", nextStep: "w_fightBack", impact: [0, 0, 0, 0, -1, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Push through it — use the feeling", nextStep: "w_fightBack", impact: [0, 3, 0, 0, 0, -5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] },
            { text: "Use the Smelling Salts if you have them", nextStep: "w_fightBack", impact: [0, 0, 0, 0, 0, 10], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
        ]
    },

    vision_revelation: {
        background: "/backgrounds-png/battle-vision.png",
        text: [
            `This vision is different.`,
            `You are on the field you always visit—but for the first time, you see the end of it. Not the moment of death. The moment before.`,
            `The one you have been living as a past-life nightmare was not a great warrior or a celebrated hero. They were someone who fought in a war they didn't choose and died with an unfinished thought.`,
            `The thought was: this didn't have to be this way.`,
            `You wake up. Your chest aches. The mark feels warm rather than burning.`,
            `[+5 SAN, +5 INT]`
        ],
        choices: [
            { text: "Carry this knowledge forward", nextStep: "w_returnDecision", impact: [0, 0, 5, 0, 0, 5], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: [] }
    mockBattle:{
        choices: [
            {text: `Attack`},
            {text: `Defend`},
            {text: `Inventory`},
            {text: `Run Away`}
        ],
        nextStep: `Victory`
    },

    Victory: {
        background: ``,
        text: [`you won`],
        choices: [
            {text: "Go back to sleep", nextStep: "dailyT", impact: [0,0,0,0,0,0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: "Take a walk outside to calm down", nextStep: "dailyGA", impact: [0,0,0,0,0,0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []},
            {text: "Make some breakfast", nextStep: "dailyGB", impact: [0,0,0,0,0,0], combat: false, enemy: [], gainItem: false, gainWeapon: false, gainArmor: false, item: [], weapon: [], armor: []}
        ]
    },

    deathRIP: {
        background: "./backgrounds/death.jpg",
        text: [
            `Oh...`,
            `Seems like you ran out of health...`,
            `RIP`
        ],

        choices: [
            { text: `Restart your attempt`, nextStep: `intro`},
            { text: `Load a save file` },
            { text: `Go to home` }
        ]
    }
}