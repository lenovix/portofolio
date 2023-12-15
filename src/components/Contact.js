// src/components/Contact.js

import React, { useState } from 'react';
import { submitToGoogleSheet } from '../api'; // Sesuaikan dengan lokasi file api.js
import '../App.css'; // Sesuaikan dengan lokasi file CSS jika digunakan

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Panggil fungsi submitToGoogleSheet dengan data formulir
    submitToGoogleSheet({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    // Reset formulir setelah pengiriman
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact">
      <h2>Hubungi Saya</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Pesan:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
  );
};

export default Contact;
