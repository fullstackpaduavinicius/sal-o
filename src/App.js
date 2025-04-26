import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
}

export default App;