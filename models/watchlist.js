import mongoose ,{ Schema } from "mongoose";

const WatchListSchema = new Schema(
    {
        userId:String,
        movieId:String,
    },
    {
        timestamps:true,
    }
);

const WatchList = mongoose.models.WatchList || mongoose.model("WatchList",WatchListSchema);

export default WatchList;

