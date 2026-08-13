// export function Main() {
//   let count = 0;
//   return (
//     <main>
//       <button onClick={handlClick}>Click counter</button>

//       <p>{count}</p>

//       <p>stateless variables, when button is Click</p>
//     </main>
//   );

//   function handlClick(event) {
//     debugger;
//     event.preventDefault();
//     setCount(setCount + 1);
//   }
// }
// export default Main;

function Main() {
  let count = 0;

  return (
    <main>
      <button onClick={handleClick}>Click counter</button>
      <p>{count}</p>
      <p>
        A stateless variable is a regular JavaScript variable declared inside a
        component function. Each time the component re-renders, the function
        runs again from the top, resetting the variable to its initial value.
        When you click the button, handleClick increments count in memory — but
        React has no way of knowing the value changed, so it never re-renders.
        If it did re-render, count would reset to 0 anyway because the function
        starts over. That is why stateless variables cannot drive visible
        updates in the UI.
      </p>
    </main>
  );

  function handleClick(event) {
    event.preventDefault();
    debugger;
    count = count + 1;
  }
}

export default Main;
