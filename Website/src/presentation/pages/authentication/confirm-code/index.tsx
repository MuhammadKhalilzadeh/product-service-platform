import { Stack, Typography } from "@mui/material";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import TMSidePlate from "../../../components/Plates";
import { useState } from "react";

const ConfirmCode = () => {
  const [formData, setFormData] = useState({
    code: "",
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
            Confirm your code
          </Typography>
        </Stack>
        <Stack gap={2}>
          <TMTextField
            label="Enter the code"
            type="email"
            required
            value={formData.code}
            onChange={handleInputChange}
            name="code"
          />
        </Stack>
        <TMButton label="Confirm" onClick={handleSubmit} />
      </Stack>
    </Stack>
  );
};

export default ConfirmCode;
