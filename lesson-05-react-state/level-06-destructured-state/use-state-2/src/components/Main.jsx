import { useState } from "react";

export default function Main() {
  const results = useState(0);

  debugger;
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click counter</button>
      <p>ToDo: Explain stateful variables and when it is clicked </p>
    </main>
  );
  function handleClick(event) {
    debugger;
    event.preventDefault();
    setCount(count + 1);
  }
}
