import connectMongoDb from "@/lib/mongo";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import { signIn } from "@/auth";



export async function POST(req) {

  try {
    await connectMongoDb();

    const request = await req.json();
    const email = request.email;
    const password = request.password;

    const user = await Users.findOne({ email });

    if (user && user.password === password) {

      return NextResponse.json({ message: "Login successful", status: "ok" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid credentials", status: "error" }, { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error logging in", status: "error"  }, { status: 500 });
  }

};
