/**
 * @file Navbar.jsx
 * @description Navigation bar component featuring brand logo, mode switcher, and language toggle.
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = ({ activeMode, setActiveMode }) => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between py-6 px-8 bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50">
      {/* Brand Logo & Subtitle */}
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <div className="flex flex-col gap-0.5">
          <div className="w-7 h-7 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            {/* Simple logo icon representation */}
            <div className="w-2 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-tight flex items-center gap-2">
            Counter
          </h1>
          <p className="text-xs text-slate-400">{t.brandSubtitle}</p>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl shadow-inner">
        <button
          onClick={() => setActiveMode("all")}
          className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            activeMode === "all"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-blue-500/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {lang === "fa" ? "همه" : "All"}
        </button>
        <button
          onClick={() => setActiveMode("counter")}
          className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            activeMode === "counter"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-blue-500/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {t.nav.counter}
        </button>
        <button
          onClick={() => setActiveMode("game")}
          className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            activeMode === "game"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-blue-500/20"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {t.nav.game}
        </button>
      </div>

      {/* Language Toggle & Actions */}
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl text-sm text-slate-300 transition-all shadow-sm"
        >
          <span>🌐</span>
          <span>{lang === "en" ? "فارسی" : "English"}</span>
        </button>
      </div>
    </header>
  );
};
