import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/SEUNUMERO?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20no%20salão!" 
      className="whatsapp-button"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />

      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .whatsapp-button:hover {
          background: #128C7E;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
