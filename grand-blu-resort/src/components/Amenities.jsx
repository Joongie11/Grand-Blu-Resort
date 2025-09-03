import React from "react";
import spaImage from "../assets/images/spa.jpg";
import poolImage from "../assets/images/pool.jpg";
import yogaImage from "../assets/images/yoga.jpg";
import translations from "../i18n/translations";

function Amenities() {
  const language = localStorage.getItem("language") || "en";
  const t = translations[language];

  return (
    <section className="amenities">
      <div className="container">
        <h2>{t.amenitiesTitle}</h2>
        <div className="amenities-grid">
          <div className="amenity">
            <img src={spaImage} alt="Spa" />
            <h3>{t.amenitySpaTitle}</h3>
            <p>{t.amenitySpaText}</p>
          </div>
          <div className="amenity">
            <img src={poolImage} alt="Infinity Pool" />
            <h3>{t.amenityPoolTitle}</h3>
            <p>{t.amenityPoolText}</p>
          </div>
          <div className="amenity">
            <img src={yogaImage} alt="Activities" />
            <h3>{t.amenityActivitiesTitle}</h3>
            <p>{t.amenityActivitiesText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
