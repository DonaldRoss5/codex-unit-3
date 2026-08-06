export function Main() {
  return (
    <main>
      <button onClick={handleClick}>Click event</button>
    </main>
  );
}
function handleClick(event) {
  event.preventDefault();
  debugger;
  console.log(
    "In React, you handle click events by adding an onClick attribute to any HTML element and assigning it a handler function. The handler receives a synthetic event object, which wraps the native browser event. You can call event.preventDefault() to stop the element's default behavior, such as a form submitting or a link navigating. The function runs every time the element is clicked."
  );
}


export default Main;
