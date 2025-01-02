import React from "react";
import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";
import "../styles/About.scss";

export default function About() {
return (
  <div>
    <Header />
    <main className="about">
      <h2>Sobre Nós</h2>
      <p>A FEEAGRI foi criada para unir e representar os estudantes de Agronomia em nível nacional, promovendo debates, eventos e ações que impactam positivamente a sociedade.</p>
    </main>
  </div>
)
}

