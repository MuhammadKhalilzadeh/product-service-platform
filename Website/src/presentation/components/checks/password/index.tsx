import { Stack } from "@mui/material";
import TMCheck from "..";
import { validateString } from "../../../../application/validations/tools/string.validator";

const TMPasswordStrengthCheck = ({ password }: { password: string }) => {
  const min = 8;
  const max = 20;
  const specialChar = true;
  const number = true;
  const upperCase = true;
  const lowerCase = true;

  const validatePassword = validateString(
    password,
    min,
    max,
    specialChar,
    number,
    upperCase,
    lowerCase
  );

  return (
    <Stack gap={1}>
      <TMCheck
        label={`Password has at least ${min} and at most ${max} characters`}
        checked={validatePassword.length}
      />
      <TMCheck
        label={`Password has at least ${
          specialChar ? "1" : "0"
        } special character`}
        checked={validatePassword.specialChar}
      />
      <TMCheck
        label={`Password has at least ${number ? "1" : "0"} number`}
        checked={validatePassword.number}
      />
      <TMCheck
        label={`Password has at least ${
          upperCase ? "1" : "0"
        } uppercase letter`}
        checked={validatePassword.upperCase}
      />
      <TMCheck
        label={`Password has at least ${
          lowerCase ? "1" : "0"
        } lowercase letter`}
        checked={validatePassword.lowerCase}
      />
    </Stack>
  );
};

export default TMPasswordStrengthCheck;
