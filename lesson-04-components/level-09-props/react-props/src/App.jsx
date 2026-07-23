import Main from "./components/Main";
import Header from "./components/Header";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header title="React Props" />
      <Main message="Add props a parameter of a component. Pass an attribute and value to the component. Access the value from the props object. Render the value in the component" />
      <Footer />
    </>
  );
}

export default App;
