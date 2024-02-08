"use client";

import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import AnimeCard from "../AnimeCard";
import { useRef } from "react";
import bp from "@/utils/bp";

const AnimeCarousel = ({ animelist, title, className, tag }) => {
  const swiperRef = useRef();

  console.log(animelist[0]);

  return (
    <div className={`${className} relative`}>
      <div>
        <h1 className="text-white text-xl md:text-2xl pl-[10px] xl:pl-0 font-semibold mb-2">
          {title}
        </h1>
      </div>

      <Swiper
        breakpoints={bp}
        slidesPerView={2.25}
        spaceBetween={8}
        modules={[Navigation, FreeMode]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesOffsetBefore={10}
        slidesOffsetAfter={10}
        freeMode={true}
      >
        {animelist.map((anime) => (
          <SwiperSlide
            key={anime.id + title}
            className="transition duration-300 md:hover:scale-[0.95] "
          >
            <AnimeCard anime={anime} tag={tag} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden xl:block">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-white absolute top-1/2 -translate-y-1/2 left-[-30px] 2xl:left-[-45px] px-2 py-12 hover:bg-slate-800 z-10"
        >
          <IoIosArrowBack size={30} color="#0080ff" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white absolute top-1/2 -translate-y-1/2 right-[-30px] 2xl:right-[-45px] px-2 py-12 hover:bg-slate-800 z-10"
        >
          <IoIosArrowForward size={30} color="#0080ff" />
        </button>
      </div>
    </div>
  );
};
export default AnimeCarousel;
