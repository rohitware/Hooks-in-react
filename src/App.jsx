import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UseStateRoutes from "./useState/UseStateRoutes";
import UseEffectRoutes from "./useEffect/UseEffectRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all these routes */}
        <Route path="/" element={<Layout />}>
          <Route path="use-state" element={<UseStateRoutes />} />
          <Route path="use-effect" element={<UseEffectRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
