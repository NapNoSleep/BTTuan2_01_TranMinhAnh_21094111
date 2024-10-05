// 1. Constructor function for Car
function Car(make, speed) {
    this.make = make;  // The make of the car
    this.speed = speed; // The current speed of the car in km/h
}

// Accelerate method for Car
Car.prototype.accelerate = function() {
    this.speed += 10; // Increase speed by 10 km/h
    console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
};

// Brake method for Car
Car.prototype.brake = function() {
    this.speed -= 5; // Decrease speed by 5 km/h
    console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
};

// 2. Constructor function for Electric Car (EV)
function EV(make, speed, charge) {
    Car.call(this, make, speed); // Call the Car constructor
    this.charge = charge; // Current battery charge in %
}

// Inherit from Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// 3. Method to charge the battery
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo; // Set battery charge to chargeTo
};

// 4. Override the accelerate method for EV
EV.prototype.accelerate = function() {
    this.speed += 20; // Increase speed by 20 km/h
    this.charge -= 1; // Decrease charge by 1%
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`); // Log message
};

// 5. Create an electric car object
const tesla = new EV('Tesla', 120, 23);

// Experiment with methods
console.log('--- Tesla Actions ---');
tesla.accelerate(); // Tesla accelerates
tesla.brake();      // Tesla brakes
tesla.chargeBattery(90); // Charge to 90%
console.log(`After charging, the battery is at ${tesla.charge}%.`); // Check battery charge
