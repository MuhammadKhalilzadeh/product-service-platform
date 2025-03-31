import { Button } from "@mui/material";

const TMButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: 200,
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderRadius: "8px",
        padding: "5px 10px",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        border: "1px solid #000000", // Changed border color to match the text color
        "&:hover": {
          backgroundColor: "#FFFFFF",
          opacity: 0.8,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default TMButton;
