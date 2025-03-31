import { Stack, Typography } from "@mui/material";

const TMCheck = ({ label, checked }: { label: string; checked?: boolean }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Stack
        sx={{
          width: 16,
          height: 16,
          border: `2px solid ${checked ? "#00FF00" : "#FF0000"}`,
          borderRadius: "50%",
          backgroundColor: checked ? "#00FF00" : "#FF0000",
        }}
      />
      <Typography
        sx={{
          fontSize: 13,
          fontWeight: 400,
          color: "#000000",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default TMCheck;
