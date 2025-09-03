import { useState, useEffect } from "react";
import translations from "./translations";

const getInitialLang = () => {
  return localStorage.getItem("language") || "en";
};

const getNestedTranslation = (obj, keyPath) => {
  return keyPath.split(".").reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : null;
  }, obj);
};

export default function useTranslation() {
  const [language, setLanguage] = useState(getInitialLang());

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => {
    const result = getNestedTranslation(translations[language], key);
    return typeof result === "string" ? result : key;
  };

  return { t, language, setLanguage };
}
