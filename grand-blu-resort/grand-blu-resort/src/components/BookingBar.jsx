// BookingBar.jsx
import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

function BookingBar() {
  const [dateRange, setDateRange] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const togglePopup = () => setPopupVisible(!popupVisible);

  const adjustCount = (type, action) => {
    if (type === 'adults') {
      setAdults(prev => Math.max(1, prev + (action === 'increase' ? 1 : -1)));
    } else if (type === 'children') {
      setChildren(prev => Math.max(0, prev + (action === 'increase' ? 1 : -1)));
    } else if (type === 'rooms') {
      setRooms(prev => Math.max(1, prev + (action === 'increase' ? 1 : -1)));
    }
  };

  return (
    <section className="booking-section">
      <div className="container booking-bar">
        <div className="input-group">
          <label htmlFor="date-range">Dates</label>
          <Flatpickr
            id="date-range"
            value={dateRange}
            options={{ mode: 'range', dateFormat: 'Y-m-d' }}
            onChange={setDateRange}
            placeholder="Check-in — Check-out"
          />
        </div>

        <div className="input-group guest-selector">
          <label>Guests & Rooms</label>
          <div className="guest-display" onClick={togglePopup}>
            {`${adults} Adults, ${children} Children, ${rooms} Room${rooms > 1 ? 's' : ''}`}
          </div>


          <div className={`guest-popup ${popupVisible ? 'visible' : ''}`}>
              {['adults', 'children', 'rooms'].map(type => (
                <div className="guest-row" key={type}>
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                  <div className="counter">
                    <button
                      className="counter-btn"
                      onClick={() => adjustCount(type, 'decrease')}
                    >
                      −
                    </button>
                    <span>
                      {type === 'adults' ? adults : type === 'children' ? children : rooms}
                    </span>
                    <button
                      className="counter-btn"
                      onClick={() => adjustCount(type, 'increase')}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <button className="btn">BOOK NOW</button>
      </div>
    </section>
  );
}

export default BookingBar;
