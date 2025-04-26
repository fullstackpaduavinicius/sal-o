import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    arrows: true
  };

  const slides = [
    { 
      id: 1, 
      alt: "Salão de beleza luxuoso",
      title: "Excelência em Beleza",
      subtitle: "O salão mais sofisticado da cidade"
    },
    { 
      id: 2, 
      alt: "Cadeiras de atendimento",
      title: "Ambiente Premium",
      subtitle: "Conforto e elegância para você"
    },
    { 
      id: 3, 
      alt: "Ambiente relaxante",
      title: "Experiência Única",
      subtitle: "Cuidados que transformam"
    }
  ];

  return (
    <section className="carousel">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img 
              src={`/images/slide${slide.id}.jpg`} 
              alt={slide.alt}
              className="carousel-image"
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <a href="#contact" className="carousel-btn">Agendar Horário</a>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .carousel {
          width: 100%;
          margin-top: 80px;
          position: relative;
        }
        
        .carousel-slide {
          position: relative;
          height: 90vh;
          max-height: 800px;
        }
        
        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .carousel-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
        
        .carousel-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          width: 100%;
          padding: 0 2rem;
        }
        
        .carousel-caption h2 {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .carousel-caption p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .carousel-btn {
          background: #8a6d4b;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .carousel-btn:hover {
          background: #6d563a;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .carousel-slide {
            height: 70vh;
          }
          
          .carousel-caption h2 {
            font-size: 2.5rem;
          }
          
          .carousel-caption p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Carousel;