import { useState, useRef, useEffect } from "react";

function Conuter2UseRef() {
  const [inputValue, setInputVlaue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h2>Does Not Cause Re-renders</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputVlaue(e.target.value)}
      />

      <h1>Render Count is : {count.current}</h1>
    </>
  );
}
export default Conuter2UseRef;
