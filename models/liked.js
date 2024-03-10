import mongoose, { Schema } from "mongoose";

const LikesScheme = new Schema(
  {
    userId: String,
    movieId:String,
  },
  {
    timestamps: true,
  }
);

const Likes = mongoose.models.Likes || mongoose.model("Likes", LikesScheme);

export default Likes;
