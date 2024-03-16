import connectMongoDb from "@/lib/mongo";
import Likes from "@/models/liked";
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
  const userLiked = await Likes.find({ userId: sessionUser });

  // If no watchlist items found, return empty array
  if (!userLiked.length) {
    return NextResponse.json([], { status: 200 });
  }

  // Array to store movie details
  const allLikedMovies = [];

  // Loop through watchlist items and fetch movie details (using async/await)
  for (const likedItem of userLiked) {
    const movieId = likedItem.movieId;

    try {
      const allLikedMoviesList = await Movies.findById(movieId); // Use findById for efficiency
      allLikedMovies.push(allLikedMoviesList || null); // Add movie or null for missing movies
    } catch (error) {
      console.error("Error fetching movie:", error);
      // Handle errors appropriately (e.g., log error and continue)
    }
  }

  return NextResponse.json(allLikedMovies, { status: 200 });
}
