
import pic1 from "./assets/hero.png";
import pic2 from "./assets/react.svg";
import pic3 from "./assets/vite.svg";


import "./App.css";


function App() {
  return (
    <main>
   <h1>React Images </h1>
      <p>To create a React Template, scaffold a React JavaScript project with Vite, delete the contents of the App function</p>

      <div id="pictures">
        <img src={pic1} />
        <img src={pic2} />
        <img src={pic3} />
      </div>
    </main>
  );
}

export default App;
