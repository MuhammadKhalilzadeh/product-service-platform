import { Stack } from "@mui/material";

const ServiceButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        padding: "8px",
        backgroundColor: "#F4F4F4",
        border: "1px solid #DCDCDC",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {icon}
    </Stack>
  );
};

export default ServiceButton;
