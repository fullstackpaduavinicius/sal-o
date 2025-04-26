import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Belle Époque</h3>
          <p>O salão de beleza mais sofisticado da cidade, onde cada cliente é tratado como única.</p>
          <p>CNPJ: XX.XXX.XXX/0001-XX</p>
        </div>
        
        <div className="footer-contact">
          <h4>Contato</h4>
          <ul>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Rua das Belezas, 123 - Centro</span>
            </li>
            <li>
              <FaPhone className="footer-icon" />
              <span>(XX) XXXX-XXXX</span>
            </li>
            <li>
              <FaWhatsapp className="footer-icon" />
              <span>(XX) XXXXX-XXXX</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <span>contato@bellepoque.com</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-hours">
          <h4>Horário de Funcionamento</h4>
          <ul>
            <li>
              <FaClock className="footer-icon" />
              <span>Segunda a Sexta: 9h às 20h</span>
            </li>
            <li>
              <FaClock className="footer-icon" />
              <span>Sábado: 9h às 18h</span>
            </li>
            <li>
              <FaClock className="footer-icon" />
              <span>Domingo: Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Belle Époque. Todos os direitos reservados.</p>
      </div>

      <style jsx>{`
        .footer {
          background: #3a3226;
          color: #f8f4ee;
          padding: 4rem 0 0;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
        }
        
        .footer-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #d4af8f;
          margin-bottom: 1rem;
        }
        
        .footer-info p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .footer-contact h4, .footer-hours h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          color: #d4af8f;
          margin-bottom: 1.5rem;
        }
        
        .footer-contact ul, .footer-hours ul {
          list-style: none;
        }
        
        .footer-contact li, .footer-hours li {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        
        .footer-icon {
          margin-right: 0.8rem;
          color: #8a6d4b;
          font-size: 1.2rem;
        }
        
        .footer-bottom {
          text-align: center;
          padding: 1.5rem 0;
          margin-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;