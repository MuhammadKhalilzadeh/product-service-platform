import { Stack, Typography } from "@mui/material";
import TMSidePlate from "../../../components/Plates";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SuccessfulPasswordChange = () => {
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
        <Stack gap={2}>
          <CheckCircleOutlineIcon sx={{ fontSize: 150, color: "green" }} />
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
            Password changed successfully
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SuccessfulPasswordChange;
