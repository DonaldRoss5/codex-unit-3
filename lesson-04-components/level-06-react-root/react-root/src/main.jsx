import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const divTag = document.getElementById("root");
const root = createRoot(divTag);
root.render(
  <main>
    <h1>React Root</h1>
    <p>Explain React Root</p>
  </main>,
);
