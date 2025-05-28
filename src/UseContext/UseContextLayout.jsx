import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";
import ThemeContext from "./ThemeContext";
import { useState } from "react";
import Form from "./Form";

function UseContextLayout() {
  const user = { name: "Rohit", logedIn: true };

  const [theme, setTheme] = useState("light");
  return (
    <>
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>

      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </ThemeContext.Provider>
    </>
  );
}
export default UseContextLayout;
