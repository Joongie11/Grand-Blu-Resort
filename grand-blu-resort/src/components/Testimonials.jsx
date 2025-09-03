import React from "react";
import useTranslation from "../i18n/useTranslation";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials");

  return (
    <div className="testimonials">
      <h2>{t("guestReviewsTitle")}</h2>
      {Array.isArray(testimonials) ? (
        testimonials.map((review, index) => (
          <div key={index} className="testimonial">
            <p>{review.text}</p>
            <p>{review.author}</p>
          </div>
        ))
      ) : (
        <p>No testimonials available</p>
      )}
    </div>
  );
};

export default Testimonials;
