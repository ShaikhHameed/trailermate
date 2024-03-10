import connectMongoDb from "@/lib/mongo";
import Likes from "@/models/liked";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';



export async function POST(req,context){
    const {params} = context;
    const movieId = params.movie;

    const cookieStore = cookies()
    const token = cookieStore.get('jwt');
    const DecodeuserToken = jwt.verify(token.value,process.env.JWT_SECRET); 
    const userId = DecodeuserToken.userId;


    try{
        await connectMongoDb();
        await Likes.create({ userId, movieId });

        return NextResponse.json({status:200});
    }catch(err){
        return NextResponse.json({status:400,'message':'Could not make changes','Error':err});
    }
    
}