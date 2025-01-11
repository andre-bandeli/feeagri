import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import '../styles/Hero.scss';

import Hero1 from '../assets/6.jpg';
import Hero2 from '../assets/5.jpg';
import Hero3 from '../assets/9.jpg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="Hero">
      <Slider {...settings}>
        <div className="Hero__item">
            <img src={Hero1} alt="Slide 1 Placeholder" />

          <div className="Hero__content">
            <h1>Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas</h1>
            <p>Somos uma organização estudantil que promove a união, a representação e o fortalecimento dos estudantes dessas áreas em todo o Brasil.</p>
          </div>
        </div>

        <div className="Hero__item">
          <img src={Hero2} alt="Imagem 2" />
          <div className="Hero__content">
            <h1>O Futuro da Engenharia Agrícola!</h1>
            <p>Juntos, impulsionamos a inovação no campo e promovemos a sustentabilidade! Conheça mais sobre a FEEAGRI e nosso impacto.</p>
          </div>
        </div>

        <div className="Hero__item">
          <img src={Hero3} alt="Imagem 3" />
          <div className="Hero__content">
          <h1>Participe do XXXVII CONEEAGRI e do I ENPEAG — de 22 a 26 de outubro na UFPel - Universidade Federal de Pelotas!</h1>
          <p>Inscreva-se e conecte-se com futuros engenheiros de todo o Brasil.</p>
    
          </div>
        </div>
      </Slider>
    </div>
  );
}
