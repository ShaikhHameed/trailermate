'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { MdLocalMovies } from "react-icons/md";
import MovieCard from "../components/moviecard";
import MultipleMovieLoadingHorizontal from "../components/multipleMovieLoadingHorizontal";
import HomeBanner from "../components/home-components/home-banners";
import { FaMedal } from "react-icons/fa6";
import AuthorsChoiceSlider from "../components/home-components/authorsChoice";



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
    }
    catch(err){
        
    }
    } )();

    
  },[]);


  return (

    <>

      <HomeBanner/>




      {/* Hand Picked Movies  */}
      <div className="my-4">
        <h4 className="text-center h5 m-0"><FaMedal size={20} /> Author's Top Recommendations</h4>
      </div>
      <AuthorsChoiceSlider/>

      {/* All Movies Catalogues */}
      <div className="my-4">
        <h4 className="text-center h5 m-0"><MdLocalMovies size={20} /> Best Movies of All Time </h4>
      </div>
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
