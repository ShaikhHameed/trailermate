import connectMongoDb from "@/lib/mongo";
import Movies from "@/models/movies";
import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";


export async function GET(req){
    const url = new URL(req.url)
    const params = new URLSearchParams(url.search)
    const movieId = params.get('id') 

    await connectMongoDb();
    const movies = await Movies.findOne({_id: movieId});

    return NextResponse.json({movies},{status:200});
}