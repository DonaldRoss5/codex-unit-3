// show.js (ESM)
// Export a function that displays items from an array numbered from 1.
export function showNames(names) {
  console.log("Famous names:");
  for (let index = 0; index < names.length; index++) {
    console.log(`${index + 1}. ${names[index]}`);
  }
}
