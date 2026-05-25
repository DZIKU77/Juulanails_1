function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white/10 backdrop-blur-md p-5 border-b border-white/20">
      {/* Lewa strona - Logo / Nazwa strony */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-pink-400"></div> {/* Różowe kółko jako placeholder logo */}
        <span className="text-black font-bold tracking-wider uppercase text-sm">Juula Nails</span>
      </div>

      {/* Prawa strona - Linki nawigacyjne */}
      <div className="flex gap-6">
        <a href="#" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors">
          Home
        </a>
        <a href="#" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors">
          Gallery
        </a>
        <a href="#" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors">
          Offer
        </a>
        <a href="#" className="uppercase text-xs font-semibold text-black hover:text-pink-500 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar