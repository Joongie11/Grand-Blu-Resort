import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useTranslation from "../i18n/useTranslation";
import "../css/login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5001/login", {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      setError("");
      alert(t("login.success"));
      navigate("/");
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError(t("login.failed"));
      }
    }
  };

  return (
    <main className="container login-page">
      <h1 className="page-title">{t("login.title")}</h1>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">{t("login.emailLabel")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("login.emailPlaceholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">{t("login.passwordLabel")}</label>
          <input
            type="password"
            id="password"
            placeholder={t("login.passwordPlaceholder")}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn">
          {t("login.button")}
        </button>

        <p className="login-note">
          {t("login.noAccount")}{" "}
          <Link to="/register">{t("login.registerLink")}</Link>
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
