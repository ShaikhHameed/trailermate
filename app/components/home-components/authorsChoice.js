import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import TallMovieCard from '../tallMovieCard';
import { Suspense, useEffect, useState } from 'react';


export default function AuthorsChoiceSlider(){

    const [loadingSlider,setLoadingSlider] = useState(false);
    const [recomeded,setrecomended] = useState([]);

    useEffect(()=>{

        async function getToprecomendation(){
            const TopRecomendation = await fetch('/api/top/getall',{
                method:'GET',
            });
            const allRecomendations = await TopRecomendation.json();
            setrecomended(allRecomendations);
        }

        getToprecomendation();
    },[]);

    return (
      <>
            <Swiper
            spaceBetween={15}
            slidesPerView="auto"
            draggable={true}
            className="mySwiper"
        >
                {recomeded.map((movie)=>(
                <SwiperSlide key={movie._id}><TallMovieCard movieId={movie._id} movieName={movie.name} movieInfo={movie.description} moviePoster={movie.poster} /></SwiperSlide>
                ))}
            </Swiper>
      </>
      )

}