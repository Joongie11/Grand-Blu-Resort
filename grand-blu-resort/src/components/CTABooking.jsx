import React from "react";
import translations from "../i18n/translations";

function CTABooking() {
  const language = localStorage.getItem("language") || "en";
  const t = translations[language];

  return (
    <section className="cta-booking">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaSubtitle}</p>
          <a href="/rooms" className="btn btn-outline-light">
            {t.viewRooms}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTABooking;
