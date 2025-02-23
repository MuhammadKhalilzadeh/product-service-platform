import { Stack } from "@mui/material";
import TMLogo from "../../../assets/logos/tm-logo-png-black.png";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import { useState } from "react";
import { createSuperAdminValidationEngine } from "../../../../application/validations/engines";
import { textfieldstyle } from "./style";

const SuperAdminRegister = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      repeatPassword,
    } = values;
    const validation = createSuperAdminValidationEngine({
      firstname: firstName,
      lastname: lastName,
      email,
      phonenumber: phoneNumber,
      password,
      repassword: repeatPassword,
    });

    if (validation.isValid) {
      console.log("Form is valid", values);
      // Proceed with form submission
    } else {
      const errorObj: { [key: string]: string } = {};
      validation.errors.forEach((error) => {
        if (error.includes("Firstname")) errorObj.firstName = error;
        if (error.includes("Lastname")) errorObj.lastName = error;
        if (error.includes("Email")) errorObj.email = error;
        if (error.includes("Phone number")) errorObj.phoneNumber = error;
        if (error.includes("Password")) errorObj.password = error;
        if (error.includes("Passwords do not match"))
          errorObj.repeatPassword = error;
      });
      setErrors(errorObj);
      console.log("Form has errors", validation.errors);
    }
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
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={textfieldstyle}
          />
          <TMTextField
            placeholder="Last name"
            type="text"
            value={values.lastName}
            onChange={handleChange("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={textfieldstyle}
          />
          <TMTextField
            placeholder="Email address"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            error={!!errors.email}
            helperText={errors.email}
            sx={textfieldstyle}
          />
          <TMTextField
            placeholder="Phone no."
            type="tel"
            value={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            sx={textfieldstyle}
          />
          <TMTextField
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            error={!!errors.password}
            helperText={errors.password}
            sx={textfieldstyle}
          />
          <TMTextField
            placeholder="Repeat password"
            type="password"
            value={values.repeatPassword}
            onChange={handleChange("repeatPassword")}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword}
            sx={textfieldstyle}
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

export default SuperAdminRegister;
