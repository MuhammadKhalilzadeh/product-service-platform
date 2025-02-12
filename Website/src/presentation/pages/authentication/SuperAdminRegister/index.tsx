import { Stack } from "@mui/material";
import TMLogo from "../../../assets/logos/tm-logo-png-black.png";
import TMTextField from "../../../components/Inputs/Textfield";
import TMButton from "../../../components/Buttons";

const SuperAdminRegister = () => {
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
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <img src={TMLogo} alt="TMLogo" style={{ width: 200 }} />
        <Stack sx={{ gap: 2 }}>
          <TMTextField placeholder="First name" type="text" />
          <TMTextField placeholder="Last name" type="text" />
          <TMTextField placeholder="Email address" type="email" />
          <TMTextField placeholder="Phone no." type="tel" />
          <TMTextField placeholder="Password" type="password" />
          <TMTextField placeholder="Repeat password" type="password" />
        </Stack>
        <TMButton label="Create Account" />
      </Stack>
    </Stack>
  );
};

export default SuperAdminRegister;
