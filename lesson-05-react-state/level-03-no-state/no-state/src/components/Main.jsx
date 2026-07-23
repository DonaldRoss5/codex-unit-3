export function Main() {
  let count = 0;
  return (
    <main>
      <button onClick={handlClick}>Click counter</button>

      <p>{count}</p>

      <p>stateless variables, when button is Click</p>
    </main>
  );

  function handlClick(event) {
    debugger;
    event.preventDefault();
    setCount(setCount + 1);
  }
}
