import { Children, useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <>
      <button className={className}>{Children}</button>;
    </>
  );
}
export default Button;
