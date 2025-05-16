import { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: " Mustang",
    year: 1995,
    color: "Red",
  });

  const clickHandle = () => {
    setCar({
      ...car,
      color: "blue",
    });
  };

  return (
    <>
      <h2> my {car.brand} </h2>
      <p>
        It is {car.color} {car.model} form {car.year}
      </p>

      <button onClick={clickHandle}>Change car color</button>
    </>
  );
}
export default Car
