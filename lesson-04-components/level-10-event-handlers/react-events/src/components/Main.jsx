export function Main() {
  return (
    <main>
      <p>Explain how to make semati template</p>
      <button onClick={handleClick}>Click event;</button>
    </main>
  );

  function HandleClick(event) {
    debugger;
    event.preventDefault();
    console.log("Explain use click event in React");
  }
}
