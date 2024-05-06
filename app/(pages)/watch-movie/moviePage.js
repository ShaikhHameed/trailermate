'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { SlHeart } from "react-icons/sl";
import { MdPlaylistAdd } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import Link from 'next/link';
import { FaMedal } from "react-icons/fa6";

import RecommendedMovies from '@/app/components/recommendedMovies';
import AuthorsChoiceSlider from '@/app/components/home-components/authorsChoice';






export default function MoviePage({user}) {
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

 
  // check for likes & Wish List
 
  useEffect(()=>{
    if(user){
     async function checkforLikes(){
        const checkLike = await fetch(`api/video-actions/check/${movieId}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        }); 
        const responseLiked = await (checkLike.json());
        if(responseLiked.liked==true){
          setLiked(true);
        }
        else{
          setLiked(false);
        }
      }

      async function checkforWishlist(){
        const checkListed = await fetch(`api/video-actions/watchlist/check/${movieId}`,{
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }); 
        const responseListed = await (checkListed.json());
        if(responseListed.listed==true){
          setWatchedList(true);
        }
        else{
          setWatchedList(false);
        }
      }

    checkforLikes();

    checkforWishlist();

  }

  },[])

  const changeLike= async()=>{
    if(liked==true){
      setLiked(false);
      const deleteLiked = fetch(`api/video-actions/unlike/${movieId}`,{
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });  

    }
    else{
      setLiked(true);
      const createLiked = fetch(`api/video-actions/like/${movieId}`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });  
    }
  }


  // WatchList Changes and Check 
  const changeWatchList=()=>{
     if(watchedList==true){
       setWatchedList(false);
       const removeWatchlisted = fetch(`api/video-actions/watchlist/remove/${movieId}`,{
        method:'GET',
        headers:{'Content-type':'aplication/json',},
       });
     }
     else{
       setWatchedList(true);
       const addToWatchList = fetch(`api/video-actions/watchlist/add/${movieId}`,{
        method:'GET',
        headers:{'Content-type':'aplication/json',},
       });  
     }
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
    })();
  }, [movieId]);

  return (
    <>
     
      <div className='loading'>
        
      </div>
      
      <div className="row m-0">
        <div className="col-md-9">
        {isLoading? (
          <>
            <div className='video-skeleton'></div>
            <div className='video-content-skeleton'></div>
          </>
        ):(
          <>
          <iframe
            className="rounded-4 youtube-frame"
            src={trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          
          
          </>
         )}
        </div>

         <div className="col-md-3">
          <div className='video-actions-info'>
              <div className='row gy-4 align-items-center'>

              <div className='col-12'>
                  <div className='video-actions'>
                    {user==false? (<>
                      <p className='login-message-video'>Please <Link href='/login'><span className='text-theme-yellow fw-semibold'>Login</span></Link> to Like or Add it to your watchlist</p>
                    </>):(<>  
                      <div className='like-button' onClick={changeLike} style={{cursor:'pointer'}} >
                      <SlHeart size={25} color={liked==true ? 'red' : 'white'}  />
                      </div>
                      <div className='like-button' onClick={changeWatchList} style={{cursor:'pointer'}} >
                      {watchedList==true? <MdPlaylistAddCheck size={25} color='#50C4ED' /> : <MdPlaylistAdd size={25} /> }
                      </div>
                      </>)}
                  </div>
                </div>

                <div className='col-12'>
                  <h4 className='video-title'>{movieInfo.name}</h4>
                  <p className='small'>{movieInfo.description}</p>
                </div>
                
              </div>
              
            </div>
         </div>

      </div>

      <div className='mt-5'>
        <h4 className="text-center h5 mb-4 m-0"><FaMedal size={20} /> Author's Top Recommendations</h4>
        <AuthorsChoiceSlider/>
      </div>
     
      </>
  );
}
