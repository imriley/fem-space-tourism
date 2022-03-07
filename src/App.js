import "./styles/styles.scss";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state) => state.Background);
  console.log(page);
  return (
    <Router>
      <div className={`container ${page}`}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
