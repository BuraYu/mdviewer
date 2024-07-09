import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <div className="md-viewer--container">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
