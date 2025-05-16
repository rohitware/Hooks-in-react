import { useState } from "react";

function Users() {
  const usersList = [
    { id: 1, name: "Rohit" },
    { id: 2, name: "Amar" },
  ];

  const [users, setUsers] = useState(usersList);
  function updateUserList(newUser) {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: newUser,
      },
    ]);
  }
  return (
    <>
      <h2>Use state with array</h2>

      <p>{JSON.stringify(users)}</p>
      <form>
        <label>
          Add User:
          <input
            type="text"
            name="name"
            onBlur={(e) => updateUserList(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
export default Users;
