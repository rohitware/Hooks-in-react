import { useEffect, useState } from "react";

function Counter() {
  const [count, SetCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  function clickHandler() {
    SetCount((c) => c + 1);
  }
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={clickHandler}>Increment</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
export default Counter;
