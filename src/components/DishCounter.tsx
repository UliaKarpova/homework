import { useState } from "react";
import { Counter } from "./Counter";
import React from "react";

export const DishCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => {
      return prev < 5 ? ++prev : prev;
    });
  };

  const decrease = () => {
    setCount((prev) => {
      return prev > 0 ? --prev : prev;
    });
  };

  return <Counter increase={increase} decrease={decrease} value={count} />;
};
