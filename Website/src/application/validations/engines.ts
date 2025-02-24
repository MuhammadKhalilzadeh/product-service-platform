import { validateName, validatePhoneNumber, validateEmail } from "./validators";

export function createSuperAdminValidationEngine({
  firstname,
  lastname,
  email,
  phonenumber,
  password,
  repassword,
}: {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
  repassword: string;
}) {
  const errors = [];

  if (
    !validateName(firstname, 2, 50, false, false, true, true, /^[a-zA-Z]+$/)
  ) {
    errors.push(
      "Firstname must be between 2 and 50 characters and contain only letters."
    );
  }

  if (!validateName(lastname, 2, 50, false, false, true, true, /^[a-zA-Z]+$/)) {
    errors.push(
      "Lastname must be between 2 and 50 characters and contain only letters."
    );
  }

  if (!validateEmail(email)) {
    errors.push("Email address is not valid.");
  }

  if (!validatePhoneNumber(phonenumber)) {
    errors.push("Phone number is not valid.");
  }

  if (password !== repassword) {
    errors.push("Passwords do not match.");
  }

  if (!validateName(password, 8, 100, true, true, true, true, /.*/)) {
    errors.push(
      "Password must be between 8 and 100 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function loginValidationEngine({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const errors = [];

  if (!email) {
    errors.push("Email address cannot be empty.");
  } else if (!validateEmail(email)) {
    errors.push("Email address is not valid.");
  }

  if (!password) {
    errors.push("Password cannot be empty.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
