// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Test Data Bonus 1
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

// Test Data Bonus 2
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

// Function to calculate average score
function calculateAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}

// Calculate averages for each team
let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);

let dolphinsAvg2 = calculateAverage(dolphinsScores2);
let koalasAvg2 = calculateAverage(koalasScores2);

let dolphinsAvg3 = calculateAverage(dolphinsScores3);
let koalasAvg3 = calculateAverage(koalasScores3);

// Function to determine the winner with minimum score condition
function determineWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAvg} vs Koalas' ${koalasAvg}`);
  } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log(`Koalas win with an average score of ${koalasAvg} vs Dolphins' ${dolphinsAvg}`);
  } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log(`It's a draw! Both teams have an average score of ${dolphinsAvg}`);
  } else {
    console.log(`No team wins the trophy!`);
  }
}

// Determine winners for each set of data
console.log("Test Data 1:");
determineWinner(dolphinsAvg1, koalasAvg1);

console.log("Test Data Bonus 1:");
determineWinner(dolphinsAvg2, koalasAvg2);

console.log("Test Data Bonus 2:");
determineWinner(dolphinsAvg3, koalasAvg3);
