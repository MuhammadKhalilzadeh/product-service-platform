export type User = {
  // Unique Identification
  id?: string;
  email: string;
  username?: string;
  phoneNumber?: string;

  // Core Attributes
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  profilePicture?: string;
  bio?: string;
  languagePreference?: string;
  timezone?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // Authentication & Security
  password: string;
};
