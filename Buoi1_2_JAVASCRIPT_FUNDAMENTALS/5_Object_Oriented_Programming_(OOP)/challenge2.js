// 1. Create CarCl class
class CarCl {
    constructor(make, speed) {
        this.make = make;  // The make of the car
        this.speed = speed; // The current speed of the car in km/h
    }

    // 2. Accelerate method
    accelerate() {
        this.speed += 10; // Increase speed by 10 km/h
        console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
    }

    // 3. Brake method
    brake() {
        this.speed -= 5; // Decrease speed by 5 km/h
        console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
    }

    // 4. Getter for speed in US (mi/h)
    get speedUS() {
        return this.speed / 1.6; // Convert km/h to mi/h
    }

    // 5. Setter for speed in US (mi/h)
    set speedUS(speedInMiles) {
        this.speed = speedInMiles * 1.6; // Convert mi/h to km/h
    }
}

// 6. Create a new CarCl object
const car1 = new CarCl('Ford', 120);

// Experiment with methods and speed conversion
console.log('--- Car Actions ---');
car1.accelerate(); // Ford accelerates
car1.brake();      // Ford brakes

// Using getter to get speed in mi/h
console.log(`Current speed in mi/h: ${car1.speedUS}`);

// Using setter to change speed in mi/h
car1.speedUS = 70; // Set speed to 70 mi/h
console.log(`Current speed in km/h after setting speedUS: ${car1.speed}`); // Check speed in km/h
