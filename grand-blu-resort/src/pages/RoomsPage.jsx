import React from 'react';
import '../css/rooms.css';

function RoomsPage() {
  return (
    <>

      {/* Page content */}
      <main className="container">
        <h1 className="page-title">Available Rooms</h1>

        {/* 1. Guest Room */}
        <div className="room-item">
          <div className="room-image">
          <img src="/images/guest-room.jpg" />

          </div>
          <div className="room-info">
            <h2 className="room-title">Guest Room</h2>
            <p className="room-description">
              Bright and peaceful room with soft blue accents and minimalist interior, perfect for solo travelers or couples.
            </p>
            <div className="room-specs">
              <span>🛏 1 Queen Bed</span>
              <span>📐 25 m²</span>
              <span>🪟 Garden View</span>
            </div>
            <div className="room-actions">
              <a href="#" className="btn-outline">View Details</a>
              <a href="#" className="btn">Book Now</a>
            </div>
          </div>
        </div>

        {/* 2. Family Room */}
        <div className="room-item">
          <div className="room-image">
            <img src="/images/family-room.jpg" alt="Family Room" />
          </div>
          <div className="room-info">
            <h2 className="room-title">Family Room</h2>
            <p className="room-description">
              Spacious and sunlit, featuring soft textiles, a modern bath, and direct access to a private balcony.
            </p>
            <div className="room-specs">
              <span>🛏 2 Double Beds</span>
              <span>👨‍👩‍👧 Up to 4 Guests</span>
              <span>📺 Smart TV + Bathtub</span>
            </div>
            <div className="room-actions">
              <a href="#" className="btn-outline">View Details</a>
              <a href="#" className="btn">Book Now</a>
            </div>
          </div>
        </div>

        {/* 3. Sea View Suite */}
        <div className="room-item">
          <div className="room-image">
            <img src="/images/sea-view-suite.jpg" alt="Sea View Suite" />
          </div>
          <div className="room-info">
            <h2 className="room-title">Sea View Suite</h2>
            <p className="room-description">
              Wake up to a breathtaking panoramic view of the sea, with direct access to a spacious private terrace and loungers.
            </p>
            <div className="room-specs">
              <span>🛏 1 King Bed</span>
              <span>🌅 Sea View</span>
              <span>🛁 Outdoor Pool Access</span>
            </div>
            <div className="room-actions">
              <a href="#" className="btn-outline">View Details</a>
              <a href="#" className="btn">Book Now</a>
            </div>
          </div>
        </div>

        {/* 4. Premium Room with Terrace */}
        <div className="room-item">
          <div className="room-image">
            <img src="/images/premium-terrace.jpg" alt="Premium Room with Terrace" />
          </div>
          <div className="room-info">
            <h2 className="room-title">Premium Room with Terrace</h2>
            <p className="room-description">
              Elevated modern room with elegant coastal colors, floor-to-ceiling windows, and a private furnished balcony.
            </p>
            <div className="room-specs">
              <span>🛏 1 King Bed</span>
              <span>🌿 Private Balcony</span>
              <span>☕ Espresso Machine</span>
            </div>
            <div className="room-actions">
              <a href="#" className="btn-outline">View Details</a>
              <a href="#" className="btn">Book Now</a>
            </div>
          </div>
        </div>

        {/* 5. Luxury Executive Suite */}
        <div className="room-item">
          <div className="room-image">
            <img src="/images/executive-suite.jpg" alt="Luxury Executive Suite" />
          </div>
          <div className="room-info">
            <h2 className="room-title">Luxury Executive Suite</h2>
            <p className="room-description">
              Spacious open-plan suite with panoramic ocean views, stylish decor, and a work-friendly lounge corner.
            </p>
            <div className="room-specs">
              <span>🛏 King + Sofa Bed</span>
              <span>🖥 Desk & Lounge Area</span>
              <span>🌇 Oceanfront Balcony</span>
            </div>
            <div className="room-actions">
              <a href="#" className="btn-outline">View Details</a>
              <a href="#" className="btn">Book Now</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RoomsPage;
