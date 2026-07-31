import { useState } from "react";

export function Main() {
  const [count, setCount] = useState(0);

  debugger;
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click counter</button>
      <p>
        ToDo: useState returns an array that can be destructured into variables.
        Provides a list of variables to store each item of the array. const
        [count, setCount] = useState(0)
      </p>
    </main>
  );
  function handleClick(event) {
    debugger;
    event.preventDefault();
    setCount(count + 1);
  }
}
