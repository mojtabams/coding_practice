/**
 * @file useGame.js
 * @description Custom hook for mini-game gauge logic, timer, score calculation, pause, and feedback.
 */

import { useState, useEffect } from "react";

export const useGame = () => {
  // const [gamePosition, setGamePosition] = useState(-10); // Range: -10 to +10
  const [step, setStep] = useState(0); // از 0 تا 40 (نشان‌دهنده 40 سگمنت نوار)
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [score, setScore] = useState(0);
  const [selections, setSelections] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minutes in seconds
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lastEarnedPoints, setLastEarnedPoints] = useState(0); // Feedback for last selection

  // Timer effect
  // useEffect(() => {
  //   let timer;
  //   if (isGameRunning && !isPaused && timeLeft > 0) {
  //     timer = setInterval(() => {
  //       setTimeLeft((prev) => prev - 1);
  //     }, 1000);
  //   } else if (timeLeft === 0) {
  //     setIsGameRunning(false);
  //     setIsPaused(false);
  //   }
  //   return () => clearInterval(timer);
  // }, [isGameRunning, isPaused, timeLeft]);

  /**
   * محاسبه مقدار عدد بازی بر اساس قدم فعلی (step):
   * - از 0 تا 20: صعودی از -10 به +10 (مرکز)
   * - از 20 تا 40: نزولی از +10 به -10 (سمت راست)
   */
  const getGamePosition = (currentStep) => {
    if (currentStep <= 20) {
      return -10 + (currentStep / 20) * 20;
    } else {
      return 10 - ((currentStep - 20) / 20) * 20;
    }
  };

  const gamePosition = Math.round(getGamePosition(step));

  // Gauge movement effect (every 0.2 seconds)
  // منطق حرکت رفت و برگشتی بین -10 و +10
  // تایمر بازی (۶۰ ثانیه)
  useEffect(() => {
    let timer;
    if (isGameRunning && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsGameRunning(false);
      setIsPaused(false);
    }
    return () => clearInterval(timer);
  }, [isGameRunning, isPaused, timeLeft]);

  // حرکت رفت و برگشتی نشانگر در طول 40 سگمنت
  useEffect(() => {
    let interval;
    if (isGameRunning && !isPaused) {
      interval = setInterval(() => {
        setStep((prev) => {
          let next = prev + direction;
          if (next >= 40) {
            setDirection(-1); // رسیدن به انتهای راست، تغییر مسیر به سمت چپ
            return 39;
          }
          if (next <= 0) {
            setDirection(1); // رسیدن به ابتدای چپ، تغییر مسیر به سمت راست
            return 1;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isGameRunning, isPaused, direction]);

  // محو شدن خودکار پیام امتیاز پس از ۳ ثانیه
  useEffect(() => {
    if (lastEarnedPoints !== null && lastEarnedPoints !== 0) {
      const timer = setTimeout(() => {
        setLastEarnedPoints(null);
      }, 2000); // 2 ثانیه
      return () => clearTimeout(timer);
    }
  }, [lastEarnedPoints]);

  /**
   * Handles user selection during the game to calculate score and provide feedback.
   * محاسبه امتیاز بر اساس نزدیکی به مرکز (+10) و دوری از لبه‌ها (-10)
   */
  const handleSelect = () => {
    if (!isGameRunning || isPaused) return;

    setSelections((prev) => prev + 1);

    // // چون مرکز +10 بیشترین امتیاز را دارد و لبه‌ها -10 کمترین امتیاز را دارند:
    // // فاصله از مرکز (0) یعنی هرچه gamePosition به 0 نزدیک‌تر باشد، امتیاز بیشتر است.
    // const distanceFromCenter = Math.abs(gamePosition); // بین 0 (مرکز) تا 10 (لبه‌ها)
    // let earnedPoints = 0;
    // if (distanceFromCenter === 0) {
    //   earnedPoints = 10; // مرکز (+10 امتیاز)
    // } else if (distanceFromCenter <= 3) {
    //   earnedPoints = 7;
    // } else if (distanceFromCenter <= 6) {
    //   earnedPoints = 4;
    // } else {
    //   earnedPoints = 1; // نزدیک لبه‌ها (-10)
    // }

    // دقیقاً خود مقدار gamePosition روی امتیاز لحاظ می‌شود (مثبت‌ها اضافه، منفی‌ها کم)
    const earnedPoints = gamePosition; // از -10 تا +10

    setScore((prev) => prev + earnedPoints);
    setLastEarnedPoints(earnedPoints); // Save for visual feedback
  };

  const startGame = () => {
    setIsGameRunning(true);
    setIsPaused(false);
    setScore(0);
    setSelections(0);
    setTimeLeft(60);
    setStep(0);
    setDirection(1);
    setLastEarnedPoints(null);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const stopGame = () => {
    setIsGameRunning(false);
    setIsPaused(false);
    setStep(0);
    setLastEarnedPoints(null);
  };

  return {
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
  };
};
