// 1. ES6 class for Car
class CarCl {
    constructor(make, speed) {
        this.make = make; // The make of the car
        this.speed = speed; // The current speed of the car in km/h
    }

    // Accelerate method that returns the current object for chaining
    accelerate() {
        this.speed += 10; // Increase speed by 10 km/h
        console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
        return this; // Return the current object
    }

    // Brake method that returns the current object for chaining
    brake() {
        this.speed -= 5; // Decrease speed by 5 km/h
        console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
        return this; // Return the current object
    }
}

// 2. ES6 class for Electric Car (EVCl)
class EVCl extends CarCl {
    // Use a private field for charge
    #charge; // Private field for charge

    constructor(make, speed, charge) {
        super(make, speed); // Call the CarCl constructor
        this.#charge = charge; // Initialize the charge
    }

    // Method to charge the battery with chaining capability
    chargeBattery(chargeTo) {
        this.#charge = chargeTo; // Set battery charge to chargeTo
        console.log(`Battery charged to ${this.#charge}%.`); // Log battery status
        return this; // Return the current object
    }

    // Override the accelerate method for EV
    accelerate() {
        this.speed += 20; // Increase speed by 20 km/h
        this.#charge -= 1; // Decrease charge by 1%
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`); // Log message
        return this; // Return the current object
    }
}

// 3. Create an electric car object
const rivian = new EVCl('Rivian', 120, 23);

// Experiment with chaining methods
console.log('--- Rivian Actions ---');
rivian.accelerate().brake().chargeBattery(90).accelerate(); // Chain methods
