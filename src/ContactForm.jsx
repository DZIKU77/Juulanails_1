import instagram from "./assets/instagram.png";
import maps from "./assets/map.png";
import phone from "./assets/phone.png";
import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Wiadomość wysłana");
        setFormData({name: '', surname: '', phone: '', message: ''})
    }

    return(
      <section className="flex flex-row items-space-around gap-120">
        <a href="/main" className="absolute top-0 text-center left-45/100 text-pink-500 hover:text-pink-600">Wróc do strony głównej</a>
        <div>
          <h1 className="flex items-center gap-2 text-5xl mb-10"> <img src={instagram} alt="Instagram" className="w-16 h-16" /> @juulanails</h1>
          <h1 className="flex items-center gap-2 text-5xl mb-10"> <img src={phone} alt="Phone" className="w-16 h-16" /> +48 XXX XXX XXX</h1>
          <h1 className="flex items-center gap-2 text-4xl mb-10"> <img src={maps} alt="Maps" className="w-16 h-16" /> Nowy Dzików 100a</h1>
          <iframe 
          title="Google Maps - Juula Nails"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.3155111205247!2d22.985454876950868!3d50.23001030321102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ca87c98b52603%3A0xf9d456d90910f4be!2sNowy%20Dzik%C3%B3w%20100%2C%2037-632%20Nowy%20Dzik%C3%B3w!5e0!3m2!1spl!2spl!4v1780422330283!5m2!1spl!2spl" 
          className="w-150 h-96 rounded-lg shadow-md border-1 border-pink-500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-1/2 bg-gradient-to-br from-pink-300 to-purple-100 p-10 rounded-lg shadow-md w-150 h-140 mt-10">
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full p-2 border border-white bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
            />
          </div>

          <div>
            <label htmlFor="surname">Surname:</label>
            <input 
              type="text" 
              id="surname" 
              name="surname" 
              value={formData.surname} 
              onChange={handleChange} 
              className="w-full p-2 border border-white bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full p-2 border border-white bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-2 border border-white bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button type="submit" className="bg-pink-500 hover:bg-pink-600 cursor-pointer text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
            Send
          </button>
          <button type="reset" className="border-1 border-pink-500 bg-white text-pink-500 hover:bg-gray-200 cursor-pointer font-bold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
            Reset
          </button>
        </form>
      </section>
    )
}

export default ContactForm