import { Stack } from "@mui/material";
import Logo from "../../assets/logos/tm-logo-png-white.png";

const TMSidePlate = () => {
  return (
    <Stack
      sx={{
        width: "fit-content",
        background:
          "linear-gradient(141deg, rgba(45,101,176,1) 10%, rgba(252,173,70,1) 92%)",
        height: "100%",
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{ padding: "80px 120px", width: 300 }}
      />
    </Stack>
  );
};

export default TMSidePlate;
