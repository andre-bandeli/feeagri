import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import '../styles/Hero.scss';
import { Link } from 'react-router-dom';

import Hero1 from '../assets/6.jpg';
import Hero2 from '../assets/5.jpg';
import Hero3 from '../assets/9.jpg';

export default function Hero() {

  const slides = [
    {
      image: Hero1,
      title: 'Federação Brasileira dos Estudantes de Engenharia Agrícola',
      description: 'Somos uma organização estudantil que promove a união e o fortalecimento dos estudantes dessas áreas.',
      slug: 'federacao-brasileira',
    },
    {
      image: Hero2,
      title: 'O Futuro da Engenharia Agrícola!',
      description: 'Juntos, impulsionamos a inovação no campo e promovemos a sustentabilidade!',
      slug: 'futuro-engenharia-agricola',
    },
    {
      image: Hero3,
      title: 'XXXVII CONEEAGRI e I ENPEAG',
      description: 'Participe do evento e conecte-se com futuros engenheiros de todo o Brasil.',
      slug: 'coneeagri-enpeag',
    },
  ];


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
      <Slider>
        {slides.map((slide, index) => (
          <div key={index} className="Hero__item">
            <img src={slide.image} alt={slide.title} />
            <div className="Hero__content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link to={`/${slide.slug}`} className="Hero__button">Saiba mais</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}