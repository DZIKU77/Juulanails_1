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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
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
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit">Send</button>
    </form>
    )
}

export default ContactForm