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
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// // 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
