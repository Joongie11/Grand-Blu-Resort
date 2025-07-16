import React from 'react';

function ContactPage() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
