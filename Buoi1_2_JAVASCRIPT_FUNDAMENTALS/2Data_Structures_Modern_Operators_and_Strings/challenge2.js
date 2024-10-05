// Sample data simulating the game information
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer', 'Pavard', 'Upamecano', 'Hernandez', 'Davies', 
            'Kimmich', 'Goretzka', 'Muller', 'Sane', 'Lewandowski', 'Coman'
        ],
        [
            'Burki', 'Piszczek', 'Hummels', 'Akanji', 'Schmelzer', 
            'Witsel', 'Bellingham', 'Brandt', 'Hazard', 'Reus', 'Haaland'
        ]
    ],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 8.5,
    },
    scored: ['Lewandowski', 'Muller', 'Kimmich', 'Haaland', 'Reus']
};

// 1. Loop over the game.scored array and print each player name along with the goal number
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// 2. Calculate the average odd
const odds = Object.values(game.odds); // Get odds values as an array
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length; // Calculate average
console.log(`Average odd: ${averageOdd}`);

// 3. Print the odds in a formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// 4. Create an object called 'scorers'
const scorers = {};
for (const player of game.scored) {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1; // Increment goal count or initialize
}
console.log(scorers);
