import jwt from "jsonwebtoken";

export function generateJWT(payload: { id?: string; email: string }) {
  try {
    return jwt.sign(
      {
        ...payload,
        expire: "12h",
      },
      process.env.JWT_SECRET as string
    );
  } catch (error) {
    console.error("JWT generation error:", error);
    return null;
  }
}

export function verifyJWT(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      email: string;
      expire: string;
    };
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
}
