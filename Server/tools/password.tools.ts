import bcrypt from "bcrypt";

const saltRounds = 10;

export async function hashPassword(password: string): Promise<string> {
  if (!password) {
    throw new Error("Password is required to hash");
  }
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(
  inputPassword: string,
  hashedPassword: string
) {
  return bcrypt.compare(inputPassword, hashedPassword);
}
