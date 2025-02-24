import mongoose, { Schema, Document } from "mongoose";
import User from "../models/user";

interface IUser extends Document, User {}

const UserSchema: Schema = new Schema({
  id: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String },
  phoneNumber: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date },
  profilePicture: { type: String },
  bio: { type: String },
  languagePreference: { type: String },
  timezone: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  passwordHash: { type: String, required: true },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
