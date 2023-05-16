"use client";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import AnimeCard from "../AnimeCard";

const AnimeCarousel = ({ animelist, title, className, tag }) => {
  const bp = {
    380: {
      slidesPerView: 3.15,
      spaceBetween: 5,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
    },
    700: {
      slidesPerView: 4.23,
      spaceBetween: 8,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
    },
    1200: {
      slidesPerView: 5.3,
      spaceBetween: 8,
      slidesOffsetBefore: 0,
    },
  };

  return (
    <div className={`${className}`}>
      <div>
        <h1 className="text-white text-xl md:text-2xl pl-[9px] xl:pl-0 font-semibold mb-2">
          {title}
        </h1>
      </div>

      <Swiper
        breakpoints={bp}
        slidesPerView={2.15}
        spaceBetween={5}
        modules={[Navigation]}
        navigation
        slidesOffsetBefore={10}
        slidesOffsetAfter={10}
      >
        {animelist.map((anime) => (
          <SwiperSlide key={anime.id}>
            <AnimeCard anime={anime} tag={tag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default AnimeCarousel;
