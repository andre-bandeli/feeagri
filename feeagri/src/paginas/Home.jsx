import React from "react";
import Header from "../componentes/Header";
import "../styles/Home.scss";
import Hero from "../componentes/Hero";
import Slider from "react-slick";

import Imagem1 from '../assets/1.jpg'
import Imagem2 from '../assets/2.jpg'
import Imagem3 from '../assets/3.jpg'
import Imagem4 from '../assets/4.jpg'
import Imagem5 from '../assets/5.jpg'
import Imagem6 from '../assets/6.jpg'
import Contador from "../componentes/Contador";

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header />
      <Hero />
      
      {/* Seção de Cards */}
      <div className="stats-section">
        <div className="card">
          <h3>+40 mil</h3>
          <p>Alunos</p>
        </div>
        <div className="card">
          <h3>+30</h3>
          <p>Instituições</p>
        </div>
        <div className="card">
          <h3>+10</h3>
          <p>Parceiros</p>
        </div>
        <div className="card">
          <h3>+10</h3>
          <p>Anos</p>
        </div>
      </div>
      {/* Fim Seção de Cards */}

      {/* Seção de Sobre */}
      <div className="content">
        <div className="cardContent">
          <div className="text">
            <h2>Sobre a <strong>FEEAGRI</strong></h2>
          </div>
          <div className="text">
            <p>A FEEAGRI é a Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas. Representando estudantes de todo o país, a FEEAGRI promove a integração, o fortalecimento da formação acadêmica e a valorização profissional dessas áreas, organizando eventos, projetos e iniciativas que visam o desenvolvimento sustentável e o protagonismo jovem no setor agroambiental.</p>
          </div>
        </div>
      </div>
      {/* Fim Seção de Sobre */}

      <main>
        {/* Seção de Sobre */}
        <div className="container">

            <div className="textContainer">
              <h2> <strong>Inovação no Campo</strong> & Desenvolvimento Sustentável & <strong>Tecnologia</strong></h2>
            </div>

            <div className="separador">

            </div>

            <div className="cards-slick">
              <h2>Nossas Atividades</h2>
              <Slider {...settings}>
                <div className="card">
                  <img src={Imagem1} alt="Descrição do Card 1" />
                  <h3>Card 1</h3>
                  <p>Conteúdo do card 1</p>
                </div>
                <div className="card">
                  <img src={Imagem6} alt="Descrição do Card 2" />
                  <h3>Card 2</h3>
                  <p>Conteúdo do card 2</p>
                </div>
                <div className="card">
                  <img src={Imagem3} alt="Descrição do Card 3" />
                  <h3>Card 3</h3>
                  <p>Conteúdo do card 3</p>
                </div>
                <div className="card">
                  <img src={Imagem4} alt="Descrição do Card 3" />
                  <h3>Card 4</h3>
                  <p>Conteúdo do card 4</p>
                </div>
                <div className="card">
                  <img src={Imagem5} alt="Descrição do Card 3" />
                  <h3>Card 5</h3>
                  <p>Conteúdo do card 5</p>
                </div>
              </Slider>
          </div>
        </div>

        <div className="congressos-section">
          <div className="congressos-content">
            <h2>
              Edições do <strong>CONEEAGRI</strong>, e <strong>I ENPEAG</strong>
            </h2>
            <p>
              <strong>Leia Mais</strong> <br />GreenFields AgroCo, a sprawling commercial farm nestled in the heart of the Midwest, embarked on a transformative journey to overcome complex challenges and enhance its agricultural operations. With hundreds of acres under cultivation and a diverse range of crops, the farm sought a strategic partner to optimize crop management, boost efficiency, and embrace sustainable practices.
            </p>
          </div>
          <div className="congressos-images">
            <div className="main-image">
              <img src={Imagem1} alt="Main Field" />
            </div>
            <div className="side-images">
              <img src={Imagem2} alt="Irrigation System" />
              <img src={Imagem3} alt="Crop Management" />
            </div>
          </div>
          <div className="congressos-footer">
              <span>Year: 2023</span>
              <span>Category: Organic Farming</span>
            </div>
        </div>

        <div className="contadorSection">
          <h2> <strong>XXXVIII</strong> CONEEAGRI & II ENPEAG</h2>
          <h3>Local: UFPel - Pelotas/RS</h3>
          <Contador />
        </div>

          {/* Seção de Sobre */}
      <div className="content">
        <div className="cardContent">
          <div className="text">
            <h2>A XXXVIII Edição do CONEEAGRI acontecerá em <br /> <strong>Pelotas</strong> entre os dias X e Y</h2>
          </div>
          <div className="text">
            <p>A FEEAGRI é a Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas. Representando estudantes de todo o país, a FEEAGRI promove a integração, o fortalecimento da formação acadêmica e a valorização profissional dessas áreas, organizando eventos, projetos e iniciativas que visam o desenvolvimento sustentável e o protagonismo jovem no setor agroambiental.</p>
          </div>
        </div>
      </div>
      {/* Fim Seção de Sobre */}
          
      {/* Fim Seção de Sobre */}
      </main>


    </div>
  );
}
