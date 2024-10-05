// Test data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

// Function to calculate tip
const calculateTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Calculate tip for each bill
let tip1 = calculateTip(bill1);
let tip2 = calculateTip(bill2);
let tip3 = calculateTip(bill3);

// Calculate total values (bill + tip)
let total1 = bill1 + tip1;
let total2 = bill2 + tip2;
let total3 = bill3 + tip3;

// Print the result for each bill
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${total1}`);
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${total2}`);
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${total3}`);
