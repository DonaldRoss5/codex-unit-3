import { useEffect, useState } from "react";

export default function Main() {
  // debugger;
  const [apiKey, setApiKey] = useState();
  useEffect(componentDidMount, []);
  return (
    <main>
      <p>To save an api key with a handler function </p>
      <form onSubmit={handleSubmit}>
        <label>
          API Key
          <input type="password" name="apiKey" />
        </label>

        <button>Submit</button>
      </form>
      <output>{apiKey}</output>
    </main>
  );

  function componentDidMount() {
    // debugger;
    const value = sessionStorage.getItem("apiKey");
    setApiKey(value);
  }

  function handleSubmit(event) {
    // debugger;
    event.preventDefault();
    const form = event.target;
    const value = form.elements.apiKey.value;
    sessionStorage.setItem("apiKey", "value");
    setApiKey(value);
    form.clear();
  }
}
