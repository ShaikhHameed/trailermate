import connectMongoDb from "@/lib/mongo";
import Likes from "@/models/liked";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';

export async function POST(req,context){

    const {params} = context;
    const movie = params.movie;

    const cookieStore = cookies()
    const token = cookieStore.get('jwt');
    const DecodeuserToken = jwt.verify(token.value,process.env.JWT_SECRET); 
    const userId = DecodeuserToken.userId;
    await connectMongoDb();

    try{
        const getLikes = await Likes.findOne({movieId:movie,userId:userId});
        if(getLikes){
            return NextResponse.json({status:200,'liked':true});
        }
        else{
            return NextResponse.json({status:200,'liked':false});
        }
    }catch(err){
        return NextResponse.json({status:400,'message':'coul not make changes'});
    }

}