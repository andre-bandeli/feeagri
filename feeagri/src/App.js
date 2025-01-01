import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import Events from "./paginas/Events";
import Colaboratory from "./paginas/Colaboratory";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/eventos" element={<Events />} />
      <Route path="/parceiros" element={<Colaboratory />} />
    </Routes>
  </Router>
);

export default App;