"use client";

import Link from "next/link";

const AnimeCard = ({ anime, tag }) => {
  return (
    <Link href={`/details/${anime.id}`}>
      <div className="bg-bg-main transition duration-300 hover:scale-[0.98]  ">
        <img
          src={anime.image}
          alt={anime.id}
          className="w-full h-[150px] xs:h-[250px] lg:h-[350px]  object-cover cursor-pointer"
          width={200}
          loading="lazy"
        />

        {tag && (
          <span className="bg-red-500 text-white absolute top-0 right-0 py-[1px] px-[2px] text-sm font-semibold">
            EP {anime.episodeNumber}
          </span>
        )}
        <h1 className="mx-auto text-center text-gray-300 text-sm lg:text-base group-hover:underline cursor-pointer">
          {anime.title.userPreferred.slice(0, 35)}
        </h1>
      </div>
    </Link>
  );
};
export default AnimeCard;
