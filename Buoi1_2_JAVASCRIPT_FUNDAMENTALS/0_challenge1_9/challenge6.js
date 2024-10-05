// Step 1: Function 'calcTip' to calculate the tip based on the bill value
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Testing the function with a bill value of 100
console.log(calcTip(100)); // Output should be 15 (15% of 100)

// Step 2: Array 'bills' containing the test data
const bills = [125, 555, 44];

// Step 3: Array 'tips' containing the calculated tip for each bill
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Step 4 (Bonus): Array 'total' containing the total values (bill + tip)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Output the arrays to the console
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
