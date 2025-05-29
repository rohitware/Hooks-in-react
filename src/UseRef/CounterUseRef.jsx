import { useState, useRef } from "react";

function CounterUseRef() {
  const countRef = useRef(0); // want cause re renders
  const [visibleCount, setVisibleCount] = useState(0);

  const handleClick = () => {
    countRef.current += 1;
    setVisibleCount((visibleCount) => visibleCount + 1);
    console.log(`current count (ref): `, countRef.current);
  };

  return (
    <>
      <p> Visible Count: {visibleCount}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
export default CounterUseRef;
