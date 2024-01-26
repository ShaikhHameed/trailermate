import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
  {
    email: String,
    password: String,
    last_loggedin: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema);

export default Users;
