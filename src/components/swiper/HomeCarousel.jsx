"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { FaPlayCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import generateTitle from "@/utils/generateTitle";
import { outfit } from "@/utils/font";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeCarousel = ({ animelist }) => {
  const swiperRef = useRef();

  return (
    <div className="relative prevent-select ">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        pagination
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {animelist?.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div className="w-full  h-[calc(100vh-300px)]  max-h-[600px]  cursor-pointer relative">
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
                <div className=" text-white h-full flex items-end ">
                  <div className="flex flex-col items-center md:items-start gap-4 bg-gradient-to-t w-full from-bg-main via-[#18191ae0] to-[#18191a04] to px-4 md:px-10 py-8 pb-12">
                    <h1
                      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary-main via-pink-400 to-secondary-main text-white ${outfit.className}`}
                    >
                      {generateTitle(anime.title)}
                    </h1>
                    <p className="hidden md:inline max-w-[650px] font-light">
                      {anime.description?.slice(0, 200)}
                      {anime.description?.length > 200 ? "..." : ""}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href={`/watch/${anime.id}/${
                          (anime.title.romaji
                            ? anime.title.romaji
                                .toLowerCase()
                                .replaceAll(" ", "-")
                            : anime.title.toLowerCase().replaceAll(" ", "-")) +
                          "-episode-1"
                        }`}
                        className="bg-secondary-main text-bg-main py-2 px-4   text-center text-sm md:text-base md:text-start flex items-center gap-2 hover:opacity-80 rounded-full"
                      >
                        <FaPlayCircle size={20} /> Watch Now
                      </Link>
                      <Link
                        href={`/details/${anime.id}`}
                        className="text-secondary-main border border-secondary-main py-2 px-4   text-center text-sm md:text-base md:text-start flex items-center gap-2 hover:opacity-80 rounded-full"
                      >
                        Detail <MdArrowForwardIos />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden xl:block ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-white absolute top-1/2 -translate-y-1/2 left-[-10px] 2xl:left-[-15px] px-2 py-12  z-10"
        >
          <IoIosArrowBack size={30} color="#fff" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white absolute top-1/2 -translate-y-1/2 right-[-10px] 2xl:right-[-15px] px-2 py-12  z-10"
        >
          <IoIosArrowForward size={30} color="#fff" />
        </button>
      </div>
    </div>
  );
};
export default HomeCarousel;
