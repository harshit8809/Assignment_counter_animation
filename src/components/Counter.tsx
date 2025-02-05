import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../form.css"
const Counter: React.FC = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  const backgroundColorAnimation = useSpring({
    backgroundColor: `rgba(0, 100, 200, ${count / 20})`,
    config: { tension: 120, friction: 30 },
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <animated.div
      style={{
        ...backgroundColorAnimation,
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s",
        border: "1px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1>Counter: {count}</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={increment} className="counterBtn" style={{ margin: "5px", padding: "10px" }}>
          Increment
        </button>
        <button
          onClick={reset}
          className="counterBtn"
          style={{ margin: "5px", padding: "10px" }}
          disabled={count < 1}
        >
          Reset
        </button>
        <button
          onClick={decrement}
          className="counterBtn"
          style={{ margin: "5px", padding: "10px" }}
          disabled={count < 1}
        >
          Decrement
        </button>
      </div>
    </animated.div>
  );
};

export default Counter;