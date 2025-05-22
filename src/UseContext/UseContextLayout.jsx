import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";
function UseContextLayout() {
  const user = { name: "Rohit", logedIn: true };
  return (
    <>
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>
    </>
  );
}
export default UseContextLayout;
