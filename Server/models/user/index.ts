type User = {
  // Unique Identification
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
  createdAt: Date;
  updatedAt: Date;

  // Authentication & Security
  passwordHash: string;
  password?: string;
};

export default User;
