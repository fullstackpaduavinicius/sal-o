import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Cabelo",
      items: ["Cortes premium", "Coloração profissional", "Tratamentos capilares", "Escovas", "Penteados"],
      icon: "✂️"
    },
    {
      title: "Estética Facial",
      items: ["Limpeza de pele", "Peeling", "Drenagem linfática", "Massagem facial", "Tratamentos anti-idade"],
      icon: "💆‍♀️"
    },
    {
      title: "Estética Corporal",
      items: ["Massagem relaxante", "Drenagem linfática", "Tratamentos redutores", "Depilação a laser", "Banho de lua"],
      icon: "🧖‍♀️"
    },
    {
      title: "Manicure & Pedicure",
      items: ["Esmaltação em gel", "Alongamento de unhas", "SPA das mãos", "Pedicure completa", "Podologia"],
      icon: "💅"
    },
    {
      title: "Maquiagem",
      items: ["Maquiagem social", "Maquiagem artística", "Maquiagem para noivas", "Curso de automaquiagem", "Design de sobrancelhas"],
      icon: "💄"
    }
  ];

  return (
    <section id="services" className="services" data-aos="fade-up">
      <h2 className="section-title">Nossos Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services {
          padding: 6rem 2rem;
          background: #f8f4ee;
        }
        
        .section-title {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #3a3226;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: #8a6d4b;
        }
        
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }
        
        .service-card {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .service-card h3 {
          font-family: 'Playfair Display', serif;
          color: #8a6d4b;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        
        .service-card ul {
          list-style: none;
          text-align: left;
        }
        
        .service-card ul li {
          margin-bottom: 0.8rem;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .service-card ul li::before {
          content: '•';
          color: #8a6d4b;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: -3px;
        }
        
        @media (max-width: 768px) {
          .services {
            padding: 4rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .services-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;