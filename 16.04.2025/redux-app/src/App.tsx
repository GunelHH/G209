import React from "react";
import { increment, decrement } from "./redux/Actions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Counter App (Vanilla Redux + TypeScript)</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
