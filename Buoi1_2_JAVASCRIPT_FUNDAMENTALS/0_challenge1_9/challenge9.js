// Step 1: Create the function 'printForecast'
const printForecast = (arr) => {
    let forecastString = ''; // Initialize an empty string for the forecast

    // Loop through the array to construct the forecast string
    for (let i = 0; i < arr.length; i++) {
        forecastString += `... ${arr[i]}oC in ${i + 1} days `; // Append each temperature and day to the string
    }

    console.log(forecastString.trim() + '...'); // Log the final string, trimming whitespace and adding ellipsis at the end
};

// Test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Test the function with both datasets
printForecast(data1); // Output: "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
printForecast(data2); // Output: "... 12oC in 1 days ... 5oC in 2 days ... -5oC in 3 days ... 0oC in 4 days ... 4oC in 5 days ..."
