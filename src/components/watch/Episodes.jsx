"use client";

import { outfit } from "@/utils/font";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Episodes = ({ episodes, animeId, image }) => {
  const pathname = usePathname();
  const urlSplit = pathname.split("-");
  const episodeUrl = urlSplit[urlSplit.length - 1];
  const lorem =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eligendi repudiandae repellat maiores aperiam eos, corporis itaque animi quam voluptatem praesentium distinctio, nam ratione labore doloribus minima odio porro. Sit.";

  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(50);

  const generateDynamicEpisodes = (episodes) => {
    const page = Math.ceil(episodes / 50);

    const arr = [];

    for (let i = 0; i < page; i++) {
      const from = i * 50 + 1;
      const to = i * 50 + 50;
      arr.push(from.toString() + "-" + to.toString());
    }

    return arr;
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      {episodes.length > 50 && (
        <select
          className="inline-block bg-bg-neutral border border-gray-100 text-white rounded-md"
          name=""
          id=""
          onChange={(e) => {
            setFrom(parseInt(e.target.value.split("-")[0]));
            setTo(parseInt(e.target.value.split("-")[1]));
          }}
        >
          {generateDynamicEpisodes(episodes.length).map((episodeRange) => (
            <option value={episodeRange} key={episodeRange}>
              Episode {episodeRange}
            </option>
          ))}
        </select>
      )}
      {episodes.slice(from - 1, to).map((episode) => {
        return (
          <Link
            href={`/watch/${animeId}/${episode.id}`}
            key={episode.id}
            className={`flex gap-1 bg-bg-neutral rounded-lg hover:scale-105 transition-all duration-300 overflow-auto ${
              episodeUrl == episode.number ? "border border-primary-main" : ""
            }`}
          >
            <div
              className={`relative flex-1 ${
                episodeUrl == episode.number ? "opacity-50" : ""
              }`}
            >
              <img
                src={episode.image ? episode.image : image}
                alt={episode.title ? episode.title : episode.id}
                className="h-full  object-cover object-center   aspect-video"
                loading="lazy"
              />
              <h2 className="absolute bottom-1 left-2 text-white font-semibold">
                Episode {episode.number}
              </h2>
            </div>

            <div
              className={`flex flex-col flex-[1.3] justify-center ${
                episodeUrl == episode.number ? "opacity-50" : ""
              }`}
            >
              <p
                className={`text-white font-medium text-sm md:text-base px-1 pt-1`}
              >
                {episode.title ? episode.title : "No Title"}
              </p>
              <p className="text-text-secondary px-1 text-xs italic ">
                {episode.description
                  ? episode.description.slice(0, 90)
                  : lorem.slice(0, 90)}
                ...
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Episodes;
