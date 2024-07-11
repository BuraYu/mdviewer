import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="md-viewer--container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
