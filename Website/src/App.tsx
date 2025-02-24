import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperAdminRegister from "./presentation/pages/authentication/SuperAdminRegister";
import Login from "./presentation/pages/authentication/Login";
import Dashboard from "./presentation/pages/container";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/super-admin-reg" element={<SuperAdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
