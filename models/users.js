import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    firstname:String,
    lastname: String,
    email: String,
    phone:Number,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default Users;
