import { useState } from "react";
import "./App.css";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const changeColorScheme = () => {
    colorScheme === "light" ? setColorScheme("dark") : setColorScheme("light");
  };

  return (
    <div className="App">
      <div className={`container ${colorScheme}`}>
        <h1>This is heading!</h1>
        <p>lorem50 failed me hard.</p>
        <label class="switch" onChange={changeColorScheme}>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>{" "}
      </div>
    </div>
  );
}

export default App;
