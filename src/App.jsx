import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ContactForm from './ContactForm.jsx';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <>
      <Navbar setCurrentScreen={setCurrentScreen} />
      <main className="pt-24">
        {currentScreen === 'home' && <Hero />}
        {currentScreen === 'gallery' && (
          <section className="min-h-screen flex items-center justify-center text-center">
            <div>
              <h2 className="text-4xl font-bold uppercase">Galeria</h2>
              <p className="mt-4 text-gray-700">Tutaj dodaj swoje zdjęcia lub ofertę galerii.</p>
            </div>
          </section>
        )}
        {currentScreen === 'offer' && (
          <section className="min-h-screen flex items-center justify-center text-center">
            <div>
              <h2 className="text-4xl font-bold uppercase">Oferta</h2>
              <p className="mt-4 text-gray-700">Tutaj dodaj szczegóły usług i cennik.</p>
            </div>
          </section>
        )}
        {currentScreen === 'contact' && <ContactForm />}
      </main>
    </>
  )
}

export default App
