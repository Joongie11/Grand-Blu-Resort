import React from 'react';

function Amenities() {
  return (
    <section className="amenities">
      <div className="container">
        <h2>Unforgettable Experiences</h2>
        <div className="amenities-grid">
          <div className="amenity">
            <img src="/assets/images/spa.jpg" alt="Spa" />
            <h3>Spa & Wellness</h3>
            <p>Rejuvenate at our world-class spa with ocean-view massage rooms and holistic therapies.</p>
          </div>
          <div className="amenity">
            <img src="/assets/images/pool.jpg" alt="Infinity Pool" />
            <h3>Infinity Pools</h3>
            <p>Swim above the horizon in our heated infinity pools overlooking the endless sea.</p>
          </div>
          <div className="amenity">
            <img src="/assets/images/yoga.jpg" alt="Activities" />
            <h3>Daily Activities</h3>
            <p>Enjoy daily yoga, diving excursions, and curated tours of the coast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
