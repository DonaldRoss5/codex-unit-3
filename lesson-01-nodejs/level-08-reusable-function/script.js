const cars = [
  "ford",
  "toyota",
  "bmw",
  "mercedes",
  "gmc",
  "cheverolet",
  "mazda",
  "lexus",
  "porsche",
  "cadillac",
];

const models = [
  "camry",
  "pruis",
  "535i",
  "focus",
  "mustand",
  "335i",
  "e300",
  "e350",
  "escalade",
];

function showItems(anyArray) {
  for (let index = 0; index < anyArray.length; index++) {
    const item = anyArray[index];
    const itemNumber = index + 1;
    console.log(`${itemNumber}. ${item}`);
  }
}

showItems(models);
showItems(cars);
