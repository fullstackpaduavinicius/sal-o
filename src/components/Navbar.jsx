import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Belle Époque</h1>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="services" 
              smooth={true} 
              duration={500} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link 
              to="gallery" 
              smooth={true} 
              duration={500} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Orçamento
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }
        
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #8a6d4b;
          font-weight: 700;
          margin: 0;
        }
        
        .nav-menu {
          display: flex;
          list-style: none;
        }
        
        .nav-link {
          color: #3a3226;
          text-decoration: none;
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #8a6d4b;
        }
        
        .menu-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #3a3226;
        }
        
        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }
          
          .nav-menu {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: #fff;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            transition: all 0.5s ease;
          }
          
          .nav-menu.active {
            left: 0;
          }
          
          .nav-link {
            margin: 1rem 0;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;