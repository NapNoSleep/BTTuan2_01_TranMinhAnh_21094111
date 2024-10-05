const calcAverageHumanAge = ages => 
    ages
        .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)) // Step 1: Convert dog ages to human ages
        .filter(humanAge => humanAge >= 18) // Step 2: Exclude dogs with human age less than 18
        .reduce((sum, age) => sum + age, 0) / ages.filter(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4) >= 18).length || 0; // Step 3: Calculate average

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(`Average human age for data set 1: ${calcAverageHumanAge(data1)}`); // Output average for data set 1
console.log(`Average human age for data set 2: ${calcAverageHumanAge(data2)}`); // Output average for data set 2
