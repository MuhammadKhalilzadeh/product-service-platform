import { isEmail, isMobilePhone } from "validator";

export function validateName(
  input: string,
  min: number,
  max: number,
  hasSpecialChar: boolean,
  hasANumber: boolean,
  hasUpperCase: boolean,
  hasLowerCase: boolean,
  pattern: RegExp
): boolean {
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  const numbers = /[0-9]/;
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;

  if (input.length < min || input.length > max) return false;
  if (hasSpecialChar && !specialChars.test(input)) return false;
  if (hasANumber && !numbers.test(input)) return false;
  if (hasUpperCase && !uppercase.test(input)) return false;
  if (hasLowerCase && !lowercase.test(input)) return false;
  if (!pattern.test(input)) return false;

  return true;
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  return isMobilePhone(phoneNumber, undefined, undefined);
}

export function validateEmail(email: string): boolean {
  return isEmail(email);
}
