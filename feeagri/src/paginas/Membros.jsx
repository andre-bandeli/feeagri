import React from 'react'
import '../styles/HeaderSecundario.scss'
import '../styles/Membros.scss'
import Header from "../componentes/Header";
import Footer from '../componentes/Footer'

import Imagem1 from '../assets/pessoa.jpg'

const membrosData = [
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
];

const exMembrosData = [
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1
  },

];

export default function Membros() {
  return (
    <div>
          <Header />
                 <div className="HeaderSecundario">
                   <div className="links">
                     <h3> <a href="">Home</a> | <a href="">Membros</a></h3>
                   </div>
                     <div className="container">
                     <h2>Nossos Membros</h2>
                     <p>A FEEAGRI foi criada com o propósito de unir e representar os estudantes de Agronomia em nível nacional, oferecendo uma plataforma para o desenvolvimento e a valorização dessa importante área do conhecimento. A organização visa promover debates, eventos e ações que impactam positivamente a sociedade, além de fomentar a troca de experiências, a capacitação técnica e o fortalecimento da atuação dos futuros profissionais do setor. A FEEAGRI busca, ainda, influenciar as políticas públicas relacionadas ao campo da Agronomia e contribuir para a inovação e sustentabilidade no setor agrícola, tornando-se uma referência na formação de líderes comprometidos com o desenvolvimento social e ambiental.</p>
                     </div>
                   </div>
                 <main>
                  <div className="containerCustom">
                  <div className="container">
          <h2>Gestão 2025</h2>
          <div className="membros">
            {membrosData.map((membro, index) => (
              <div key={index} className="cardMembro">
                <img src={membro.foto} alt={membro.nome} className="fotoMembro" />
                <h4>{membro.nome}</h4>
                <p>{membro.instituicao}</p>
                <p>{membro.cargo}</p>
              </div>
            ))}
          </div>
          <h2>Ex membros</h2>
          <div className="membros">
            {exMembrosData.map((membro, index) => (
              <div key={index} className="cardMembro">
                <img src={membro.foto} alt={membro.nome} className="fotoMembro" />
                <h4>{membro.nome}</h4>
                <p>{membro.instituicao}</p>
                <p>{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>
                  </div>
                 </main>
                 <Footer />
    </div>
  )
}
