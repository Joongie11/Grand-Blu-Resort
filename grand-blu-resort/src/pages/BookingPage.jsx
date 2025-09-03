import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import roomsData from "../data/rooms";
import useTranslation from "../i18n/useTranslation";
import "../css/booking.css";

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const room = roomsData.find((r) => r.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    check_in: "",
    check_out: "",
    adults: 1,
    children: 0,
  });

  if (!room) return <h2 className="container">{t("booking.roomNotFound")}</h2>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      roomId: room.id,
      roomName: room.name,
      ...form,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    const updated = [...existing, booking];
    localStorage.setItem("bookings", JSON.stringify(updated));

    navigate("/my-bookings");
  };

  return (
    <main className="container booking-page">
      <h1>
        {t("booking.title")} {room.name}
      </h1>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="booking-row">
          <label>
            📅 {t("booking.checkIn")}:
            <input
              type="date"
              name="check_in"
              value={form.check_in}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            📅 {t("booking.checkOut")}:
            <input
              type="date"
              name="check_out"
              value={form.check_out}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="booking-row">
          <label>
            🧍 {t("booking.adults")}:
            <input
              type="number"
              name="adults"
              min="1"
              value={form.adults}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            👶 {t("booking.children")}:
            <input
              type="number"
              name="children"
              min="0"
              value={form.children}
              onChange={handleChange}
            />
          </label>
        </div>

        <input
          type="text"
          name="name"
          placeholder={t("booking.namePlaceholder")}
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder={t("booking.emailPlaceholder")}
          value={form.email}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          {t("booking.confirmBtn")}
        </button>
      </form>
    </main>
  );
}

export default BookingPage;
