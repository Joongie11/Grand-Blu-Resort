import React from "react";
import { Link } from "react-router-dom";
import useTranslation from "../i18n/useTranslation";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h3>Grand Blu Resort</h3>
          <p>{t("footerSubtitle")}</p>
        </div>

        <div className="footer-nav">
          <h4>{t("footerExplore")}</h4>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/rooms">{t("nav.rooms")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/login">{t("login")}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{t("footerContactTitle")}</h4>
          <p>{t("footerAddress")}</p>
          <p>{t("footerPhone")}</p>
          <p>{t("footerEmail")}</p>
        </div>

        <div className="footer-social">
          <h4>{t("footerFollow")}</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 Grand Blu Resort. {t("footerRights")} |{" "}
          <a href="#">{t("footerPrivacy")}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
