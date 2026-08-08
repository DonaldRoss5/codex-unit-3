import { useEffect, useState } from "react";

export function Main (){
const [didMount ,setDidMount ] = useState(false);
useEffect(componentDidMount, []);
debugger;
return (

    <main>
        <p>{"didMount: " + didMount}</p>
        <p>useEffect and how to use it to track a component during the mount phase.</p>
        </main>
)

function componentDidMount(){
debugger;
setDidMount(true);

}

}
export default Main;