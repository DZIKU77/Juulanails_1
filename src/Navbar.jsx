import contact from "./ContactForm"

function Navbar({ setCurrentScreen }) {
  return (
    <nav className="flex justify-between items-center bg-white/10 backdrop-blur-md p-5 border-0 w-full fixed top-0 z-50">      {/* Lewa strona - Logo / Nazwa strony */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-pink-400"></div>
        <span className="text-black font-bold tracking-wider uppercase text-sm">Juula Nails</span>
      </div>

      <div className="flex gap-6">
        <a href="#home" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors duration-300 ease-in-out">
          Home
        </a>
        <a href="#gallery" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors duration-300 ease-in-out">
          Galeria
        </a>
        <a href="#" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors duration-300 ease-in-out">
          Oferta
        </a>
        <button type="button" onClick={() => setCurrentScreen('contact')} className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors duration-300 ease-in-out">
          Kontakt
        </button>
      </div>
    </nav>
  )
}

export default Navbar