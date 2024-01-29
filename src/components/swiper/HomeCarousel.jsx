"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const HomeCarousel = ({ animelist }) => {
  console.log(animelist);

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
      navigation
      pagination
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {animelist.map((anime) => (
        <SwiperSlide key={anime.id}>
          <Link href={`/details/${anime.id}`}>
            <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] cursor-pointer relative">
              <img
                src={anime.cover ? anime.cover : anime.image}
                alt={anime.id}
                className="w-full h-full object-cover rounded-md "
                loading="lazy"
              />

              <div className="absolute top-0 w-full h-full my-0">
                <div className=" text-white h-full flex items-end">
                  <div className="bg-gradient-to-t w-full from-black via-[#0000009f] to-[#00000005] px-4 md:px-10 py-8">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary-main via-pink-400 to-secondary-main">
                      {anime.title.english
                        ? anime.title.english
                          ? anime.title.english
                          : anime.title.romaji
                        : anime.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeCarousel;
