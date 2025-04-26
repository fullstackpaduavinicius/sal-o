import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mariana Almeida",
      role: "Cliente VIP",
      content: "O salão Belle Époque transformou minha autoestima! Os profissionais são extremamente qualificados e o atendimento é impecável. Não vou a outro lugar!",
      rating: 5
    },
    {
      id: 2,
      name: "Camila Fernandes",
      role: "Noiva",
      content: "Fui noiva e escolhi o Belle Époque para cuidar de tudo no meu grande dia. Foi a melhor decisão! Minha maquiagem durou o dia todo e meu penteado estava divino!",
      rating: 5
    },
    {
      id: 3,
      name: "Isabela Santos",
      role: "Executiva",
      content: "Como executiva, preciso estar sempre impecável. No Belle Époque encontro a combinação perfeita de qualidade, sofisticação e eficiência que preciso.",
      rating: 5
    },
    {
      id: 4,
      name: "Rafaela Costa",
      role: "Influencer",
      content: "Já frequentei muitos salões, mas o Belle Époque superou todas minhas expectativas. O ambiente luxuoso me faz sentir uma verdadeira celebridade!",
      rating: 5
    },
    {
      id: 5,
      name: "Beatriz Oliveira",
      role: "Cliente há 5 anos",
      content: "Há 5 anos sou cliente fiel e cada visita é uma experiência única. A equipe conhece meus gostos e sempre supera minhas expectativas. Recomendo de olhos fechados!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h2 className="section-title">Depoimentos</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimonials {
          padding: 6rem 2rem;
          background: #f8f4ee;
        }
        
        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }
        
        .testimonial-card {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial-rating {
          color: #ffc107;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        
        .testimonial-content {
          font-style: italic;
          margin-bottom: 1.5rem;
          color: #555;
          line-height: 1.6;
        }
        
        .testimonial-author h4 {
          font-family: 'Playfair Display', serif;
          color: #8a6d4b;
          margin-bottom: 0.3rem;
        }
        
        .testimonial-author p {
          color: #777;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .testimonials {
            padding: 4rem 1rem;
          }
          
          .testimonials-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;