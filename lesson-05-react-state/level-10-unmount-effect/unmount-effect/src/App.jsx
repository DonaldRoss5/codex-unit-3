import Main from "./components/Main";
import Header from "./components/Header";

import Footer from "./components/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  const [unmount, setUnmount] = useState(false);

  let mainComponent = <Main setUnmount={setUnmount} />;

  if ((unmount === true)) {
    mainComponent = <></>;
  }
debugger
  return (
    <>
      <Header />
      {mainComponent}
      <Footer />
    </>
  );
}

export default App;
