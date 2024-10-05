// Global variable to hold the current image element
let currentImage;

// Function to create and load an image
const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img'); // Create a new img element
        img.src = imgPath; // Set the src attribute to the provided image path

        // When the image has finished loading
        img.addEventListener('load', () => {
            document.querySelector('.images').appendChild(img); // Append the image to the DOM
            resolve(img); // Resolve the promise with the image element
        });

        // In case of an error loading the image
        img.addEventListener('error', () => {
            reject(new Error('Image could not be loaded.')); // Reject the promise
        });
    });
};

// Function to pause execution for a specified amount of time
const wait = function (seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000); // Resolve after the specified seconds
    });
};

// Function to handle the image loading sequence
const loadImages = async function () {
    try {
        // Load the first image
        currentImage = await createImage('img/image1.jpg'); // Replace with your image path
        console.log('Image 1 loaded');
        
        // Wait for 2 seconds
        await wait(2);

        // Hide the first image
        currentImage.style.display = 'none';

        // Load the second image
        currentImage = await createImage('img/image2.jpg'); // Replace with your image path
        console.log('Image 2 loaded');

        // Wait for 2 seconds
        await wait(2);

        // Hide the second image
        currentImage.style.display = 'none';
    } catch (error) {
        console.error(error); // Log any errors encountered
    }
};

// Start loading images
loadImages();
