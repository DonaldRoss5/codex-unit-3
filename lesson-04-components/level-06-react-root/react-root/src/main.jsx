import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const divTag = document.getElementById("root");
const root = createRoot(divTag);
root.render(
  <main>
    <h1>React Root</h1>
    <p>
      React renders HTML into a root element. From index.html the root element
      is selected in main.jsx by getElementById. createRoot uses the root
      element in which HTML will be rendered. The Root object uses a render
      method and renders HTML into the root element.
    </p>
  </main>,
);
