import connectMongoDb from "@/lib/mongo";
import Movies from "@/models/movies";
import WatchList from "@/models/watchlist";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt');
  const decodedUserToken = jwt.verify(token.value, process.env.JWT_SECRET);
  const sessionUser = decodedUserToken.userId;

  await connectMongoDb();

  // Fetch user's watchlist
  const userWatchList = await WatchList.find({ userId: sessionUser });

  // If no watchlist items found, return empty array
  if (!userWatchList.length) {
    return NextResponse.json([], { status: 200 });
  }

  // Array to store movie details
  const allWatchListMovies = [];

  // Loop through watchlist items and fetch movie details (using async/await)
  for (const watchListItem of userWatchList) {
    const movieId = watchListItem.movieId;

    try {
      const watchListMovie = await Movies.findById(movieId); // Use findById for efficiency
      allWatchListMovies.push(watchListMovie || null); // Add movie or null for missing movies
    } catch (error) {
      console.error("Error fetching movie:", error);
      // Handle errors appropriately (e.g., log error and continue)
    }
  }

  return NextResponse.json(allWatchListMovies, { status: 200 });
}
