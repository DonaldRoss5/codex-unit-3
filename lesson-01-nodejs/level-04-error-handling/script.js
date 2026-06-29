console.log("Attempting to access browser features...");
try {
  localStorage.setItem("myCar", "BMW");
  const pTag = document.querySelector("p");
} catch (error) {
  console.log("There is an error: ");
}
