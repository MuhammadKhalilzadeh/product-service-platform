import { Button } from "@mui/material";

interface TMButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  onClick?: () => void;
}

const TMButton: React.FC<TMButtonProps> = ({
  label,
  variant = "contained",
  color = "primary",
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      disableElevation
      color={color}
      sx={{ textTransform: "inherit" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default TMButton;
