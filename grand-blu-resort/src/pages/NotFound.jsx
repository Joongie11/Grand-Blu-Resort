import React from "react";
import "../css/notfound.css";
import useTranslation from "../i18n/useTranslation";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found-container">
      <h2 className="not-found-title">{t("notFound.title")}</h2>
      <p className="not-found-text">{t("notFound.text")}</p>
    </div>
  );
}

export default NotFound;
