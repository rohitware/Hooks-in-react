import React, { useState } from "react";

const Loading = () => {``
  const [isLoading, setIsLoading] = useState(true);

  function clickHandle() {
    setIsLoading((prevState) => !prevState);
  }
  return (
    <>
      <h2> useState hook with boolean type</h2>

      {isLoading ? <p> Loading..... </p> : <h4> Data will show here</h4>}
      <button onClick={clickHandle}>toggle Loading</button>
    </>
  );
};

export default Loading;
