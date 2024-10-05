// Function to create an image and return a promise
const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        // Resolve when the image loads
        img.addEventListener('load', () => {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        });

        // Reject if there is an error loading the image
        img.addEventListener('error', () => {
            reject(new Error(`Could not load image at ${imgPath}`));
        });
    });
};

// Function to wait for a specified number of seconds
const wait = function (seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
};

// Async function to load an image, pause, and hide it
const loadNPause = async function (imgPath) {
    try {
        const img = await createImage(imgPath); // Load the image
        console.log('Image loaded: ', img); // Log that the image has loaded
        await wait(2); // Wait for 2 seconds
        img.style.display = 'none'; // Hide the image
    } catch (error) {
        console.error(error); // Log any errors
    }
};

// Async function to load multiple images
const loadAll = async function (imgArr) {
    try {
        // Map over the array and load all images using createImage
        const imgs = await Promise.all(imgArr.map(img => createImage(img))); // Wait for all images to load
        console.log('All images loaded:', imgs); // Log the array of loaded images
        
        // Add the 'parallel' class to each image
        imgs.forEach(img => img.classList.add('parallel'));
    } catch (error) {
        console.error(error); // Log any errors encountered
    }
};

// Test the loadNPause function
loadNPause('img/img-1.jpg'); // Test with your image path

// Test data for Part 2
const imgArray = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

// Load all images
loadAll(imgArray);
