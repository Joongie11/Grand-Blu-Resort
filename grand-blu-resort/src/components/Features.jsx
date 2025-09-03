import React from "react";
import useTranslation from "../i18n/useTranslation";
import beachImage from "../assets/images/beach.png";
import serviceImage from "../assets/images/service.png";
import diningImage from "../assets/images/dining.png";

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features-section">
      <div className="feature-block">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${beachImage})` }}
        ></div>
        <div className="feature-text">
          <h3>{t("locationTitle")}</h3>
          <p>{t("locationDesc")}</p>
        </div>
      </div>

      <div className="feature-block reverse">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${serviceImage})` }}
        ></div>
        <div className="feature-text">
          <h3>{t("serviceTitle")}</h3>
          <p>{t("serviceDesc")}</p>
        </div>
      </div>

      <div className="feature-block">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${diningImage})` }}
        ></div>
        <div className="feature-text">
          <h3>{t("diningTitle")}</h3>
          <p>{t("diningDesc")}</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
