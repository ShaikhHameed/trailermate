'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'
import MovieCard from "../components/moviecard";
import MultipleMovieLoadingHorizontal from "../components/multipleMovieLoadingHorizontal";



export default function Home() {

  const [AllMovies, setAllMovies] = useState([]);
  const [loadedMovies,setLoadedMovies] = useState(false);


  useEffect (()=>{
    ( async() =>{
      try{

        const getMovies = await fetch('/api/get-movies',{
          method:'GET',
        });

        const moviesData = await getMovies.json();
        
        setAllMovies(moviesData);
        setLoadedMovies(true);

        console.log(AllMovies); // Add this line
    }
    catch(err){
        
    }
    } )();

    
  },[]);


  return (

    <>
      <h1>Home</h1>
      {loadedMovies?(
      <div className="row g-3">
        
        {AllMovies.map((movie,item)=>( 
          <div className="col-md-4 col-lg-3 col-12" key={movie._id}>
            <MovieCard data={movie} />
          </div>
          ))}
          
      </div>
      ):(
          <MultipleMovieLoadingHorizontal/>
      )}

    </>
  );
}
