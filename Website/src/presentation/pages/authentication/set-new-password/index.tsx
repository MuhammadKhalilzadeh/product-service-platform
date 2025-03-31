import { Stack, Typography } from "@mui/material";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import TMSidePlate from "../../../components/Plates";
import { useState } from "react";
import TMCheck from "../../../components/checks";

const SetNewPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Stack
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <TMSidePlate />
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            Set a new password
          </Typography>
        </Stack>
        <Stack gap={2}>
          <TMTextField
            label="Set a new password"
            type="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
          <TMTextField
            label="Confirm new password"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
        </Stack>
        <TMCheck
          label="Password values are the same"
          checked={formData.password === formData.confirmPassword}
        />
        <TMButton label="Set password" onClick={handleSubmit} />
      </Stack>
    </Stack>
  );
};

export default SetNewPassword;
