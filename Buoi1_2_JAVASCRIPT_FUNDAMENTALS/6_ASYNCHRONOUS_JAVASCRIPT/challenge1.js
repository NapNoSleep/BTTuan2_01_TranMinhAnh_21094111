// Function to determine the location based on latitude and longitude
const whereAmI = function (lat, lng) {
    // Construct the URL for the geocoding API
    const geocodeUrl = `https://geocode.xyz/${lat},${lng}?geoit=json`;

    // Fetch data from the geocoding API
    fetch(geocodeUrl)
        .then(response => {
            // Check if the response is OK (status code in the range 200-299)
            if (!response.ok) {
                throw new Error(`Problem with geocoding: ${response.status}`); // Create an error for non-200 responses
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            // Log the received data to see its structure
            console.log(data);

            // Extract the city and country from the data
            const city = data.city; // Assuming 'city' is a key in the received data
            const country = data.country; // Assuming 'country' is a key in the received data

            // Log the location message
            console.log(`You are in ${city}, ${country}`); // Output the location

            // Now, render the country using the countries API
            return fetch(`https://restcountries.com/v3.1/name/${country}`); // Fetch the country details
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Problem with country data: ${response.status}`); // Create an error for non-200 responses
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            // Log the country details
            console.log(data);

            // Here you can render the country details (e.g., the flag, population, etc.)
            const countryData = data[0]; // Access the first country in the array
            console.log(`Country: ${countryData.name.common}`);
            console.log(`Population: ${countryData.population}`);
            console.log(`Region: ${countryData.region}`);
            console.log(`Subregion: ${countryData.subregion}`);
            console.log(`Capital: ${countryData.capital}`);
            console.log(`Flag: ${countryData.flags.svg}`);
        })
        .catch(err => {
            // Handle any errors
            console.error(err); // Log the error
        });
};

// Test data
whereAmI(52.508, 13.381); // Coordinates 1
whereAmI(19.037, 72.873);  // Coordinates 2
whereAmI(-33.933, 18.474); // Coordinates 3
