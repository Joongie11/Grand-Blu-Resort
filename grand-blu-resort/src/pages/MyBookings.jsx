import React, { useEffect, useState } from "react";
import "../css/my-bookings.css";
import roomsData from "../data/rooms";
import useTranslation from "../i18n/useTranslation";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const handleDelete = (index) => {
    const confirmed = window.confirm(t("myBookings.confirmCancel"));
    if (!confirmed) return;

    const updated = [...bookings];
    updated.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <div className="container my-bookings-page">
      <h2 className="bookings-title">{t("myBookings.title")}</h2>
      {bookings.length > 0 ? (
        <div className="bookings-grid">
          {bookings.map((booking, index) => {
            const roomImage =
              roomsData.find((r) => r.id === booking.roomId)?.image || "";

            return (
              <div className="booking-card-modern" key={index}>
                <div className="booking-content">
                  <div className="booking-text">
                    <h3>{booking.roomName}</h3>
                    <p>
                      📅 {booking.check_in} → {booking.check_out}
                    </p>
                    <p>
                      🧍‍♂️ {booking.adults} {t("myBookings.adults")}, 👶{" "}
                      {booking.children} {t("myBookings.children")}
                    </p>
                    <p>📧 {booking.email}</p>
                    <p>🙍 {booking.name}</p>
                    <div className="booking-buttons">
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        {t("myBookings.cancelBtn")}
                      </button>
                    </div>
                  </div>
                  <div className="booking-image">
                    {roomImage && (
                      <img src={roomImage} alt={booking.roomName} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-bookings">{t("myBookings.noBookings")}</p>
      )}
    </div>
  );
}

export default MyBookings;
