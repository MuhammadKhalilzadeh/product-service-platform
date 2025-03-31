import { Stack, Typography } from "@mui/material";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";
import TMSidePlate from "../../../components/Plates";
import { useState } from "react";
import TMLoadingPage from "../../../components/loading";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.email.length < 3) {
      return "Email must be at least 3 characters";
    }
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      console.error(validationError);
      return;
    }

    try {
      setIsLoading(true);
      // Add your API call here
      console.log(formData);
    } catch (error) {
      console.error("Password reset request failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
                fontSize: 32,
                fontWeight: "bold",
              }}
            >
              Forgot your password?
            </Typography>
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
          </Stack>
          <TMButton label="Get a code" onClick={handleSubmit} />
        </Stack>
      </Stack>
    </>
  );
};

export default ForgotPassword;
