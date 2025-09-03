import React from "react";
import translations from "../i18n/translations";

function About() {
  const language = localStorage.getItem("language") || "en";
  const t = translations[language];

  return (
    <section className="about-resort" id="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutParagraph1}</p>
          <p>{t.aboutParagraph2}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
