import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    username: "Rohit",
    password: "1234",
  });

  function handleUserNameChange(e) {
    setUser({
      ...user,
      username: e.target.value,
    });
  }

  function handlePasswordChange(e) {
    setUser({
      ...user,
      password: e.target.value,
    });
  }

  return (
    <>
      <h3>UseState with object form</h3>
      <p>{JSON.stringify(user)}</p>
      <form>
        <label>
          UserName:
          <input type="text" name="username" onChange={handleUserNameChange} />
        </label>
        <br></br>
        <br></br>

        <label>
          Password:
          <input type="text" name="password" onChange={handlePasswordChange} />
        </label>
      </form>
    </>
  );
}
export default UserForm;
