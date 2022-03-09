import "./styles/styles.scss";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.Background);
  return (
    <Router>
      <div className={`page ${page}`}>
        <div className={`container ${page}`}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/destination" element={<Destination />} />
            <Route exact path="/crew" element={<Crew />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
