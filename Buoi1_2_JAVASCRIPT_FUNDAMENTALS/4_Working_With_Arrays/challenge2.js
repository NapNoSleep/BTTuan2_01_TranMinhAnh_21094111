function calcAverageHumanAge(ages) {
    // Step 1: Convert dog ages to human ages
    const humanAges = ages.map(dogAge => {
        return dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4;
    });

    // Step 2: Exclude dogs with human age less than 18
    const adultDogs = humanAges.filter(humanAge => humanAge >= 18);

    // Step 3: Calculate the average human age of adult dogs
    const averageHumanAge = adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length || 0;

    return averageHumanAge; // Return the average age, or 0 if no adult dogs
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(`Average human age for data set 1: ${calcAverageHumanAge(data1)}`); // Output average for data set 1
console.log(`Average human age for data set 2: ${calcAverageHumanAge(data2)}`); // Output average for data set 2
