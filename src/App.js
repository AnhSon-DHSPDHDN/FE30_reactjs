import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [isShowCounter, setIsShowCounter] = useState(true);

  return (
    <div>
      {isShowCounter && <Counter />}
      <br></br>
      <button onClick={() => setIsShowCounter(!isShowCounter)}>
        {isShowCounter ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
