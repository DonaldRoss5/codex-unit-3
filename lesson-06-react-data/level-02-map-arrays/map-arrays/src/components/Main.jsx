import { useEffect, useState } from "react";
import { data } from "../data/data";

export function Main() {
    debugger;
  const [didMount, setDidMount] = useState(false);
  const [subjects, setSubjects] = useState([]);
  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <section>{subjects}</section>

      <p>Explain how to make semati template</p>
    </main>
  );

  function componentDidMount() {
    debugger;
    setDidMount(true);
    const details = data.map(toDetails);
    setSubjects(details);
  }

  function toDetails(dataItem) {
    const details = (
    <details>
<summary>{dataItem.name}</summary>
{dataItem.description}

    </details>
    );
    return details
  }
}

export default Main;







 // const detailsElements = [];
    // for (let index = 0; index < data.length; index++){
    // debugger;
    // const item = data[index];
    // const details = (
    // <details>
    //     <summary>{item.name}</summary>
    //     {item.description}
    // </details>
    // );
    // detailsElements.push(details);
    //   }
    //   setSubjects(detailsElements);
    // }