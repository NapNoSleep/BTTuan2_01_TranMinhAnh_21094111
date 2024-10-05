// Step 1: Define the calcTip function
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Calculate tip
};

// Step 2: Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Step 3: Create empty arrays for the tips and totals
const tips = [];
const totals = [];

// Step 4: Use a for loop to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]); // Calculate tip for current bill
    tips.push(tip); // Add tip to tips array
    totals.push(bills[i] + tip); // Add total to totals array
}

// Bonus Step 4: Write a function 'calcAverage'
const calcAverage = (arr) => {
    let sum = 0; // Initialize sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add current value to sum
    }
    return sum / arr.length; // Calculate average
};

// Call the function with the 'totals' array and log the result
const averageTotal = calcAverage(totals);
console.log(`The average total is: ${averageTotal.toFixed(2)}`);
