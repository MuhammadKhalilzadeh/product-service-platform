import { Button, SxProps, Theme } from "@mui/material";

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
  sx: SxProps<Theme> | undefined;
}

const TMButton: React.FC<TMButtonProps> = ({
  label,
  variant = "contained",
  color = "primary",
  onClick,
  sx,
}) => {
  return (
    <Button
      variant={variant}
      disableElevation
      color={color}
      sx={sx}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default TMButton;
