import "./styles/styles.scss";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.Background);
  return (
    <Router>
      <div className={`page ${page}`}>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/destination" element={<Destination />} />
            <Route exact path="/crew" element={<Crew />} />
            <Route exact path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
