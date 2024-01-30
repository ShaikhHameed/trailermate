'use client';

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {

  const [AllMovies, setAllMovies] = useState([]);


  useEffect (()=>{
    ( async() =>{
      try{

        const getMovies = await fetch('/api/get-movies',{
          method:'GET',
        });

        const moviesData = await getMovies.json();
        
        setAllMovies(moviesData);

        console.log(AllMovies); // Add this line
    }
    catch(err){
        
    }
    } )();

    
  },[]);


  return (

    <>
      <h1>Home</h1>

      <div className="movies-row">

        {AllMovies.map((movie,item)=>(
          <Link href={`watch-movie?id=${movie._id}`} key={movie._id}><div className="movie-card"  >
            <div className="movie-info">
              <h4 className="card-movie-title">{movie.name}</h4>
              <div className="movie-card-description">{movie.description}</div>
            </div>
            <div className="movie-card-thumbnail">
              <img src={movie.poster} alt={movie.name} />
            </div>
          </div></Link>
))}
      </div>


    </>
  );
}
