import React, { useEffect, useState } from "react";
import "../css/thanks.css";
import { Link } from "react-router-dom";
import useTranslation from "../i18n/useTranslation";

function ThanksPage() {
  const [bookingData, setBookingData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) {
      setBookingData(JSON.parse(data));
    }
  }, []);

  return (
    <main className="container thanks-page">
      <h1>{t("thanks.title")}</h1>
      <p>{t("thanks.subtitle")}</p>

      {bookingData && (
        <div className="booking-summary">
          <h2>{t("thanks.summaryTitle")}</h2>
          <p>
            <strong>{t("thanks.room")}:</strong> {bookingData.roomName}
          </p>
          <p>
            <strong>{t("thanks.name")}:</strong> {bookingData.name}
          </p>
          <p>
            <strong>{t("thanks.email")}:</strong> {bookingData.email}
          </p>
          <p>
            <strong>{t("thanks.from")}:</strong> {bookingData.dateFrom}
          </p>
          <p>
            <strong>{t("thanks.to")}:</strong> {bookingData.dateTo}
          </p>
        </div>
      )}

      <Link to="/rooms" className="btn-outline">
        ← {t("thanks.backToRooms")}
      </Link>
    </main>
  );
}

export default ThanksPage;
