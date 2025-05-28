import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Panel({ title, childern }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <>
      <section className={className}>
        <h1>{title}</h1>
        {childern}
      </section>
    </>
  );
}
export default Panel;
