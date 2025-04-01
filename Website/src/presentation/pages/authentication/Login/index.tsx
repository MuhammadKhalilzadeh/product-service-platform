import { Stack, Typography } from "@mui/material";
import ServiceButton from "../../../components/Buttons/services/serviceButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import TMSidePlate from "../../../components/Plates";
import { useState } from "react";
import TMLoadingPage from "../../../components/loading";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../../../application/repositories/user.repo";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
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
      // Replace with your actual login API call
      const response = await LoginUser(formData, "users/login");
      if (response.status === 202) {
        navigate("/admin-reg"); // or wherever you want to redirect after login
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function validateForm() {
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
                textAlign: "center",
              }}
            >
              Enter your credentials
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
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TMButton label="Sign in" onClick={handleSubmit} />
            <Typography sx={{ textAlign: "center", fontSize: 11 }}>
              Don't have an account?{" "}
              <span
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/admin-reg")}
              >
                Sign up
              </span>
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 11,
              }}
            >
              Forgot your password?
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 11,
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Reset password
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
