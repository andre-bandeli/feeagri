import React from 'react';
import Slider from 'react-slick';
import '../styles/Hero.scss';

import Hero1 from '../assets/6.jpg'
import Hero2 from '../assets/5.jpg'
import Hero3 from '../assets/5.jpg'

export default function Hero() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="Hero">
      <Slider {...settings}>
        <div className="Hero__item">
          <img src={Hero1} alt="Imagem 1" />
          <div className="Hero__content">
            <h1>Bem-vindo ao Hero Section</h1>
            <p>Descrição sobre o que é mostrado na imagem</p>
          </div>
        </div>
        <div className="Hero__item">
          <img src={Hero2} alt="Imagem 2" />
          <div className="Hero__content">
            <h1>Outra Imagem</h1>
            <p>Informações sobre a segunda imagem</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
