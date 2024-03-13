import mongoose, { Schema } from "mongoose";

const TopRecomendationSchema = new Schema(
  {
    movieId: String,
  },
  {
    timestamps: true,
  }
);

const TopRecomendation = mongoose.models.TopRecomendation || mongoose.model("TopRecomendation", TopRecomendationSchema);

export default TopRecomendation;
