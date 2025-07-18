import React from 'react';

function CTABooking() {
  return (
    <section className="cta-booking">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>Book Your Dream Escape</h2>
          <p>Let the sea set you free — reserve your stay now and embrace coastal elegance.</p>
          <a href="/rooms" className="btn btn-outline-light">View Rooms</a>
        </div>
      </div>
    </section>
  );
}

export default CTABooking;