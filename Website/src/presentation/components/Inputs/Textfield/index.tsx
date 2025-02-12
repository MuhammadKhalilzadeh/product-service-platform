import { TextField } from "@mui/material";

interface TMTextFieldProps {
  placeholder: string;
  type?: "text" | "email" | "date" | "password" | "tel" | "url";
}

const TMTextField: React.FC<TMTextFieldProps> = ({
  placeholder,
  type = "text",
}) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default TMTextField;
