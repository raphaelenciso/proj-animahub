import Link from "next/link";
import { useState } from "react";

const Episodes = ({ episodes, animeId }) => {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(50);

  const generateDynamicEpisodes = (episodes) => {
    const page = Math.ceil(episodes / 50);

    const arr = [];

    for (let i = 0; i < page; i++) {
      const from = i * 50 + 1;
      const to = i * 50 + 50;
      arr.push("Episode " + from.toString() + "-" + to.toString());
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
              {episodeRange}
            </option>
          ))}
        </select>
      )}
      {episodes.slice(from - 1, to).map((episode) => {
        return (
          <Link
            href={{
              pathname: "/watch/[animeId]/[episodeId]",
            }}
            as={`/watch/${animeId}/${episode.id}`}
            key={episode.id}
          >
            <div key={episode.id} className="lg:mb-4 flex">
              <img
                src={episode.image}
                alt={episode.title}
                className="w-56 object-cover object-center"
                loading="lazy"
              />
              <div className="flex flex-col  justify-center">
                <p className="text-white font-semibold text-lg px-1 pt-1">
                  {episode.number}. {episode.title}
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
