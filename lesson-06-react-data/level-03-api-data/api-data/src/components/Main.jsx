import { useEffect, useState } from "react";

export function Main() {
  debugger;

  const [characters, setCharacters] = useState(false);
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>
      <section>{characters}</section>
      <p>Explain how to make semati template</p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

  async function handleData() {
    debugger;
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );
    const result = await response.json();
    const data = result;
    const details = data.map(toCharacters);
    setCharacters(details);
  }
}

function toCharacters(dataItem) {
  const details = (
    <details>
      <summary>{dataItem.fullName}</summary>
      <figure>
        <img src={dataItem.image} />
        <figcaption>{dataItem.interpretedBy}</figcaption>
      </figure>
    </details>
  );

  return details;
}

export default Main;
