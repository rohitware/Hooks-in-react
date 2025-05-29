import { useRef } from "react";

function AccessDomUseRef() {
  const inputRef = useRef(); // Step 1: Create ref
  const textRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Step 2: Use ref to focus input
  };

  const changeColor = () => {
    textRef.current.style.color = "blue";
    textRef.current.style.backgroundColor = "red";
  };

  return (
    <>
      <h2>Accessing DOM Elements</h2>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <br />

      <p ref={textRef}> Hello! Click the button to change my color.</p>
      <button onClick={changeColor}>Change the color!</button>
    </>
  );
}
export default AccessDomUseRef;
