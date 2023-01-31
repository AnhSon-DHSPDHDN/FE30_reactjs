import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  actUpdateInputCount,
  decrement,
  increment,
} from "./redux/features/counter/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter?.count);
  const dispatch = useDispatch();

  const [inputNumber, setInputNumber] = useState("");

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInputNumber(value);
  };

  const handleSubmit = () => {
    dispatch(actUpdateInputCount(inputNumber));
    setInputNumber("");
  };

  return (
    <div className="App">
      <input value={inputNumber} type="number" onChange={handleChangeInput} />
      <button onClick={handleSubmit}>Submit Number</button>
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
