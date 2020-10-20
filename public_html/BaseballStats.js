/* 
 * [0,1,0,0,0,0,2,0,3]
 * batting average = .333
 * slugging % = .667
 */

document.write("Baseball statistics program<br><br>");

let atBats = [];
let batTimes = Number(prompt("Enter the number of times the player was at bat: "));

for (i = 0 ; i < batTimes ; i++) {
    atBats[i] = Number(prompt("Enter the number of bases the batter hit on time number " + i + ". (0 = batter out, 1 = single, 2 = double, 3 = triple, 4 = home run)"));
}

let hits = 0;

for (i = 0 ; i < atBats.length ; i++) {
    if (atBats[i] > 0) {
        hits++;
    }
}

let batMean = hits / atBats.length;

let single = 0, double = 0, triple = 0, homeRun = 0;
for (i = 0; i < atBats.length; i++) {
    if (atBats[i] === 1) {
        single++;
    }
    if (atBats[i] === 2) {
        double++;
    }
    if (atBats[i] === 3) {
        triple++;
    }
    if (atBats[i] === 4) {
        homeRun++;
    }
}

let slugPercent = (single + double * 2 + triple * 3 + homeRun * 4)/atBats.length; 

document.write("The batting average is " + batMean.toFixed(2) + ", and the slugging percent is " + slugPercent.toFixed(2) + ". ");

