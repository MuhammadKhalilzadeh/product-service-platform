import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./presentation/pages/container";
import AdminRegister from "./presentation/pages/authentication/admin";
import ClientRegister from "./presentation/pages/authentication/client";
import Login from "./presentation/pages/authentication/login";
import ForgotPassword from "./presentation/pages/authentication/forgot-password";
import ConfirmCode from "./presentation/pages/authentication/confirm-code";
import SetNewPassword from "./presentation/pages/authentication/set-new-password";
import SuccessfulPasswordChange from "./presentation/pages/authentication/successful-pass-change";
import TMGlobalMap from "./presentation/pages/global/home";
import { store } from "./application/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/admin-reg" element={<AdminRegister />} />
          <Route path="/client-reg" element={<ClientRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-code" element={<ConfirmCode />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route
            path="/successful-pass-change"
            element={<SuccessfulPasswordChange />}
          />
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<TMGlobalMap />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
