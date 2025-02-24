import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperAdminRegister from "./presentation/pages/authentication/SuperAdminRegister";
import Login from "./presentation/pages/authentication/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/super-admin-reg" element={<SuperAdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
