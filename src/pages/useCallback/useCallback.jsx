import React from "react";
import Content from "./Conten";

const LearnUseCallback = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("re-render Main");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>{count}</h1>
        <Content onIncrement={handleIncrement} />
      </div>
    </>
  );
};

export default LearnUseCallback;
