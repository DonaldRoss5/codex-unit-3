import { Component, useEffect, useState } from "react";

function Main() {
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);

  return (
    <main>
      <p>{"didMount:" + didMount}</p>
      <p>Explain how to make semati template</p>
    </main>
  );
}

export default Main;
