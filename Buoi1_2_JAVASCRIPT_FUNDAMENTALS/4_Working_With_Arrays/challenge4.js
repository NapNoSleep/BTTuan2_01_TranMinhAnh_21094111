const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Calculate recommended food portion and add it to the dog objects
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28); // Adding recommended food as a new property
});

// 2. Find Sarah's dog and log whether it's eating too much or too little
const sarahsDog = dogs.find(dog => dog.owners.includes("Sarah"));
const eatingStatus = sarahsDog.curFood > sarahsDog.recommendedFood ? 'too much' : 'too little';
console.log(`Sarah's dog is eating ${eatingStatus}.`);

// 3. Create arrays for owners of dogs that eat too much or too little
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood)
                              .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood)
                               .flatMap(dog => dog.owners);

// 4. Log strings for each array created
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log if any dog is eating exactly the recommended amount
const isEatingExactlyRecommended = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(isEatingExactlyRecommended); // true or false

// 6. Log if any dog is eating an okay amount
const isEatingOkayAmount = dogs.some(dog => 
    dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
);
console.log(isEatingOkayAmount); // true or false

// 7. Create an array of dogs that are eating an okay amount
const dogsEatingOkay = dogs.filter(dog => 
    dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsEatingOkay);

// 8. Create a shallow copy of 'dogs' and sort it by recommended food portion
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
