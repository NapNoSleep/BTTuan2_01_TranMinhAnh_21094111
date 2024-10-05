function checkDogs(dogsJulia, dogsKate) {
    // Step 1: Create a shallow copy of Julia's array and remove the first and last two elements
    const correctedJulia = dogsJulia.slice(2, -2); // Removes the first two and last two ages

    // Step 2: Create an array with both Julia's and Kate's data
    const allDogs = [...correctedJulia, ...dogsKate];

    // Step 3: Log whether each dog is an adult or a puppy
    allDogs.forEach((age, index) => {
        const dogNumber = index + 1; // Dog number (1-based index)
        if (age >= 3) {
            console.log(`Dog number ${dogNumber} is an adult, and is ${age} years old.`);
        } else {
            console.log(`Dog number ${dogNumber} is still a puppy.`);
        }
    });
}

// Test data
const data1Julia = [3, 5, 2, 12, 7];
const data1Kate = [4, 1, 15, 8, 3];
checkDogs(data1Julia, data1Kate);

const data2Julia = [9, 16, 6, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];
checkDogs(data2Julia, data2Kate);
