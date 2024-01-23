import connectMongoDb from "@/lib/mongo";
import Movies from "@/models/movies";
import { NextResponse } from "next/server";


export async function GET(){
    await connectMongoDb();
    const movies = await Movies.find();

    return NextResponse.json(movies);
}