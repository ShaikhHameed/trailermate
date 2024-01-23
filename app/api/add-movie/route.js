import connectMongoDb from "@/lib/mongo";
import Movies from "@/models/movies";
import { NextResponse } from "next/server";


export async function POST(req){
    const {name,poster,description,trailer} = await req.json();
    console.log(req);

    await connectMongoDb();
    await Movies.create({name,poster,description,trailer});

    return NextResponse.json({'message':'Movie Added'},{'status':200});
}

export async function GET(){
    await connectMongoDb();
    const movies = await Movies.find();

    return NextResponse.json({movies});
}