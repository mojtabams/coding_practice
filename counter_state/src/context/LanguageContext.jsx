/**
 * @file LanguageContext.jsx
 * @description Provides global state management for application language (en/fa) and text translations.
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../utils/translations";

const LanguageContext = createContext();

/**
 * Provider component that wraps the application to supply language state and translation functions.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  /**
   * Toggles the current language between English and Persian.
   */
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "en" ? "fa" : "en"));
  };

  // Update HTML document direction and language attribute based on selected language
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  // Select dictionary based on current language
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to easily consume language context.
 * @returns {Object} Language context values (lang, toggleLanguage, t)
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
