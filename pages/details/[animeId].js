import jsonConvert from "@/utils/jsonConvert";
import { META } from "@consumet/extensions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const getServerSideProps = async ({ query }) => {
  const { animeId } = query;

  const AnilistConsumet = new META.Anilist();

  const animeInfo = await AnilistConsumet.fetchAnimeInfo(animeId);

  return {
    props: { animeInfo: jsonConvert(animeInfo), animeId: animeId },
  };
};

const AnimeDetails = ({ animeInfo, animeId }) => {
  const {
    cover,
    title,
    season,
    releaseDate,
    duration,
    genres,
    description,
    characters,
    episodes,
  } = animeInfo;

  return (
    <div className="bg-bg-main">
      <div className="md:relative">
        <Image
          src={cover}
          alt={title}
          className="h-[200px] md:h-[400px] w-full object-cover object-center "
          height={400}
          width={100}
          unoptimized
        />

        <div className="lg:absolute lg:top-0 ||||| lg:bg-gradient-to-r lg:from-[#000000ff] lg:via-[#000000cf] lg:to-[#0000005f] w-full h-full my-4 lg:my-0">
          <div className=" text-white h-full flex flex-col justify-center gap-2 w-[90%] max-w-7xl mx-auto  ">
            <p
              className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary-main via-pink-400 to-secondary-main
          "
            >
              {title.english ? title.english : title.romaji}
            </p>
            <p className=" text-xl md:text-2xl  ">{season}</p>
            <p className="text-text-secondary">
              {releaseDate} | {duration} | {genres.map((genre) => genre + ", ")}
            </p>
            <p className="text-sm lg:text-base w-full lg:w-[50%]">
              {description.slice(0, 325)}...
            </p>
            <p className="text-text-secondary">
              Characters:{" "}
              {characters.slice(0, 3).map((character, index) => {
                if (index === 2) {
                  return character.name.first;
                } else {
                  return character.name.first + ", ";
                }
              })}
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400 md:hidden" />
      <div className="w-[90%] max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-semibold my-4"> Episodes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodes.map((episode) => {
            return (
              <Link
                href={{
                  pathname: "/watch/[animeId]/[episodeId]",
                }}
                as={`/watch/${animeId}/${episode.id}`}
                key={episode.id}
              >
                <div key={episode.id} className="lg:mb-4">
                  <Image
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-52 object-cover object-center"
                    width={100}
                    height={208}
                    unoptimized
                  />
                  <p className="text-white font-semibold text-lg px-1 pt-1">
                    {episode.number}. {episode.title}
                  </p>
                  <p className="text-text-secondary px-1 text-sm cursor-text">
                    {episode.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AnimeDetails;
