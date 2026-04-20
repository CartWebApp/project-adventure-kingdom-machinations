//order for stats is HP, STR, INT, FORT, SPD, and Sanity
const playerStats = document.querySelectorAll(".playerStat");


export function playerImpact (array){
    playerStats.forEach((stat, index) => {
        let statNumber = Number(stat.innerHTML);
        stat.innerHTML = `${statNumber + array[index]}`
    })
}