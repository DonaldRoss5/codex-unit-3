import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const message1 = "To create React Variables";
  const message2 = "To use React Variables";
  return (
    <main>
      <h1>React Variables</h1>
      <p>{message1}</p>
      <p>{message2}</p>
    </main>
  );
}

export default App;
