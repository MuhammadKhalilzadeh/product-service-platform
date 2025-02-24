import { mockUsers } from "../data/user.mock.data";
import User from "../../models/user";

export function getAllMockUsers() {
  return mockUsers;
}
export function createNewMockUser(user: User) {
  mockUsers.push(user);
  return user;
}
