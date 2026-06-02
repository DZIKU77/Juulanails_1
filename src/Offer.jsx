import hero1 from "./assets/hero1.png";

function Offer() {
    return (
        <section id="offer" className="py-20 flex flex-col text-serif">
            <h2 className="text-7xl font-serif uppercase mb-8 text-center">Oferta</h2>
            <img src={hero1} alt="Offer" className="absolute top-500 right-0 object-cover -z-50"/>
            <div className="flex gap-10 items-center mt-15 justify-center">
                <ul className="list-none text-lg text-gray-700 pt-8">
                    <li className="mb-14 text-3xl">30 min</li>
                    <li className="mb-14 text-3xl">40 min</li>
                    <li className="mb-14 text-3xl">50 min</li>
                    <li className="mb-14 text-3xl">60 min</li>
                    <li className="mb-14 text-3xl">70 min</li>
                    <li className="mb-14 text-3xl">80 min</li>
                </ul>
                <div className="w-1 h-100 bg-pink-500 rounded"/>
                <ul className="list-none text-lg text-gray-700">
                    <li className="mb-10 text-5xl">Manicure klasyczny</li>
                    <li className="mb-10 text-5xl">Manicure hybrydowy</li>
                    <li className="mb-10 text-5xl">Manicure kombinowany (pod skórki)</li>
                    <li className="mb-10 text-5xl">Przedłużanie paznokci (żel / akrylożel)</li>
                    <li className="mb-10 text-5xl">Uzupełnienie żelowe</li>
                    <li className="mb-10 text-5xl">Manicure japoński</li>
                </ul>
                <div className="w-1 h-100 bg-pink-500 rounded"/>
                <ul className="list-none text-lg text-gray-700 pt-8">
                    <li className="mb-14 text-3xl">50 PLN</li>
                    <li className="mb-14 text-3xl">80 PLN</li>
                    <li className="mb-14 text-3xl">80 PLN</li>
                    <li className="mb-14 text-3xl">120 PLN</li>
                    <li className="mb-14 text-3xl">60 PLN</li>
                    <li className="mb-14 text-3xl">100 PLN</li>
                </ul>                
            </div>
        </section>
    );
}

export default Offer;