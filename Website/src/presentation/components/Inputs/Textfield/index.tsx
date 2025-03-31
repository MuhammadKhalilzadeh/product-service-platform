import { TextField } from "@mui/material";

const TMTextField = ({
  label,
  type,
  required = false,
  error = false,
  helperText = "",
  disabled = false,
  value,
  onChange,
  name,
}: {
  label: string;
  type: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}) => {
  return (
    <TextField
      disabled={disabled}
      error={error}
      required={required}
      size="small"
      label={label}
      type={type}
      sx={{
        width: 300,
        border: "1px solid #DCDCDC",
        backgroundColor: "#F4F4F4",
        borderRadius: "8px",
        "& .MuiInputBase-input": {
          "&::placeholder": {
            color: "#DCDCDC",
          },
        },
      }}
      helperText={helperText}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default TMTextField;
