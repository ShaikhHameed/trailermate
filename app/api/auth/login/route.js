import connectMongoDb from "@/lib/mongo";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'



export async function POST(req) {

  try {
    await connectMongoDb();

    const request = await req.json();
    const email = request.email;
    const password = request.password;

    const user = await Users.findOne({ email });

    if (user && user.password === password) {

      // I Want to create Next Auth JWT Here 
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '28d' });
      cookies().set('jwt', token, { httpOnly: true, secure: true, maxAge: 28 * 24 * 60 * 60 * 1000 }); // Set the JWT cookie


      return NextResponse.json({ message: "Login successful", status: "ok" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid credentials", status: "error" }, { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error logging in", status: "error"  }, { status: 500 });
  }


};
