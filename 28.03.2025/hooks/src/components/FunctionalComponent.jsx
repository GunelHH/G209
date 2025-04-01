import React, { useEffect, useState } from "react";

const MultiDependencyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Count or Name changed: Count=${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Count: {count}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default MultiDependencyComponent;
