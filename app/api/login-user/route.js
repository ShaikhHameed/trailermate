import connectMongoDb from "@/lib/mongo";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

export async function POST(req) {

  // Connect to MongoDB
  await connectMongoDb();

  const request = await req.json();
  const email = request.email;
  const password = request.password;

  const user = await Users.findOne({ email }); // Replace with your actual MongoDB query

  if (user && user.password === password) {

    const providers = [
        CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const user = await Users.findOne({ username: credentials.username }); // Replace with your actual MongoDB query
    
          if (user && user.password === credentials.password) {
            // Any object returned will be saved in `user` property of the JWT
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                };
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
          }
        },
      }),
    ];


    return NextResponse.json({ message: "Login successful", status: "ok" }, { status: 200 });

     

  } else {
    return NextResponse.json({ message: "Invalid credentials", status: "error" }, { status: 200 });
  }

}


