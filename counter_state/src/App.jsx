/**
 * @file App.jsx
 * @description Main application component that connects context, navbar, counter, and mini-game.
 */

import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { useCounter } from "./hooks/useCounter";
import { useGame } from "./hooks/useGame";
import { Navbar } from "./components/Navbar";
import { CounterCard } from "./components/CounterCard";
import { GameCard } from "./components/GameCard";

function AppContent() {
  const [activeMode, setActiveMode] = useState("all"); // "all" | "counter" | "game"

  // Counter Hook logic
  const counterProps = useCounter();

  // Game Hook logic (passes game running state)
  const gameProps = useGame();

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar activeMode={activeMode} setActiveMode={setActiveMode} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 flex items-center justify-center">
        <div className="w-full">
          {activeMode === "all" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GameCard {...gameProps} />
              <CounterCard
                {...counterProps}
                isGameRunning={gameProps.isGameRunning}
              />
            </div>
          )}

          {activeMode === "counter" && (
            <div className="max-w-xl mx-auto">
              <CounterCard
                {...counterProps}
                isGameRunning={gameProps.isGameRunning}
              />
            </div>
          )}

          {activeMode === "game" && (
            <div className="max-w-xl mx-auto">
              <GameCard {...gameProps} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-900">
        Better habits. A brighter you.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
