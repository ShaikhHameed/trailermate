'use client';

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {

  const [allMovies, setAllMovies] = useState([]);


  useEffect (()=>{
    const getAllMovies = async() =>{
      try{

        const getMovies = await fetch('/api/get-movies',{
          method:'GET',
        });

        const moviesData = await getMovies.json();
        
        setAllMovies(moviesData);

        console.log(allMovies); // Add this line
    }
    catch(err){
        
    }
    }

    getAllMovies();
  },[]);


  return (

    <>
      <h1>Home</h1>

      <div className="movies-row">

        {allMovies.map((movie,index)=>(
          <Link href={`watch-movie?id=${movie._id}`}><div className="movie-card" key={movie._id} >
            <div className="movie-info">
              <h4 className="card-movie-title">{movie.name}</h4>
              <div className="movie-card-description">{movie.description}</div>
            </div>
            <div className="movie-card-thumbnail">
              <img src={movie.poster} />
            </div>
          </div></Link>
))}
      </div>


    </>
  );
}
