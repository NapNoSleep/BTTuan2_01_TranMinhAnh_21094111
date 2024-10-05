// Step 1: Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Step 2: Test Data
// Data 1
const dolphinsAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);

// Data 2
const dolphinsAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);

// Step 3: Create a function 'checkWinner'
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins.");
    }
};

// Step 4: Use the 'checkWinner' function to determine the winner
checkWinner(dolphinsAverage1, koalasAverage1); // Test Data 1
checkWinner(dolphinsAverage2, koalasAverage2); // Test Data 2
