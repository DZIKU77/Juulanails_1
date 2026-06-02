function Footer() {
    return (
        <footer className="bg-[#0d0d13] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold uppercase tracking-[0.2em]">Juula Nails</h2>
                    <p className="text-sm text-gray-300 leading-7">
                        Profesjonalne stylizacje paznokci, manicure i pielęgnacja dłoni. Twój salon piękna w centrum miasta.
                    </p>
                    <div className="space-y-2 text-gray-400 text-sm">
                        <p>Tel: <a href="tel:+48123456789" className="text-pink-300 hover:text-pink-200">+48 123 456 789</a></p>
                        <p>Email: <a href="mailto:kontakt@juulanails.pl" className="text-pink-300 hover:text-pink-200">kontakt@juulanails.pl</a></p>
                        <p>Adres: ul. Przykładowa 12, 00-001 Warszawa</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold uppercase tracking-[0.15em] text-gray-100">Godziny otwarcia</h3>
                    <div className="text-sm text-gray-300 leading-7">
                        <p>Poniedziałek – Piątek: 09:00 – 19:00</p>
                        <p>Sobota: 09:00 – 16:00</p>
                        <p>Niedziela: Zamknięte</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold uppercase tracking-[0.15em] text-gray-100">Szybkie linki</h3>
                    <div className="flex flex-col gap-2 text-sm text-gray-300">
                        <a href="#home" className="hover:text-pink-300">Home</a>
                        <a href="#gallery" className="hover:text-pink-300">Galeria</a>
                        <a href="#offer" className="hover:text-pink-300">Oferta</a>
                        <a href="#contact" className="hover:text-pink-300">Kontakt</a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold uppercase tracking-[0.15em] text-gray-100">Pozostałe informacje</h3>
                    <p className="text-sm text-gray-300 leading-7">
                        Rezerwacje przyjmujemy telefonicznie oraz mailowo. Prosimy o wcześniejszy kontakt w celu potwierdzenia terminu.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-pink-300">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-200">Instagram</a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-pink-200">Facebook</a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-500">
                    <p>&copy; 2026 Juula Nails. Wszystkie prawa zastrzeżone.</p>
                    <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by edt.im - Flaticon</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;