import connectMongoDb from "@/lib/mongo";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(req){

    await connectMongoDb();
    
    try{
    const request = await req.json();
    const user = request.user;    
    const userInfo = await Users.findById(user);
    return NextResponse.json({"status":"ok","message":"user-found", "user_info":{"firstname":userInfo.firstname,"lastname":userInfo.lastname,"email":userInfo.email}},{status:200});
    console.log(userInfo);
    }
    catch(err){
        return NextResponse.json({"status":"ERROR","message":err},{status:400});
        console.log(err);
    }

}