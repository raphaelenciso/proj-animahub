"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const HomeCarousel = ({ animelist }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {animelist.map((anime) => (
        <SwiperSlide key={anime.id}>
          <Link href={`/details/${anime.id}`}>
            <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] cursor-pointer relative">
              <img
                src={anime.cover}
                alt={anime.id}
                className="w-full h-full object-cover "
                loading="lazy"
              />

              <div className="absolute top-0 ||||| bg-gradient-to-t from-[#000000cf]  to-[#0000005f] w-full h-full my-0">
                <div className=" text-white h-full flex flex-col justify-center gap-2 w-[90%] max-w-7xl mx-auto  ">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary-main via-pink-400 to-secondary-main">
                    {anime.title.english
                      ? anime.title.english
                      : anime.title.romaji}
                  </p>

                  <p
                    className="text-sm lg:text-base w-full lg:w-[50%] hidden md:block"
                    dangerouslySetInnerHTML={{
                      __html: anime.description.slice(0, 200) + "...",
                    }}
                  ></p>
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
