import { EntityPostRequest } from "../../infrastructure/api/endpoint";

const BASE_URL = "http://localhost:3000/";

export async function RegisterUser(
  data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  },
  url: string
) {
  const response = await EntityPostRequest(data, BASE_URL + url);
  return {
    status: response.status,
    data: response.data,
    message: response.statusText,
  };
}

export async function LoginUser(
  data: { email: string; password: string },
  url: string
) {
  const response = await EntityPostRequest(data, BASE_URL + url);
  return {
    status: response.status,
    data: response.data,
    message: response.statusText,
  };
}
