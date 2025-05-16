import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UseStateRoutes from "./useState/UseStateRoutes";
import UseEffectRoutes from "./useEffect/UseEffectRoutes";

function App() {
  return (
    <Routes>
      {/* Layout wraps all these routes */}
      <Route path="/" element={<Layout />}>
        <Route path="use-state" element={<UseStateRoutes />} />
        <Route path="use-effect" element={<UseEffectRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
