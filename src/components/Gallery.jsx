import React from 'react';
import { FiZoomIn } from 'react-icons/fi';

const Gallery = () => {
  const galleryItems = [
    { id: 1, category: "Cabelo", alt: "Corte e coloração" },
    { id: 2, category: "Maquiagem", alt: "Maquiagem para noiva" },
    { id: 3, category: "Estética", alt: "Tratamento facial" },
    { id: 4, category: "Manicure", alt: "Alongamento de unhas" },
    { id: 5, category: "Cabelo", alt: "Penteado especial" },
    { id: 6, category: "Maquiagem", alt: "Maquiagem social" },
    { id: 7, category: "Estética", alt: "Massagem relaxante" },
    { id: 8, category: "Manicure", alt: "Esmaltação em gel" }
  ];

  return (
    <section id="gallery" className="gallery" data-aos="fade-up">
      <h2 className="section-title">Nossos Trabalhos</h2>
      <div className="gallery-container">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item" data-category={item.category}>
            <img 
              src={`/images/gallery${item.id}.jpg`} 
              alt={item.alt}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <FiZoomIn className="zoom-icon" />
              <p>{item.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery {
          padding: 6rem 2rem;
          background: white;
        }
        
        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          padding: 0 1rem;
        }
        
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          height: 250px;
          cursor: pointer;
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(138, 109, 75, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }
        
        .zoom-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .gallery-overlay p {
          font-size: 1.1rem;
          text-align: center;
          padding: 0 1rem;
        }
        
        @media (max-width: 768px) {
          .gallery {
            padding: 4rem 1rem;
          }
          
          .gallery-container {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
          
          .gallery-item {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;