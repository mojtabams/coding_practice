/**
 * @file useGame.js
 * @description Custom hook for mini-game gauge logic, timer, and score calculation.
 */

import { useState, useEffect } from "react";

export const useGame = (isActive) => {
  const [gamePosition, setGamePosition] = useState(0); // Range: -10 to +10
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [score, setScore] = useState(0);
  const [selections, setSelections] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isGameRunning, setIsGameRunning] = useState(false);

  // Timer effect
  useEffect(() => {
    let timer;
    if (isGameRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsGameRunning(false);
    }
    return () => clearInterval(timer);
  }, [isGameRunning, timeLeft]);

  // Gauge movement effect (every 0.2 seconds)
  useEffect(() => {
    let interval;
    if (isGameRunning) {
      interval = setInterval(() => {
        setGamePosition((prev) => {
          let next = prev + direction;
          if (next >= 10) {
            setDirection(-1);
            return 10;
          }
          if (next <= -10) {
            setDirection(1);
            return -10;
          }
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isGameRunning, direction]);

  /**
   * Handles user selection during the game to calculate score based on proximity to center (0).
   */
  const handleSelect = () => {
    if (!isGameRunning) return;

    setSelections((prev) => prev + 1);

    // Closer to 0 (green zone) gives more points
    const distance = Math.abs(gamePosition);
    let earnedPoints = 0;
    if (distance === 0) earnedPoints = 10;
    else if (distance <= 3) earnedPoints = 5;
    else if (distance <= 6) earnedPoints = 2;
    else earnedPoints = 1;

    setScore((prev) => prev + earnedPoints);
  };

  const startGame = () => {
    setIsGameRunning(true);
    setScore(0);
    setSelections(0);
    setTimeLeft(180);
  };

  const stopGame = () => {
    setIsGameRunning(false);
  };

  return {
    gamePosition,
    score,
    selections,
    timeLeft,
    isGameRunning,
    startGame,
    stopGame,
    handleSelect,
  };
};
