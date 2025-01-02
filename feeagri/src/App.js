import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import Events from "./paginas/Events";
import Parceiros from "./paginas/Parceiros";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Parceiros" element={<Parceiros />} />
    </Routes>
  );
}

export default App;