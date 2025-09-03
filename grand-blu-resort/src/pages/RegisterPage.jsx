import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/register.css";
import useTranslation from "../i18n/useTranslation";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError(t("register.fillAll"));
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError(t("register.passwordMismatch"));
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5001/register", {
        name,
        email,
        password,
      });

      setError("");
      setSuccess(res.data.message || t("register.success"));

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setSuccess("");
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError(t("register.error"));
      }
    }
  };

  return (
    <main className="container auth-container">
      <h1 className="auth-title">{t("register.title")}</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>{t("register.nameLabel")}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>{t("register.emailLabel")}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>{t("register.passwordLabel")}</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>{t("register.confirmPasswordLabel")}</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="btn">
          {t("register.registerBtn")}
        </button>

        <p className="auth-note">
          {t("register.already")}{" "}
          <Link to="/login">{t("register.loginHere")}</Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;
