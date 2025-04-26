import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramButton = () => {
  return (
    <a 
      href="https://www.instagram.com/seuinstagram/" 
      className="instagram-button"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaInstagram className="instagram-icon" />

      <style jsx>{`
        .instagram-button {
          position: fixed;
          bottom: 5.8125rem; /* <-- Aqui foi o ajuste: +5px */
          right: 2rem;
          background: #f09433; 
          background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
          background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
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

        .instagram-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .instagram-button {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            bottom: 5.3125rem; /* <-- Também ajustado 5px a mais no mobile */
            right: 1.5rem;
          }
        }
      `}</style>
    </a>
  );
};

export default InstagramButton;
