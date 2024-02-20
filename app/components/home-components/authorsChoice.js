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
            spaceBetween={30}
            modules={[Pagination]}
            draggable={true}
            breakpoints={{
                1280: {
                    slidesPerView: 6,
                },
                992: {
                    slidesPerView: 4,
                },
                640: {
                slidesPerView: 2,
                },

            }}
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