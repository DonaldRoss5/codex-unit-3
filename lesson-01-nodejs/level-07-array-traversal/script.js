const animals = [
  "dog",
  "cat",
  "bird",
  "goat",
  "bear",
  "rat",
  "mouse",
  "snake",
  "horse",
  "fish",
];

for (let index = 0; index < animals.length; index++) {
  const myAnimals = animals[index];
  const animalNumber = index + 1;
  console.log(`${animalNumber}. ${myAnimals}`);
}
