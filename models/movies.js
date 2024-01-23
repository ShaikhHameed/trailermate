import mongoose , {Schema} from "mongoose";


const MovieScheme =  new Schema(
    {
        name:String,
        poster:String,
        description:String,
        trailer:String,
    },{
        timestamps:true,
    }
)


const Movies = mongoose.models.Movies || mongoose.model("Movies",MovieScheme);


export default Movies;