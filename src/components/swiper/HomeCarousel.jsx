"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { CiPlay1 } from "react-icons/ci";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import generateTitle from "@/utils/generateTitle";
import { outfit } from "@/utils/font";

const HomeCarousel = ({ animelist }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
      navigation
      pagination
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {animelist?.map((anime) => (
        <SwiperSlide key={anime.id}>
          <div className="w-full  h-[calc(100vh-300px)]  max-h-[600px] md:h-[400px] lg:h-[500px] cursor-pointer relative">
            <img
              src={anime.image}
              alt={anime.id}
              className="w-full h-full object-cover rounded-md  md:hidden bg-gradient-to-t "
              loading="lazy"
            />
            <img
              src={anime.cover ? anime.cover : anime.image}
              alt={anime.id}
              className="w-full h-full object-cover rounded-md hidden md:block "
              loading="lazy"
            />

            <div className="absolute top-0 w-full h-full my-0">
              <div className=" text-white h-full flex items-end">
                <div className="flex flex-col items-center md:items-start gap-4 bg-gradient-to-t w-full from-bg-main via-[#18191ae0] to-[#18191a04] to px-4 md:px-10 py-8 pb-12">
                  <p
                    className={`text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary-main via-pink-400 to-secondary-main text-white ${outfit.className}`}
                  >
                    {generateTitle(anime.title)}
                  </p>
                  <Link
                    href={`/details/${anime.id}`}
                    className="bg-secondary-main text-bg-main py-2 px-4 font-bold text-center text-sm md:text-base md:text-start flex items-center gap-2 hover:opacity-80"
                  >
                    <CiPlay1 size={20} /> START WATCHING
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeCarousel;
