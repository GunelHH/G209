import React, { useContext } from "react";
import Button from "./Button";
import { CountContext } from "../contexts/Context";

function DisplayCount() {
  const { count } = useContext(CountContext);
  return (
    <div>
      {count}
      <Button />
    </div>
  );
}

export default DisplayCount;
