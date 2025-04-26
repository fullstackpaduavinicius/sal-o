import React, { useState } from 'react';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.service) newErrors.service = 'Serviço é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const { name, phone, email, service, date, message } = formData;
    return `Olá, gostaria de solicitar um orçamento no Belle Époque!

*Nome:* ${name}
*Telefone:* ${phone}
*E-mail:* ${email}
*Serviço desejado:* ${service}
*Data preferencial:* ${date || 'Não especificada'}
*Mensagem:* ${message || 'Nenhuma mensagem adicional'}

Por favor, envie os valores e disponibilidade. Obrigada!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const message = encodeURIComponent(generateWhatsAppMessage());
      window.open(`https://wa.me/SEUNUMERO?text=${message}`, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2 className="section-title">Solicite Seu Orçamento</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className={`form-group ${errors.phone ? 'error' : ''}`}>
          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp (com DDD)"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        
        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className={`form-group ${errors.service ? 'error' : ''}`}>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Selecione um serviço</option>
            <option value="Cabelo">Cabelo</option>
            <option value="Estética Facial">Estética Facial</option>
            <option value="Estética Corporal">Estética Corporal</option>
            <option value="Manicure & Pedicure">Manicure & Pedicure</option>
            <option value="Maquiagem">Maquiagem</option>
          </select>
          {errors.service && <span className="error-message">{errors.service}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Detalhes adicionais sobre o que você precisa"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn" disabled={submitted}>
          {submitted ? (
            <>
              <FaCheck /> Enviado com Sucesso!
            </>
          ) : (
            <>
              <FaWhatsapp /> Solicitar Orçamento via WhatsApp
            </>
          )}
        </button>
      </form>

      <style jsx>{`
        .contact {
          padding: 6rem 2rem;
          background: white;
        }
        
        .contact-form {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1rem;
        }
        
        .form-group.error input,
        .form-group.error select,
        .form-group.error textarea {
          border-color: #e74c3c;
        }
        
        .error-message {
          color: #e74c3c;
          font-size: 0.8rem;
          margin-top: 0.3rem;
          display: block;
        }
        
        input, select, textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #8a6d4b;
          box-shadow: 0 0 0 2px rgba(138, 109, 75, 0.2);
        }
        
        textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-btn {
          grid-column: 1 / -1;
          background: #25D366;
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover:not(:disabled) {
          background: #128C7E;
        }
        
        .submit-btn:disabled {
          background: #4CAF50;
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 4rem 1rem;
          }
          
          .contact-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;