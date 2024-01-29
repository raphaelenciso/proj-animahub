"use client";

import Link from "next/link";

const DetailsEpisode = ({ animeId, episode, image }) => {
  return (
    <Link href={`/watch/${animeId}/${episode.id}`}>
      <div className="lg:mb-4">
        <img
          src={episode.image ? episode.image : image}
          alt={episode.title ? episode.title : episode.id}
          className="w-full h-52 object-cover object-center"
          loading="lazy"
        />
        <p className="text-white font-semibold text-lg px-1 pt-1">
          {episode.number}.{" "}
          {episode.title ? episode.title : "Episode " + episode.number}
        </p>
        <p className="text-text-secondary px-1 text-sm cursor-text">
          {episode.description && episode.description.length > 150
            ? episode.description.slice(0, 150) + "..."
            : episode.description}
        </p>
      </div>
    </Link>
  );
};
export default DetailsEpisode;
