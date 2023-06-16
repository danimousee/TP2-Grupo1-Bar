import { useState } from "react";
import CountButtom from "./CountButtom";

const CountTragosContainer = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const del = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <CountButtom name={"del"} method={del} />
      <CountButtom name={"add"} method={add} />
      <CountButtom name={"reset"} method={reset} />
      <h1>{count}</h1>
    </div>
  );
};
export default CountTragosContainer;