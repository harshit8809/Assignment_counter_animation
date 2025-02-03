import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Counter: React.FC = () => {
  // State to manage the count
  const [count, setCount] = useState(() => {
    // Retrieve the count from localStorage if it exists
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  // Animation for background color
  const backgroundColorAnimation = useSpring({
    backgroundColor: `rgba(0, 100, 200, ${count / 20})`,
    config: { tension: 120, friction: 30 }, // Adjust for bezier effect
  });

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  // Increment function
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <animated.div
      style={{
        ...backgroundColorAnimation,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s",
      }}
    >
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
          Increment
        </button>
        <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
          Decrement
        </button>
        <button onClick={reset} style={{ margin: "5px", padding: "10px" }}>
          Reset
        </button>
      </div>
    </animated.div>
  );
};

export default Counter;