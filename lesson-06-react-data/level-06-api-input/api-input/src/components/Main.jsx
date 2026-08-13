import { useEffect, useState } from "react";

export function Main() {
  // debugger;

  const [characters, setCharacters] = useState(false);
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{"didMount: " + didMount}</p>

      <p>Explain how to make semati template</p>

      <form onSubmit={handleSubmit}>
        <label>
          Max characters:
          <input type="number" name="max" />
        </label>
        <button>Submit</button>
      </form>
      <section>{characters}</section>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

  async function handleData() {
    // debugger;
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );
    const result = await response.json();
    const data = result;
    const details = data.map(toCharacters);
    setCharacters(details);
  }

  async function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const data = {
      max: form.elements.max.value
    };
    const dataString = new URLSearchParams(data);
    const response  = await fetch("https://potterapi-fedeperin.vercel.app/en/characters" + "?" + dataString,
    );
    const results = await response.json();
    const details = reults.map(toCharacters);
    setCharacters(details);
    debugger;
  }
}

function toCharacters(dataItem, index) {
  const key = index + dataItem.fullName;
  const details = (
    <details key={key}>
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
