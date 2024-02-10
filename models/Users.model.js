import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name should atleast have 2 charactes"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model("user", UserSchema);

export default UserModel;
