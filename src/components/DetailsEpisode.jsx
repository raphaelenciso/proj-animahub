"use client";

import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const DetailsEpisode = ({ animeId, episode, image }) => {
  return (
    <Link
      href={`/watch/${animeId}/${episode.id}`}
      className="hover:scale-[1.02] transition-all duration-500"
    >
      <div className="lg:mb-4">
        <div className="relative">
          <img
            src={episode.image ? episode.image : image}
            alt={episode.title ? episode.title : episode.id}
            className="w-full h-52 object-cover object-center rounded-lg hover:scale-[0.95]"
            loading="lazy"
          />
          <div className="absolute opacity-0 hover:opacity-100  transition-all duration-500  flex items-center justify-center top-0 left-0 h-full w-full bg-[#18191a70]">
            <FaPlayCircle color="white" size={40} />
          </div>
        </div>

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
