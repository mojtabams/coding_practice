/**
 * @file useCounter.js
 * @description Custom hook to manage counter state, step sizes, and initial values.
 */

import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [startingValue, setStartingValue] = useState(0);
  const [increaseStep, setIncreaseStep] = useState(1);
  const [decreaseStep, setDecreaseStep] = useState(1);

  /**
   * Increases the counter by the specified step.
   */
  const handleIncrease = () => {
    setCount((prev) => prev + Number(increaseStep));
  };

  /**
   * Decreases the counter by the specified step.
   */
  const handleDecrease = () => {
    setCount((prev) => prev - Number(decreaseStep));
  };

  /**
   * Resets the counter to 0 or the starting value.
   */
  const handleReset = () => {
    setCount(Number(startingValue));
  };

  /**
   * Sets the counter to the custom starting value input.
   */
  const handleSetStartingValue = () => {
    setCount(Number(startingValue));
  };

  return {
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
  };
};
