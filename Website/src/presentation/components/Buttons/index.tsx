import { Button } from "@mui/material";

interface TMButtonProps {
  label: string;
}

const TMButton: React.FC<TMButtonProps> = ({ label }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      color="primary"
      sx={{ textTransform: "inherit" }}
    >
      {label}
    </Button>
  );
};

export default TMButton;
