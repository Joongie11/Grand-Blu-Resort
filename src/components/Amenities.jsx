import React from 'react';
import spaImage from '../assets/images/spa.jpg';
import poolImage from '../assets/images/pool.jpg';
import yogaImage from '../assets/images/yoga.jpg';

function Amenities() {
  return (
    <section className="amenities">
      <div className="container">
        <h2>Unforgettable Experiences</h2>
        <div className="amenities-grid">
          <div className="amenity">
          <img src={spaImage} alt="Spa" />
            <h3>Spa & Wellness</h3>
            <p>Rejuvenate at our world-class spa with ocean-view massage rooms and holistic therapies.</p>
          </div>
          <div className="amenity">
          <img src={poolImage} alt="Infinity Pool" />
            <h3>Infinity Pools</h3>
            <p>Swim above the horizon in our heated infinity pools overlooking the endless sea.</p>
          </div>
          <div className="amenity">
          <img src={yogaImage} alt="Activities" />
            <h3>Daily Activities</h3>
            <p>Enjoy daily yoga, diving excursions, and curated tours of the coast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
