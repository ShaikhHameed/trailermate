import connectMongoDb from "@/lib/mongo";
import WatchList from "@/models/watchlist";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';



export async function GET(req,context){
    const {params} = context;
    const movie = params.movie;

    const cookieStore = cookies()
    const token = cookieStore.get('jwt');
    const DecodeuserToken = jwt.verify(token.value,process.env.JWT_SECRET); 
    const userId = DecodeuserToken.userId;
    await connectMongoDb();

    try{
        const checkLists = await WatchList.findOne({userId,movieId:movie});
        if(checkLists){
            return NextResponse.json({status:200,'listed':true});
        }
        else{
            return NextResponse.json({status:200,'listed':false});
        }
    }catch(err){
        return NextResponse.json({status:400,'message':'could not make changes'});
    }
    
}