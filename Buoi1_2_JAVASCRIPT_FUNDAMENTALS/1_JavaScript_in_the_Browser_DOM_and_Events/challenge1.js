let secretNumber = Math.trunc(Math.random() * 20) + 1; // Random secret number between 1 and 20
let score = 20; // Initial score

// Select elements from the DOM
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score span');
const numberEl = document.querySelector('.number');
const guessInput = document.querySelector('.guess');

// Function to reset the game
const resetGame = () => {
    score = 20; // Restore initial score
    secretNumber = Math.trunc(Math.random() * 20) + 1; // Restore secret number
    messageEl.textContent = 'Start guessing...'; // Restore message
    scoreEl.textContent = score; // Restore score display
    numberEl.textContent = '??'; // Restore number display
    guessInput.value = ''; // Clear guess input
    document.body.style.backgroundColor = '#222'; // Restore background color
    numberEl.style.width = '15rem'; // Restore number width
};

// Attach click event handler to the 'again' button
document.querySelector('.again').addEventListener('click', resetGame);
