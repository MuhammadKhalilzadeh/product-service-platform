import { Stack } from "@mui/material";
import TMLogo from "../../../assets/logos/tm-logo-png-black.png";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import { useState } from "react";
import { textfieldstyle } from "../SuperAdminRegister/style";
import { loginValidationEngine } from "../../../../application/validations/engines";
import { UserRepository } from "../../../../application/repositories/user.repo";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async () => {
    const { email, password } = values;
    const validation = loginValidationEngine({ email, password });

    if (validation.isValid) {
      console.log("Form is valid", values);
      // Proceed with form submission
      const userRepository = new UserRepository("/users/login");

      try {
        const response = await userRepository.login(values);
        console.log("User logged in successfully", response.data);
      } catch (error) {
        console.error("Error while logging in user", error);
      }
    } else {
      const errorObj: { [key: string]: string } = {};
      validation.errors.forEach((error) => {
        if (error.includes("Email")) errorObj.email = error;
        if (error.includes("Password")) errorObj.password = error;
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
            placeholder="Email address"
            type="email"
            value={values.email}
            sx={textfieldstyle}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TMTextField
            placeholder="Password"
            type="password"
            value={values.password}
            sx={textfieldstyle}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Stack>
        <TMButton
          label="Login"
          sx={{ textTransform: "inherit" }}
          onClick={handleSubmit}
        />
      </Stack>
    </Stack>
  );
};

export default Login;
