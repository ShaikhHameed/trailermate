import connectMongoDb from "@/lib/mongo";
import TopRecomendation from "@/models/Toprecomendation";
import Movies from "@/models/movies";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(){

    await connectMongoDb();

    const Recomended = await TopRecomendation.find({});
    
    if(!Recomended.length){
        return NextResponse.json({},{status:200});
    }

    const MoviesIds = Recomended.map(TopMovies=>TopMovies.movieId);

    const getMovies = await Movies.find({_id:{$in:MoviesIds}});
    

    return NextResponse.json(getMovies,{status:200});
}