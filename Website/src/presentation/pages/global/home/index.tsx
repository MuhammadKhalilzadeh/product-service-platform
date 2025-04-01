import { Stack } from "@mui/material";
import TMMapInstance from "../../../components/Maps";

const TMGlobalMap = () => {
  return (
    <Stack sx={{ padding: 2, width: "100%", height: "100%" }}>
      <TMMapInstance />
    </Stack>
  );
};

export default TMGlobalMap;
