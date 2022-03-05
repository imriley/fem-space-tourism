import "./styles/styles.scss";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
