//order for stats is HP, STR, INT, FORT, SPD, and Sanity
const playerStats = document.querySelectorAll(".playerStat");


export function playerImpact(array){
    playerStats.forEach((stat, index) => {
        let statNumber = Number(stat.innerHTML); //will access number in HTML span in list
        stat.innerHTML = `${statNumber + array[index]}` //adds/subtracts story impact number to list
    })
}

export function attack(playerStats, enemyStats){ //0: HP, 1: STR, 2: INT, 3: FORT, 4: SPD, 5: SAN
let enemyAtk = Math.ceil(.75 * enemyStats[1] - .5 * playerStats[3]); //subtract (75% of STR minus 50% FORT) from player HP
let playerAtk = Math.ceil(.85 * playerStats[1] - .25 * enemyStats[3]); //subtract (85% STR minus 25% FORT) from enemy HP

    if (enemyStats[4] >= 1.25 * playerStats[4]) { //enemy attack first if 1.25x faster
        playerStats[0] -= enemyAtk > 0 ? enemyAtk : 0; //if attack less than 0, no damage

        if (playerStats[0] <= 0){
            //death screen
            return;
        } else {
            enemyStats[0] -= playerAtk > 0 ? playerAtk : 0;
        }
    } else { //player attack first
        enemyStats[0] -= playerAtk > 0 ? playerAtk : 0;

        if (enemyStats <= 0){
            //victory screen
            return;
        } else {
            playerStats[0] -= enemyAtk > 0 ? enemyAtk : 0;
        }
    }

    playerStats[5] -= 1; //sanity drops after any attack
    console.log(playerStats, enemyStats);
    return playerStats, enemyStats;
}

export function defend(playerStats, enemyStats) {
let enemyAtk = Math.ceil(.45 * enemyStats[1] - .8 * playerStats[3]); //subtract (45% of STR minus 80% FORT) from player HP
let playerAtk = Math.ceil(.5 * playerStats[1] - .3 * enemyStats[3]); //subtract (50% STR minus 25% FORT) from enemy HP

    if (enemyStats[4] >= 1.25 * playerStats[4]) { //enemy attack first if 1.25x faster
        playerStats[0] -= enemyAtk > 0 ? enemyAtk : 0; //if attack less than 0, no damage

        if (playerStats[0] <= 0){
            //death screen
            return;
        } else {
            enemyStats[0] -= playerAtk > 0 ? playerAtk : 0;
        }
    } else { //player attack first
        enemyStats[0] -= playerAtk > 0 ? playerAtk : 0;

        if (enemyStats <= 0){
            //victory screen
            return;
        } else {
            playerStats[0] -= enemyAtk > 0 ? enemyAtk : 0;
        }
    }

    playerStats[5] -= 1; //sanity drops after any attack
    console.log(playerStats, enemyStats);
    return playerStats, enemyStats;
}