import { useEffect } from "react";



function Main({ 
    setUnmount}) {


    
        function componentWillUnmount() {
    return function () {
      alert("The Main component is unmounted");
    };
  }


  useEffect(componentWillUnmount, []);

  function handleClick() {
    setUnmount(true);
  }


  debugger;

  return(
  <main>
    <button onClick={handleClick}>Click to unmount</button>
    <p>
        TO DO: To run code during the unmount phase
    </p>
  </main>
  );
}
export default Main;

// not running accurately