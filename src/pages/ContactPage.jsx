// src/pages/ContactPage.jsx
import React from 'react';
import '../css/contact.css'; 

function ContactPage() {
  return (
    <main className="contact-page container">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-wrapper">
        <section className="contact-info">
          <h2>Our Information</h2>
          <p><strong>Address:</strong> 123 Ocean Drive, Paradise Island</p>
          <p><strong>Email:</strong> info@grandbluresort.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </section>

        <section className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </section>
      </div>

      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019566037224!2d-122.41941538468122!3d37.774929779759364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f5b2abf%3A0x3b79bca3e13bb6fd!2sOcean%20Beach!5e0!3m2!1sen!2sus!4v1689467483748!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}

export default ContactPage;
