import { useEffect, useState } from "react";

function Timer() {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      SetCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <h1> I have render {count} times</h1>;
}
export default Timer;
