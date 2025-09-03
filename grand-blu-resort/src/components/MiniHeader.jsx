import React from "react";
import { Link } from "react-router-dom";
import useTranslation from "../i18n/useTranslation";
import "../css/miniheader.css";

function MiniHeader() {
  const { t } = useTranslation();

  return (
    <header className="mini-header">
      <div className="container">
        <div className="mini-title">Grand Blue Hotel</div>
        <Link to="/" className="back-home">
          ← {t("backToHome")}
        </Link>
      </div>
    </header>
  );
}

export default MiniHeader;
