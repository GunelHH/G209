import { useState } from "react";
import "./App.css";
import DisplayCount from "./components/DisplayCount";
import { CountContext } from "./contexts/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <DisplayCount />
      </CountContext.Provider>
    </>
  );
}

export default App;
