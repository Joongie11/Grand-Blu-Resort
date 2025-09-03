import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import translations from "../i18n/translations";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const t = translations[language];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    localStorage.setItem("language", selectedLang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Grand Blu Resort</div>

        <nav className="nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/rooms">{t.nav.rooms}</Link>
          <Link to="/contact">{t.nav.contact}</Link>

          {isLoggedIn ? (
            <div className="user-menu" ref={dropdownRef}>
              <i
                className="fas fa-user-circle user-icon"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              ></i>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/my-bookings"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {t.nav.myBookings}
                  </Link>
                  <button onClick={handleLogout}>{t.nav.logout}</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">{t.nav.login}</Link>
          )}

          <div className="language-switcher">
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="pl">PL</option>
              <option value="ua">UA</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
