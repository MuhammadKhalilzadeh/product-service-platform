import { Stack } from "@mui/material";
import TMLogo from "../../../assets/logos/tm-logo-png-black.png";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import { useState } from "react";

const SuperAdminRegister = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
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
            placeholder="First name"
            type="text"
            value={values.firstName}
            onChange={handleChange("firstName")}
          />
          <TMTextField
            placeholder="Last name"
            type="text"
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
          <TMTextField
            placeholder="Email address"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <TMTextField
            placeholder="Phone no."
            type="tel"
            value={values.phoneNumber}
            onChange={handleChange("phone")}
          />
          <TMTextField
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={handleChange("password")}
          />
          <TMTextField
            placeholder="Repeat password"
            type="password"
            value={values.repeatPassword}
            onChange={handleChange("repeatPassword")}
          />
        </Stack>
        <TMButton label="Create Account" />
      </Stack>
    </Stack>
  );
};

export default SuperAdminRegister;
