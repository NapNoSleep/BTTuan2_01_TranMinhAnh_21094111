// Poll object
const poll = {
    question: 'What is your favourite programming language?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    answers: new Array(4).fill(0), // Initialize answers array with zeros

    // Method to register new answer
    registerNewAnswer: function () {
        // Display the poll question and options in a prompt
        const answer = prompt(`${this.question}\n${this.options.map((opt, index) => `${index}: ${opt}`).join('\n')}\n(Write option number)`);
        
        // Convert input to number and validate
        const selectedOption = Number(answer);
        if (typeof selectedOption === 'number' && selectedOption >= 0 && selectedOption < this.answers.length) {
            this.answers[selectedOption]++; // Increment the selected option's count
            this.displayResults(); // Display results after registration
        } else {
            alert('Invalid option. Please enter a number corresponding to the options.');
        }
    },

    // Method to display results
    displayResults: function (type = 'array') {
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else {
            console.log(this.answers); // Default to array display
        }
    }
};

// Add event listener to the button
document.getElementById('pollButton').addEventListener('click', () => {
    poll.registerNewAnswer();
});

// Bonus: Display test data results
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Use displayResults with the test data
poll.displayResults.call({ answers: testData1 }, 'array');
poll.displayResults.call({ answers: testData1 }, 'string');
poll.displayResults.call({ answers: testData2 }, 'array');
poll.displayResults.call({ answers: testData2 }, 'string');
