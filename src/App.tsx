import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
