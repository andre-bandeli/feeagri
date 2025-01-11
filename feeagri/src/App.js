import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import Events from "./paginas/Events";
import Parceiros from "./paginas/Parceiros";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Membros from "./paginas/Membros";
import Newsletter from "./paginas/Newsletter";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/congressos" element={<Events />} />
      <Route path="/membros" element={<Membros />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  );
}

export default App;