"use client";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import AnimeCard from "../AnimeCard";

const AnimeCarousel = ({ animelist, title, className }) => {
  const bp = {
    380: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  };

  return (
    <div className={`${className}`}>
      <div>
        <h1 className="text-white text-2xl pl-1 font-semibold mb-2">{title}</h1>
      </div>

      <Swiper
        breakpoints={bp}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {animelist.map((anime) => (
          <SwiperSlide key={anime.id}>
            <AnimeCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default AnimeCarousel;
