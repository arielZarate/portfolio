import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import DetailChicCloset from "./components/Portfolio/Details/DetailChicCloset";
import DetailGames from "./components/Portfolio/Details/DetailGames";
import Contact from "./components/Contact/Contact";

//===============RECT ROUTER DOM=================================
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App.css">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/porfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detailChic" element={<DetailChicCloset />} />
        <Route path="/detailGames" element={<DetailGames />} />
      </Routes>
    </div>
  );
}

export default App;
