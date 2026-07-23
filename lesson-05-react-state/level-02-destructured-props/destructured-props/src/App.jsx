import { Main } from "./components/Main";
import { Header } from "./components/Header";

import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header title="Destructure Props" />
      <Main message="How to destructure props - replace the props variable with {} the add a list of properties to destructure" />
      <Footer />
    </>
  );
}

export default App;
