import { Stack } from "@mui/material";
import TMLogo from "../../../assets/logos/tm-logo-png-black.png";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import { useState } from "react";
import { textfieldstyle } from "../SuperAdminRegister/style";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          width: 360,
          border: "1px solid #cdcdcd",
          borderRadius: 2,
          paddingX: 2,
          paddingY: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <img src={TMLogo} alt="TMLogo" style={{ width: 200 }} />
        <Stack sx={{ gap: 2 }}>
          <TMTextField
            placeholder="Email address"
            type="email"
            value={values.email}
            sx={textfieldstyle}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <TMTextField
            placeholder="Password"
            type="password"
            value={values.password}
            sx={textfieldstyle}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </Stack>
        <TMButton
          label="Create Account"
          sx={{ textTransform: "inherit" }}
          onClick={handleSubmit}
        />
      </Stack>
    </Stack>
  );
};

export default Login;
