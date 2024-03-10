import connectMongoDb from "@/lib/mongo";
import Likes from "@/models/liked";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';



export async function DELETE(req,context){
    const {params} = context;
    const movie = params.movie;

    const cookieStore = cookies()
    const token = cookieStore.get('jwt');
    const DecodeuserToken = jwt.verify(token.value,process.env.JWT_SECRET); 
    const userId = DecodeuserToken.userId;
    await connectMongoDb();

    try{
        const deleteLiked = await Likes.deleteOne({movieId:movie,userId:userId});
        return NextResponse.json({status:200});
    }catch(err){
        return NextResponse.json({status:400,'message':'coul not make changes'});
    }
    
}