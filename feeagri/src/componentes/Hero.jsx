import React from 'react';
import Slider from 'react-slick';
import '../styles/Hero.scss';

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
          <img src="https://via.placeholder.com/1200x500?text=Imagem+1" alt="Imagem 1" />
          <div className="Hero__content">
            <h1>Bem-vindo ao Hero Section</h1>
            <p>Descrição sobre o que é mostrado na imagem</p>
          </div>
        </div>
        <div className="Hero__item">
          <img src="https://via.placeholder.com/1200x500?text=Imagem+2" alt="Imagem 2" />
          <div className="Hero__content">
            <h1>Outra Imagem</h1>
            <p>Informações sobre a segunda imagem</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
