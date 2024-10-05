// Function to convert underscore_case to camelCase
const convertToCamelCase = (input) => {
    return input
        .toLowerCase()
        .split('_') // Split the string at underscores
        .map((word, index) => {
            // Capitalize the first letter of each word except the first one
            if (index === 0) return word; // Return the first word as is
            return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize
        })
        .join(''); // Join the words back together
};

// Event listener for the button
document.getElementById('convertButton').addEventListener('click', () => {
    const textarea = document.getElementById('variableInput');
    const input = textarea.value.trim(); // Get the input and trim whitespace
    const variables = input.split('\n'); // Split input into lines

    variables.forEach(variable => {
        if (variable) { // Ensure the line is not empty
            const camelCaseVariable = convertToCamelCase(variable); // Convert
            const checkMarks = '✅'.repeat(variables.indexOf(variable) + 1); // Create checkmarks
            console.log(`${camelCaseVariable} ${checkMarks}`);
        }
    });
});
