import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'



export async function GET(res){

   if(cookies().delete('jwt'))
      return NextResponse.json({status:200});
   else{
      return NextResponse.json({status:400},{'message':'Unable to logout'});
   }
}