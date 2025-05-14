// src/pages/Contact.js

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
    // Here you can add logic to actually send the form data to a backend or email service.
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="mb-4">Contact Us</h1>
          <p>
            We would love to hear from you! If you have any questions, feedback, or just want to say hello, feel free to reach out using the form below, or send us an email at <a href="mailto:contact@myblog.com">contact@myblog.com</a>.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
