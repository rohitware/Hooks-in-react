import Conuter2UseRef from "./Counter2UseRef";
import CounterUseRef from "./CounterUseRef";
import AccessDomUseRef from "./AccessDomUseRef";

function UseRefLayout() {
  return (
    <>
      <CounterUseRef />
      <br></br>
      <br></br>

      <Conuter2UseRef />
      <br />
      <br />

      <AccessDomUseRef />
    </>
  );
}
export default UseRefLayout;
