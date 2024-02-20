'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { SlHeart } from "react-icons/sl";
import { MdPlaylistAdd } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";






export default function WatchMovie() {
  // Loading Animation 
  const [isLoading, setisLoading] = useState(true);

  const [trailer, setTrailer] = useState(null);
  const searchParam = useSearchParams();
  const movieId = searchParam.get('id');
  const [movieInfo,setMovieInfo] = useState({});

  const [liked,setLiked] = useState(false);
  const [watchedList,setWatchedList] = useState(false);

  const router = useRouter();

  // const {id} = router.query();

  // alert(id);

  const changeLike=()=>{
    liked==true ? setLiked(false) : setLiked(true);
  }
  const changeWatchList=()=>{
    watchedList==true ? setWatchedList(false) : setWatchedList(true);
  }

  useEffect(() => {
    (async () => {
      const fetchMovie = await fetch(`/api/getsingleMovie?id=${movieId}`, {
        method: 'GET',
      });
  
      const response = await fetchMovie.json();
      setTrailer(response.movies.trailer);
      setMovieInfo(response.movies);
      setisLoading(false);
      console.log(response);
    })();
  }, [movieId]);

  return (
    <>
     
      <div className='loading'>
        
      </div>
      
      <div className="row m-0">
        <div className="col-md-8">
        {isLoading? (
          <>
            <div className='video-skeleton'></div>
            <div className='video-content-skeleton'></div>
          </>
        ):(
          <>
          <iframe
            width="100%"
            height="550px"
            className="rounded-4"
            src={trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          
          <div className='video-actions-info'>
            <div className='row align-items-center'>
              <div className='col-md-8'>
                 <h4 className='video-title h4 fw-normal'>{movieInfo.name}</h4>
                 <p className='small'>{movieInfo.description}</p>
              </div>
              <div className='col-md-4'>
                <div className='video-actions'>
                  <div className='like-button' onClick={changeLike} style={{cursor:'pointer'}} >
                    <SlHeart size={25} color={liked==true ? 'red' : 'white'}  />
                    </div>
                  <div className='like-button' onClick={changeWatchList} style={{cursor:'pointer'}} >
                    {watchedList==true? <MdPlaylistAddCheck size={25} /> : <MdPlaylistAdd size={25} /> }
                </div>
                </div>
              </div>
            </div>
            
          </div>
          </>
         )}
        </div>
      </div>
     
      </>
  );
}
