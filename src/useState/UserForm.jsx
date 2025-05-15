import React, { useState } from "react";

function UserForm() {
  const initialObject = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialObject);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h3>UseState with object form</h3>
      <p>{JSON.stringify(user)}</p>
      <form>
        <label>
          UserName:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br></br>
        <br></br>

        <label>
          Password:
          <input type="text" name="password" onChange={handleChange} />
        </label>
      </form>
    </>
  );
}
export default UserForm;
