import connectMongoDb from "@/lib/mongo";
import Users from "@/models/users";
import { NextResponse } from "next/server";


export async function POST(req){

    const {email,password} = await req.json();

    await connectMongoDb();
    await Users.create({email,password});

    return NextResponse.json({"message":"User Added","status":"ok"},{status:200});

}
