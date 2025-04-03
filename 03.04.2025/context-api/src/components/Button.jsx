import React, { useContext } from "react";
import { CountContext } from "../contexts/Context";

function Button() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default Button;
