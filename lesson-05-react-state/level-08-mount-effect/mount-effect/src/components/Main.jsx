import { useEffect, useState } from "react";


export function Main(){
  debugger
const [didMount, setDidMount] = useState(false);
useEffect(componentDidMount, []);

return (
  <main>
    <p>{"didMount: " + didMount}</p>
    <p>
      "TODO: useEffect and how to use it to track a component during the mount
      phase"
    </p>
  </main>
);
function componentDidMount() {
  debugger;
  setDidMount(true);
}
}