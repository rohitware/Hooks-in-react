import React, { useState } from "react";

const Comment = () => {
  const [title, setTitle] = useState("Good Morning");

  function HandleClick() {
    setTitle("Good Evening");
    console.log(title);
    
  }

  return (
    <>
      <h2>{title} </h2>
      {/* <button onClick={() => setTitle("Good Evening")}> Change Title</button> */}
      <button onClick={HandleClick}> Change Title</button>
    </>
  );
};
export default Comment;
