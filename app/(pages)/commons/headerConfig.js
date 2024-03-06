'use server';
import jwt from 'jsonwebtoken';
import HeaderLayout from "./headerLayout";
import { cookies } from 'next/headers'


export default async function HeaderConfig({ req, res }) {
    const cookieStore = cookies()
    const token = cookieStore.get('jwt')
    
    if(token){
        var DecodeuserToken = jwt.verify(token.value,process.env.JWT_SECRET); 
    }
    else{
        var DecodeuserToken = {userId :''}
    }
    // const verifyJWT = jwt.verify(); 
    return (
      <HeaderLayout  userLoginCheck={DecodeuserToken} /> // Pass userLoggedIn prop
    );
  }
  