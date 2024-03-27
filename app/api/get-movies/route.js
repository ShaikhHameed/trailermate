import connectMongoDb from "@/lib/mongo";
import Movies from "@/models/movies";
import { NextResponse } from "next/server";


export const revalidate = 0;

export async function GET(req) {

    const params = req.nextUrl.searchParams;
    const pageParams = params.get("page");
    const limitsParams = params.get("limit");

   const PAGE_SIZE = 20;

        
    const page = pageParams || 1;
    const limit = limitsParams || PAGE_SIZE; // Ensure valid limit
    await connectMongoDb();
    const movies = await Movies.find().skip((page - 1) * limit).limit(limit);
    console.log(page,limit);
    return NextResponse.json(movies);
  }