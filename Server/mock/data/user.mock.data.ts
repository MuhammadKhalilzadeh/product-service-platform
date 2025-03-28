import User from "../../models/user";

export const mockUsers: User[] = [
  {
    email: "user1@example.com",
    username: "user1",
    phoneNumber: "123-456-7890",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: new Date("1990-01-01"),
    profilePicture: "user1-profile-picture.jpg",
    bio: "Software Engineer",
    languagePreference: "English",
    timezone: "UTC",
    createdAt: new Date(),
    updatedAt: new Date(),
    passwordHash: "hashedPassword1",
  },
  {
    email: "user2@example.com",
    username: "user2",
    phoneNumber: "098-765-4321",
    firstName: "Jane",
    lastName: "Smith",
    dateOfBirth: new Date("1995-06-15"),
    profilePicture: "user2-profile-picture.jpg",
    bio: "Data Scientist",
    languagePreference: "Spanish",
    timezone: "America/New_York",
    createdAt: new Date(),
    updatedAt: new Date(),
    passwordHash: "hashedPassword2",
  },
];
