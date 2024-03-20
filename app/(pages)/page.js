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
  const PAGE_SIZE = 20;

  const [allMovies, setAllMovies] = useState([]);
  const [loadedMovies, setLoadedMovies] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMoreMovie,setLoadingMoreMovies] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      
      try {
        const response = await fetch(`/api/get-movies?page=${currentPage}&limit=${PAGE_SIZE}`,{
          method:'GET',
        });
        const newMovies = await response.json();

        setTimeout(()=>{
          setAllMovies((prevMovies) => [...prevMovies, ...newMovies]);
          setLoadedMovies(true);
          setHasMore(newMovies.length === PAGE_SIZE); // Update hasMore based on received data length
        },5000)
       
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handleScroll = async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) { // Load near bottom with buffer
      setCurrentPage(currentPage + 1);
      setLoadingMoreMovies(true);
    }
    else{
      setLoadingMoreMovies(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]); // Only add scroll listener when hasMore is true


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
        {loadedMovies &&
          allMovies.map((movie, index) => (
            <div className="col-md-4 col-lg-3 col-12" key={movie._id}>
              <MovieCard data={movie} />
            </div>
          ))}
        {loadedMovies && !hasMore && <p>No more movies to load.</p>}
        {/* {!loadedMovies && <MultipleMovieLoadingHorizontal/>} */}
      </div>
      ):(
          <MultipleMovieLoadingHorizontal/>
      )}

    {loadingMoreMovie? <MultipleMovieLoadingHorizontal/>:''}
    </>
  );
}
