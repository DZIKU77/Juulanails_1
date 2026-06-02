import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ContactForm from './ContactForm.jsx';
import Gallery from "./Gallery.jsx";
import Offer from "./Offer.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <>
      <Navbar setCurrentScreen={setCurrentScreen} />
      <main className="pt-24">
          <Hero />
          <Gallery />
          <Offer />
      </main>
      <footer>
        <Footer />
      </footer>
      {currentScreen === 'contact' && <ContactForm />}
    </>
  )
}

export default App
