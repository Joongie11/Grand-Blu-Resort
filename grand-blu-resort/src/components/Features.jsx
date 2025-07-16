import React from 'react';

function Features() {
  return (
    <section className="features-section">
      <div className="feature-block">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(/assets/images/beach.png)` }}
        ></div>
        <div className="feature-text">
          <h3>Prime Location</h3>
          <p>Enjoy direct access to pristine beaches and panoramic sea views right from your suite.</p>
        </div>
      </div>

      <div className="feature-block reverse">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(/assets/images/service.png)` }}
        ></div>
        <div className="feature-text">
          <h3>World-Class Service</h3>
          <p>From personal butlers to curated experiences, every stay is tailored to you.</p>
        </div>
      </div>

      <div className="feature-block">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(/assets/images/dining.png)` }}
        ></div>
        <div className="feature-text">
          <h3>Gourmet Dining</h3>
          <p>Indulge in signature Mediterranean cuisine crafted by our renowned chefs.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
