import React from "react";
import Header from "../componentes/Header";
import "../styles/Home.scss";
import Hero from "../componentes/Hero";
import StatsCounter from "../componentes/StatsCounter";
import Imagem1 from '../assets/16.jpg';
import Imagem2 from '../assets/19.jpg';
import Imagem3 from '../assets/17.jpg';
import Imagem4 from '../assets/21.jpg';
import Imagem5 from '../assets/7.jpeg';
import Imagem6 from '../assets/8.jpg';
import Imagem7 from '../assets/13.jpg';
import abeag from '../assets/abeag.png';
import crea from '../assets/crea.png';
import Contador from "../componentes/Contador";
import Footer from "../componentes/Footer";
import NewsletterComponent from "../componentes/NewsletterComponent";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div>
      <Header />
      <Hero />
      
      <div className="stats-section">
        <div className="card">
          <h3><StatsCounter finalNumber={30} /></h3>
          <p>Instituições de Ensino</p>
        </div>
        <div className="card">
          <h3><StatsCounter finalNumber={5000} /></h3>
          <p>Alunos em todo Brasil</p>
        </div>
        <div className="card">
          <h3><StatsCounter finalNumber={20} /></h3>
          <p>Edições do CONEEAGRI</p>
        </div>
        <div className="card">
          <h3><StatsCounter finalNumber={10} /></h3>
          <p>Anos de história</p>
        </div>
      </div>

      <div className="content">
        <div className="cardContent">
          <div className="text">
            <h2>Sobre a <strong>FEEAGRI</strong></h2>
          </div>
          <div className="text">
            <p>A FEEAGRI é a Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas. Representando estudantes de todo o país, a FEEAGRI promove a integração, o fortalecimento da formação acadêmica e a valorização profissional dessas áreas, organizando eventos, projetos e iniciativas que visam o desenvolvimento sustentável e o protagonismo jovem no setor agroambiental.</p>
            <button><a href="">leia mais</a></button>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="textContainer">
            <h2><strong className="gradientText">Inovação no Campo</strong> & <strong>Desenvolvimento Sustentável</strong> & <strong className="gradientText">Tecnologia</strong></h2>
          </div>
          <div className="separador"></div>
          <div className="featured">
            <div className="featured-main">
              <div className="featured-main-content">
                <h3>Nossas atividades</h3>
                <h2>A FEEAGRI atua na representação e defesa dos estudantes promovendo a valorização dessas áreas.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorem alias. Aperiam ducimus, debitis autem atque voluptatibus sunt officia placeat reiciendis est soluta, earum optio nisi expedita ut quod. Placeat.</p>
                <span>by Cassidy Williams • December 20, 2024</span>
              </div>
              <img src={Imagem1} alt="Main Feature" />
            </div>

            <div className="featured-secondary">
              <div className="card">
                <img src={Imagem2} alt="Feature 2" />
                <h3>Organização de Eventos Acadêmicos</h3>
                <p>Come and join 150M developers on GitHub with the new free tier for GitHub Copilot in VS Code.</p>
              </div>
              <div className="card">
                <img src={Imagem3} alt="Feature 3" />
                <h3>Incentivo à Pesquisa e Extensão</h3>
                <p>Whether you’re hunting for the perfect gift, find something for every dev!</p>
              </div>
              <div className="card">
                <img src={Imagem4} alt="Feature 4" />
                <h3>Capacitação e Desenvolvimento</h3>
                <p>The Gaady Awards are like the Emmy Awards for digital accessibility.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contadorSection">
          <h2><strong>XXXVIII</strong> CONEEAGRI & II ENPEAG</h2>
          <h3>Local: UFPel - Pelotas/RS</h3>
          <Contador />
        </div>

        <div className="congressos-section">
          <div className="congressos-content">
            <h2>Confira as últimas edições do CONEEAGRI e a edição especial do I ENPEAG.</h2>
            <p><strong>Leia Mais</strong><br />GreenFields AgroCo, a sprawling commercial farm nestled in the heart of the Midwest, embarked on a transformative journey to overcome complex challenges and enhance its agricultural operations. With hundreds of acres under cultivation and a diverse range of crops, the farm sought a strategic partner to optimize crop management, boost efficiency, and embrace sustainable practices.</p>
          </div>
          <div className="congressos-images">
            <div className="main-image">
              <img src={Imagem5} alt="Main Field" />
            </div>
            <div className="side-images">
              <img src={Imagem6} alt="Irrigation System" />
              <img src={Imagem7} alt="Crop Management" />
            </div>
          </div>
          <div className="congressos-footer">
            <span>Year: 2023</span>
            <span>Category: Organic Farming</span>
          </div>
        </div>

        <div className="parceiros-section">
          <div className="parceiros-content">
            <div className="parceiros-texto">
              <h2>Nossos Parceiros</h2>
              <p>Contamos com o apoio de diversas instituições e empresas que acreditam na nossa missão de promover a engenharia agrícola e ambiental.</p>
            </div>
            <div className="parceiros-imagem">
              <img src={abeag} alt="Parceiros" />
              <img src={crea} alt="Parceiros" />
            </div>
          </div>
        </div>

        <div className="contato-section">
          <h2>Entre em Contato</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam officia magni ea modi molestias sapiente maxime quia dignissimos. Sint minima nesciunt consequatur nisi inventore recusandae hic dolores, deserunt incidunt maxime.</p>
          <div className="contato-content">
            <div className="contato-form">
              <h3>Envie uma mensagem</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    
      <NewsletterComponent />
      <Footer />
    </div>
  );
}
