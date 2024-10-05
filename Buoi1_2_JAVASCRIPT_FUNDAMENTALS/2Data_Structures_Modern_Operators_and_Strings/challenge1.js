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

// 1. Create player arrays for each team
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Goalkeeper and field players for Bayern Munich
const gk = players1[0]; // Goalkeeper
const fieldPlayers = players1.slice(1); // Field players (remaining)

// 3. All players array
const allPlayers = [...players1, ...players2]; // Combine both teams

// 4. Final player array for Bayern Munich
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // Original players + substitutes

// 5. Odds variables
const { team1, draw, team2 } = game.odds; // Destructure odds

// 6. Print goals function
const printGoals = (...playerNames) => {
    console.log(`Players who scored: ${playerNames.join(', ')}`);
    console.log(`Total goals scored: ${playerNames.length}`);
};

// Test data for printGoals
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Call with test players
printGoals(...game.scored); // Call with players who scored in the game

// 7. Team more likely to win
const likelyWinningTeam = team1 < team2 ? game.team1 : game.team2; // No if/else or ternary
console.log(`${likelyWinningTeam} is more likely to win.`);
