const game={
    team1: 'Bayeran Munich',
    team2: 'Borussia Dotrunmund',
    players:[
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'kimmich',
            'Goretza',
            'Comma',
            'Muller',
            'Gnarby',
            'Lewandwoski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Rohit',
            'Yash',
            'Vasco de gamaa',
            'Akbar',
            'Birbal',
            'Raj',
            'Viral',
            'Karan'
        ]
    ],
    score: '4.0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds:{
        team1 : 1.33,
        x: 3.25,
        team2: 6.5
    }
}

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}