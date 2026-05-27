import { useState } from "react";
import gallery1 from "./assets/hero3.png";

function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);

    const page1Cards = Array.from({ length: 9 }, (_, i) => `Karta Strona 1 - ${i + 1}`);
    const page2Cards = Array.from({ length: 9 }, (_, i) => `Karta Strona 2 - ${i + 1}`);

    const nextPage = () => setCurrentPage(2);
    const prevPage = () => setCurrentPage(1);

    return (
        <section id="gallery" className="relative">
            <img src={gallery1} alt="" className="absolute right-2 -top-34 -z-50" />
            
            <div className="flex flex-row items-start gap-10">
                
                <div className="flex flex-col items-center">
                    
                    {currentPage === 1 && (
                        <div className="grid grid-cols-[repeat(3,25rem)] grid-rows-[repeat(3,12.5rem)] gap-x-[30px] gap-y-[30px] pl-20 pt-30">
                            {page1Cards.map((card, index) => (
                                <div key={index} className="w-100 h-50 bg-pink-600 rounded-lg flex items-center justify-center text-white font-semibold">
                                    {card}
                                </div>
                            ))}
                        </div>
                    )}

                    {currentPage === 2 && (
                        <div className="grid grid-cols-[repeat(3,25rem)] grid-rows-[repeat(3,12.5rem)] gap-x-[30px] gap-y-[30px] pl-20 pt-40">
                            {page2Cards.map((card, index) => (
                                <div key={index} className="w-100 h-50 bg-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
                                    {card}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-6 mt-8 pl-20">
                        <button 
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg border text-lg font-bold transition-all ${
                                currentPage === 1 
                                ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                                : "border-pink-600 text-pink-600 hover:bg-pink-50"
                            }`}
                        >
                            ← Poprzednia
                        </button>
                        
                        <span className="text-gray-600 font-medium">
                            Strona {currentPage} z 2
                        </span>

                        <button 
                            onClick={nextPage}
                            disabled={currentPage === 2}
                            className={`px-4 py-2 rounded-lg border text-lg font-bold transition-all ${
                                currentPage === 2 
                                ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                                : "border-pink-600 text-pink-600 hover:bg-pink-50"
                            }`}
                        >
                            Następna →
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-5 w-80 bg-white p-6 rounded-xl shadow-lg border border-gray-100 mt-30">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Filtry / Opcje</h3>
                    
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-600">Kolor</label>
                        <select className="border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                            <option value="">Wybierz kolor...</option>
                            <option value="pink">Różowy</option>
                            <option value="purple">Fioletowy</option>
                            <option value="blue">Niebieski</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-600">Styl</label>
                        <select className="border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700">
                            <option value="">Wybierz styl...</option>
                            <option value="modern">Nowoczesny</option>
                            <option value="classic">Klasyczny</option>
                            <option value="minimalist">Minimalistyczny</option>
                        </select>
                    </div>

                    <button className="mt-2 bg-pink-600 text-white py-2.5 rounded-md font-semibold hover:bg-pink-700 transition-colors shadow-sm">
                        Zastosuj
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Gallery;