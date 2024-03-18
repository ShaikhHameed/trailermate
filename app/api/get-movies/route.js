import connectMongoDb from "@/lib/mongo";
import Movies from "@/models/movies";
import { NextResponse } from "next/server";


export const revalidate = 1;

export async function GET(){
    await connectMongoDb();
    const movies = await Movies.find();

    return NextResponse.json(movies);
}