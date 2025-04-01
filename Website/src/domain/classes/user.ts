export class User {
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

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.phoneNumber = user.phoneNumber;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.dateOfBirth = user.dateOfBirth;
    this.profilePicture = user.profilePicture;
    this.bio = user.bio;
    this.languagePreference = user.languagePreference;
    this.timezone = user.timezone;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.password = user.password;
  }
}
