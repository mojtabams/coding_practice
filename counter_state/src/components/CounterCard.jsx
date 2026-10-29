/**
 * @file CounterCard.jsx
 * @description Counter module card component with starting value, steps configuration, and actions.
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const CounterCard = ({
  count,
  startingValue,
  setStartingValue,
  increaseStep,
  setIncreaseStep,
  decreaseStep,
  setDecreaseStep,
  handleIncrease,
  handleDecrease,
  handleReset,
  handleSetStartingValue,
  isGameRunning,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#0b0f19]/90 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400">
            📊
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{t.counter.title}</h2>
            <p className="text-sm text-slate-400">{t.counter.subtitle}</p>
          </div>
        </div>

        {/* Counter Display Screen */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-8 text-center my-6 shadow-inner">
          <span className="text-xs font-semibold text-slate-500 tracking-wider block mb-2">
            {t.counter.currentCount}
          </span>
          <div className="text-6xl md:text-7xl font-black text-white tracking-tight my-2">
            {count}
          </div>
          {isGameRunning && (
            <span className="text-xs text-amber-400/90 font-medium">
              🔒 {t.counter.disabledMsg}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button
            onClick={handleIncrease}
            disabled={isGameRunning}
            className="py-3 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 border border-slate-800 rounded-xl text-slate-200 font-semibold transition-all shadow-sm"
          >
            + {t.counter.increase}
          </button>
          <button
            onClick={handleDecrease}
            disabled={isGameRunning}
            className="py-3 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 border border-slate-800 rounded-xl text-slate-200 font-semibold transition-all shadow-sm"
          >
            - {t.counter.decrease}
          </button>
          <button
            onClick={handleReset}
            disabled={isGameRunning}
            className="py-3 px-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 border border-slate-800 rounded-xl text-slate-200 font-semibold transition-all shadow-sm"
          >
            ↺ {t.counter.reset}
          </button>
        </div>
      </div>

      {/* Settings Section */}
      <div className="border-t border-slate-800/80 pt-6">
        <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          ⚙️ {t.counter.settings}
        </h3>

        {/* Starting Value */}
        <div className="mb-4">
          <label className="text-xs text-slate-400 block mb-1.5 font-medium">
            {t.counter.startingValue}
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={startingValue}
              onChange={(e) => setStartingValue(e.target.value)}
              disabled={isGameRunning}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              onClick={handleSetStartingValue}
              disabled={isGameRunning}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white rounded-xl text-sm font-medium transition-colors"
            >
              {t.counter.setValue} {startingValue}
            </button>
          </div>
        </div>

        {/* Steps Configuration */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-400 block mb-1.5 font-medium">
              {t.counter.increaseBy}
            </label>
            <input
              type="number"
              value={increaseStep}
              onChange={(e) => setIncreaseStep(e.target.value)}
              disabled={isGameRunning}
              min="1"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 block mb-1.5 font-medium">
              {t.counter.decreaseBy}
            </label>
            <input
              type="number"
              value={decreaseStep}
              onChange={(e) => setDecreaseStep(e.target.value)}
              disabled={isGameRunning}
              min="1"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
