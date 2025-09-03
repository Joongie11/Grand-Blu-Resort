import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import translations from "../i18n/translations";

function BookingBar() {
  const [dateRange, setDateRange] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const navigate = useNavigate();
  const popupRef = useRef(null);

  const language = localStorage.getItem("language") || "en";
  const t = translations[language];

  const maxGuests = 10;
  const maxRooms = 5;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const adjustCount = (type, action) => {
    if (type === "adults") {
      setAdults((prev) => {
        const newVal = action === "increase" ? prev + 1 : prev - 1;
        const total = newVal + children;
        return newVal >= 1 && total <= maxGuests ? newVal : prev;
      });
    } else if (type === "children") {
      setChildren((prev) => {
        const newVal = action === "increase" ? prev + 1 : prev - 1;
        const total = adults + newVal;
        return newVal >= 0 && total <= maxGuests ? newVal : prev;
      });
    } else if (type === "rooms") {
      setRooms((prev) => {
        const newVal = action === "increase" ? prev + 1 : prev - 1;
        return newVal >= 1 && newVal <= maxRooms ? newVal : prev;
      });
    }
  };

  const handleBooking = () => {
    if (!dateRange[0] || !dateRange[1]) {
      alert(t.selectDatesAlert);
      return;
    }

    const formattedCheckIn = dateRange[0].toISOString().split("T")[0];
    const formattedCheckOut = dateRange[1].toISOString().split("T")[0];

    const bookingPrefs = {
      check_in: formattedCheckIn,
      check_out: formattedCheckOut,
      adults,
      children,
      rooms,
    };

    localStorage.setItem("bookingPrefs", JSON.stringify(bookingPrefs));

    const queryParams = new URLSearchParams(bookingPrefs);
    navigate(`/rooms?${queryParams.toString()}`);
  };

  return (
    <section className="booking-section">
      <div className="container booking-bar">
        <div className="input-group">
          <label htmlFor="date-range">{t.bookingDates}</label>
          <Flatpickr
            id="date-range"
            value={dateRange}
            options={{ mode: "range", dateFormat: "Y-m-d" }}
            onChange={setDateRange}
            placeholder={t.datePlaceholder}
            className="flatpickr-input"
          />
        </div>

        <div className="input-group guest-selector">
          <label>{t.bookingGuestsRooms}</label>
          <div
            className="guest-display"
            onClick={() => setPopupVisible(!popupVisible)}
          >
            {`${adults} ${t.adults}, ${children} ${t.children}, ${rooms} ${
              rooms > 1 ? t.roomsPlural : t.room
            }`}
          </div>

          <div
            className={`guest-popup ${popupVisible ? "visible" : ""}`}
            ref={popupRef}
          >
            {["adults", "children", "rooms"].map((type) => (
              <div className="guest-row" key={type}>
                <span>{t[type]}</span>
                <div className="counter">
                  <button
                    onClick={() => adjustCount(type, "decrease")}
                    className="counter-btn"
                  >
                    −
                  </button>
                  <span>
                    {type === "adults"
                      ? adults
                      : type === "children"
                      ? children
                      : rooms}
                  </span>
                  <button
                    onClick={() => adjustCount(type, "increase")}
                    className="counter-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn" onClick={handleBooking}>
          {t.bookNow}
        </button>
      </div>
    </section>
  );
}

export default BookingBar;
