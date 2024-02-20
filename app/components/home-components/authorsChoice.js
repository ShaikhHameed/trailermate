import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import TallMovieCard from '../tallMovieCard';
import { Suspense } from 'react';


export default function AuthorsChoiceSlider(){

    return (
      <>
            <Swiper
            spaceBetween={15}
            slidesPerView="auto"
            draggable={true}
            className="mySwiper"
        >
                <SwiperSlide><TallMovieCard/></SwiperSlide>
                <SwiperSlide><TallMovieCard/></SwiperSlide>
                <SwiperSlide><TallMovieCard/></SwiperSlide>
                <SwiperSlide><TallMovieCard/></SwiperSlide>
                <SwiperSlide><TallMovieCard/></SwiperSlide>
                <SwiperSlide><TallMovieCard/></SwiperSlide>
                <SwiperSlide><TallMovieCard/></SwiperSlide>
            
            </Swiper>
      </>
      )

}