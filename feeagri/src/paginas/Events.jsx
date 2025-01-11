import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import "../styles/Events.scss";
import Footer from '../componentes/Footer';
import Contador from '../componentes/Contador';

import Imagem1 from '../assets/coneeagri.webp';
import Imagem2 from '../assets/c1.jpeg';
import Imagem3 from '../assets/c2.png';
import Imagem4 from '../assets/c3.jpeg';
import Imagem5 from '../assets/c4.png';
import Imagem6 from '../assets/c5.jpeg';

export default function Events() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <a href="">Home</a> | <a href="">Congressos</a>
          </h3>
        </div>
        <div className="container">
          <h2>Congressos</h2>
          <p>A FEEAGRI foi criada com o propósito de unir e representar os estudantes de Agronomia em nível nacional, oferecendo uma plataforma para o desenvolvimento e a valorização dessa importante área do conhecimento. A organização visa promover debates, eventos e ações que impactam positivamente a sociedade, além de fomentar a troca de experiências, a capacitação técnica e o fortalecimento da atuação dos futuros profissionais do setor. A FEEAGRI busca, ainda, influenciar as políticas públicas relacionadas ao campo da Agronomia e contribuir para a inovação e sustentabilidade no setor agrícola, tornando-se uma referência na formação de líderes comprometidos com o desenvolvimento social e ambiental.</p>
        </div>
      </div>
      <div className="contadorSection2">
        <h2><strong>XXXVIII</strong> CONEEAGRI & II ENPEAG</h2>
        <h3>Local: UFPel - Pelotas/RS</h3>
        <Contador />
      </div>
      <main>
        <div className="featuredSec">
          <div className="featuredSec-main">
            <div className="featuredSec-main-content">
              <h3>Ultimas edições</h3>
              <h2>XXXVII CONEEAGRI e I Encontro Nacional dos Profissionais de</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorem alias. Aperiam ducimus, debitis autem atque voluptatibus sunt officia placeat reiciendis est soluta, earum optio nisi expedita ut quod. Placeat.</p>
              <span>by FEEAGRI • December 20, 2024</span>
            </div>
            <img src={Imagem1} alt="Main Feature" />
          </div>

          <div className="featuredSec-secondary">
            <div className="card">
              <img src={Imagem2} alt="Feature 2" />
              <h3>XXXVI CONEEAGRI</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, praesentium. Aliquid soluta error itaque consequatur amet ad praesentium voluptas! Praesentium, unde consequatur. Laborum sapiente commodi asperiores autem velit exercitationem officia!</p>
            </div>
            <div className="card">
              <img src={Imagem3} alt="Feature 3" />
              <h3>XXXV CONEEAGRI</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat eligendi aspernatur aliquid perferendis a doloribus doloremque eum culpa recusandae fuga, voluptate eius quidem maiores commodi, aperiam similique sequi reiciendis.</p>
            </div>
            <div className="card">
              <img src={Imagem4} alt="Feature 4" />
              <h3>XXXV CONEEAGRI</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus odio, molestias voluptatem beatae error animi quisquam cupiditate recusandae. Quae voluptatum repellendus amet exercitationem nobis aliquam asperiores vitae pariatur veniam nulla!</p>
            </div>
            <div className="card">
              <img src={Imagem5} alt="Feature 4" />
              <h3>XXXIV CONEEAGRI</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis doloribus distinctio at ut, beatae aperiam soluta incidunt nobis. Deserunt at hic est. Odit fuga, enim tempore ut totam quis quia?</p>
            </div>
            <div className="card">
              <img src={Imagem6} alt="Feature 4" />
              <h3>XXXIII CONEEAGRI</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae nihil quo illo sint cupiditate molestiae! Aliquam totam veritatis tempore, exercitationem, praesentium adipisci repellat reprehenderit, iure aliquid deleniti unde ut.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
