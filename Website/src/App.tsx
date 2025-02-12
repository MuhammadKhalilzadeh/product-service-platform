import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperAdminRegister from "./presentation/pages/authentication/SuperAdminRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuperAdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
