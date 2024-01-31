"use client";

import generateTitle from "@/utils/generateTitle";
import Link from "next/link";

const AnimeCard = ({ anime, tag }) => {
  return (
    <Link href={`/details/${anime.id}`}>
      <div className="bg-bg-main relative   ">
        <img
          src={anime.image}
          alt={anime.id}
          className="w-full h-[200px] xs:h-[230px] sm:h-[270px]  object-cover cursor-pointer rounded-[4px] "
          loading="lazy"
        />

        {tag && (
          <span className="bg-red-500 text-white absolute top-0 right-0 py-[1px] px-[2px] text-xs md:text-sm font-semibold rounded-tr-[4px]">
            EP {anime.episodeNumber}
          </span>
        )}
        <h1 className="mx-auto text-center text-gray-300 text-xs md:text-sm lg:text-base group-hover:underline cursor-pointer">
          {generateTitle(anime.title)}
        </h1>
      </div>
    </Link>
  );
};
export default AnimeCard;
