import { SxProps, TextField, Theme } from "@mui/material";

interface TMTextFieldProps {
  placeholder: string;
  type?: "text" | "email" | "date" | "password" | "tel" | "url";
  value?: any;
  onChange?: (e: any) => void;
  sx?: SxProps<Theme> | undefined;
  helperText?: string;
  error?: boolean;
}

const TMTextField: React.FC<TMTextFieldProps> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  sx,
  helperText,
  error,
}) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      sx={sx}
      helperText={helperText}
      error={error}
    />
  );
};

export default TMTextField;
