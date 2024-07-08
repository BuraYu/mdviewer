import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="md-viewer--container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
