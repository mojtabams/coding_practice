/**
 * @file GameCard.jsx
 * @description Interactive mini-game module featuring a gauge slider, timer, and score stats.
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const GameCard = ({
  gamePosition,
  step, // برای موقعیت‌یابی دقیق در UI
  score,
  selections,
  timeLeft,
  isGameRunning,
  isPaused,
  lastEarnedPoints,
  startGame,
  togglePause,
  stopGame,
  handleSelect,
}) => {
  const { t } = useLanguage();

  // Format time remaining into MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate CSS percentage for gauge indicator position (-10 to +10 mapped to 0% to 100%)
  const getIndicatorPositionPercent = () => {
    const min = 0;
    const max = 40;
    const percentage = ((step - min) / (max - min)) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  return (
    <div className="bg-[#0b0f19]/90 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
            🎮
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{t.game.title}</h2>
            <p className="text-sm text-slate-400">{t.game.subtitle}</p>
          </div>
        </div>

        {/* Info badges */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              {t.game.timeLeft}
            </span>
            <span className="text-white font-bold font-mono text-lg">
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              {t.game.instruction.split(" ")[0]}...
            </span>
            <span className="text-xs text-cyan-400 font-medium">
              🎯 Target 0
            </span>
          </div>
        </div>

        {/* Gauge Visualizer Box */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 my-6 text-center">
          <div className="flex justify-between text-xs font-bold mb-2">
            <span className="text-red-400">-10</span>
            <span className="text-green-400">+10 (Center)</span>
            <span className="text-red-400">-10</span>
          </div>

          {/* Slider track with indicator */}
          <div className="relative w-full h-8 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-yellow-500 to-red-500 rounded-full p-1 shadow-inner my-4 flex items-center">
            {/* Dynamic Indicator Element */}
            <div
              className="absolute w-6 h-10 bg-white rounded-lg shadow-lg border-2 border-cyan-500 transition-all duration-200 transform -translate-x-1/2 flex items-center justify-center"
              style={{ left: `${getIndicatorPositionPercent()}%` }}
            >
              <div className="w-1.5 h-4 bg-cyan-500 rounded-full"></div>
            </div>
          </div>

          {/* <span className="text-xs text-slate-500 mt-2 block">
            {t.game.segmentsInfo}
          </span> */}
        </div>

        {/* Game Control Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {!isGameRunning ? (
            <button
              onClick={startGame}
              className="py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-2xl font-bold shadow-lg shadow-cyan-500/20 transition-all col-span-3"
            >
              ▶ {t.game.start}
            </button>
          ) : (
            <>
              <button
                onClick={stopGame}
                className="py-4 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 rounded-2xl font-bold transition-all text-xs"
              >
                ⏹ {t.game.stop}
              </button>
              <button
                onClick={togglePause}
                className="py-4 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-400 rounded-2xl font-bold transition-all text-xs"
              >
                ⏸ {isPaused ? t.game.resume : t.game.pause}
              </button>
              <button
                onClick={handleSelect}
                disabled={isPaused}
                className="py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white rounded-2xl font-bold shadow-lg shadow-cyan-500/20 transition-all text-xs"
              >
                🎯 {t.game.select}
              </button>
            </>
          )}
        </div>

        {/* Feedback for Last Selection */}
        {lastEarnedPoints !== null && lastEarnedPoints !== 0 && (
          <div className="text-center mb-4 animate-bounce">
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-semibold">
              ✨ {lastEarnedPoints} {t.game.earned}!
            </span>
          </div>
        )}
      </div>

      {/* Footer Game Stats */}
      <div className="grid grid-cols-3 gap-2 border-t border-slate-800/80 pt-6 text-center">
        <div>
          <span className="text-xs text-slate-400 block mb-1">
            {t.game.score}
          </span>
          <span className="text-xl font-extrabold text-white">⭐ {score}</span>
        </div>
        <div>
          <span className="text-xs text-slate-400 block mb-1">
            {t.game.selections}
          </span>
          <span className="text-xl font-extrabold text-white">
            🎯 {selections}
          </span>
        </div>
        <div>
          <span className="text-xs text-slate-400 block mb-1">
            {t.game.timeLeft}
          </span>
          <span className="text-xl font-extrabold text-white font-mono">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
    </div>
  );
};
