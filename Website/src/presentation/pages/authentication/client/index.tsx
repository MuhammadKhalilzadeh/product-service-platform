import { Stack, Typography } from "@mui/material";
import ServiceButton from "../../../components/Buttons/services/serviceButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import TMPasswordStrengthCheck from "../../../components/checks/password";
import TMSidePlate from "../../../components/Plates";
import { useState } from "react";

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
              fontSize: 64,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <ServiceButton icon={<GoogleIcon width={48} height={48} />} />
            <ServiceButton icon={<AppleIcon width={48} height={48} />} />
            <ServiceButton icon={<FacebookIcon width={48} height={48} />} />
          </Stack>
        </Stack>
        <Stack gap={2}>
          <TMTextField
            label="Your email address"
            type="email"
            required
            disabled={true}
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
          <TMTextField
            label="Set a password"
            type="password"
            required
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
        </Stack>
        <TMPasswordStrengthCheck password={formData.password} />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TMButton label="Sign Up" onClick={handleSubmit} />
          <Typography sx={{ textAlign: "center", fontSize: 11 }}>
            Already have an account?{" "}
            <span style={{ color: "#000000", fontWeight: "bold" }}>
              Sign in
            </span>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ClientRegister;
