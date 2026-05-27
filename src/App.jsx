import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ContactForm from './ContactForm.jsx';
import Gallery from "./Gallery.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <>
      <Navbar setCurrentScreen={setCurrentScreen} />
      <main className="pt-24">
          <Hero />
          <Gallery />
      </main>
      {currentScreen === 'contact' && <ContactForm />}
    </>
  )
}

export default App
