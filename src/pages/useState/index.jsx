import React from "react";

const CounterWithPrev = () => {
  const [count, setCount] = React.useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Count: {count}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={increaseCount}>Increase</button>
      </div>
    </>
  );
};

export default CounterWithPrev;
