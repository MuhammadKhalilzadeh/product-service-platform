import "./style";
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
import { RegisterUser } from "../../../../application/repositories/user.repo";
import { useNavigate } from "react-router-dom";
import TMLoadingPage from "../../../components/loading";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      console.error(validationError);
      return;
    }

    try {
      setIsLoading(true);
      const response = await RegisterUser(formData, "users/register");
      if (response.status === 201) {
        navigate("/login");
      } else if (response.status === 400) {
        console.error(response.data.error);
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function validateForm() {
    if (formData.firstName.length < 3) {
      return "First name must be at least 3 characters";
    }
    if (formData.lastName.length < 3) {
      return "Last name must be at least 3 characters";
    }
    if (formData.email.length < 3) {
      return "Email must be at least 3 characters";
    }
    if (formData.password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return null;
  }

  return (
    <>
      {isLoading && (
        <Stack
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(113, 113, 113, 0.64)",
            zIndex: 1000,
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <TMLoadingPage />
        </Stack>
      )}
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
          className="register-form"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            overflow: "auto",
          }}
        >
          <Stack sx={{ marginTop: 10 }}>
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
              label="Your first name"
              type="text"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              name="firstName"
              error={formData.firstName.length < 3}
              helperText={
                formData.firstName.length < 3
                  ? "First name must be at least 3 characters"
                  : ""
              }
            />
            <TMTextField
              label="Your last name"
              type="text"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              name="lastName"
              error={formData.lastName.length < 3}
              helperText={
                formData.lastName.length < 3
                  ? "Last name must be at least 3 characters"
                  : ""
              }
            />
            <TMTextField
              label="Your email address"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              error={formData.email.length < 3}
              helperText={
                formData.email.length < 3
                  ? "Email must be at least 3 characters"
                  : ""
              }
            />
            <TMTextField
              label="Set a password"
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              name="password"
              error={formData.password.length < 8}
              helperText={
                formData.password.length < 8
                  ? "Password must be at least 8 characters"
                  : ""
              }
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
              marginBottom: 10,
            }}
          >
            <TMButton label="Sign Up" onClick={handleSubmit} />
            <Typography sx={{ textAlign: "center", fontSize: 11 }}>
              Already have an account?{" "}
              <span
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
              >
                Sign in
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AdminRegister;
