import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UseStateRoutes from "./useState/UseStateRoutes";
import UseEffectRoutes from "./useEffect/UseEffectRoutes";
import UseContextLayout from "./UseContext/UseContextLayout";

function App() {
  return (
    <Routes>
      {/* Layout wraps all these routes */}
      <Route path="/" element={<Layout />}>
        <Route path="use-state" element={<UseStateRoutes />} />
        <Route path="use-effect" element={<UseEffectRoutes />} />
        <Route path="use-context" element={<UseContextLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
