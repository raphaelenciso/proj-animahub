"use client";

import Link from "next/link";
import { useState } from "react";

const Episodes = ({ episodes, animeId, image }) => {
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
          <Link href={`/watch/${animeId}/${episode.id}`} key={episode.id}>
            <div key={episode.id} className="lg:mb-4 flex">
              <img
                src={episode.image ? episode.image : image}
                alt={episode.title ? episode.title : episode.id}
                className="w-44 md:w-48 object-cover object-center"
                loading="lazy"
              />
              <div className="flex flex-col  justify-center">
                <p className="text-white font-semibold text-sm md:text-base  lg:text-lg px-1 pt-1">
                  {episode.number}.{" "}
                  {episode.title ? episode.title : "Episode " + episode.number}
                </p>
                <p className="text-text-secondary px-1 text-sm cursor-text">
                  {episode.description &&
                    episode.description.slice(0, 70) + "..."}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Episodes;
