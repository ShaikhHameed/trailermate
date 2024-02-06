'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'



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

      <div className="row g-3">

        {AllMovies.map((movie,item)=>(
          <div className="col-md-4 col-lg-3 col-12" key={movie._id}>
          <Link href={`watch-movie?id=${movie._id}`} ><div className="movie-card"  >
            
            <div className="movie-info">
              <h4 className="card-movie-title">{movie.name}</h4>
              <div className="movie-card-description">{movie.description}</div>
            </div>
            <div className="movie-card-thumbnail">
              <img width={100} height={100} className="w-100"  src={movie.poster} alt={movie.name} />
            </div>
            
          </div></Link>
          </div>
))}
      </div>


    </>
  );
}
