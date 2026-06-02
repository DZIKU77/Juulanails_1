import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ContactForm from './ContactForm.jsx';
import Gallery from "./Gallery.jsx";
import Offer from "./Offer.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. GŁÓWNA STRONA (Wszystko oprócz formularza kontaktowego) */}
        <Route 
          path="/main" 
          element={
            <>
              <Navbar />
              <main className="pt-24">
                <Hero />
                <Gallery />
                <Offer />
              </main>
              <Footer />
            </>
          } 
        />

        {/* 2. OSOBNA KARTA DLA FORMULARZA */}
        {/* Gdy w Navbarze klikniesz link z href="/kontakt", Chrome otworzy nową kartę i załaduje TYLKO to, co jest poniżej */}
        <Route 
          path="/kontakt" 
          element={
            <div className="min-h-screen bg-gray-50 p-10 flex items-center justify-center">
              <ContactForm />
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;