// 1. Constructor function for Car
function Car(make, speed) {
    this.make = make;    // The make of the car
    this.speed = speed;  // The current speed of the car in km/h
}

// 2. Accelerate method to increase speed by 10
Car.prototype.accelerate = function() {
    this.speed += 10; // Increase speed by 10
    console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
};

// 3. Brake method to decrease speed by 5
Car.prototype.brake = function() {
    this.speed -= 5; // Decrease speed by 5
    console.log(`${this.make} is going at ${this.speed} km/h`); // Log new speed
};

// 4. Create two Car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Experiment with calling accelerate and brake
console.log('--- Car 1 Actions ---');
car1.accelerate(); // BMW accelerates
car1.accelerate(); // BMW accelerates
car1.brake();      // BMW brakes

console.log('--- Car 2 Actions ---');
car2.accelerate(); // Mercedes accelerates
car2.brake();      // Mercedes brakes
car2.brake();      // Mercedes brakes
