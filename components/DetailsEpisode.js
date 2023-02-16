import Link from "next/link";

const DetailsEpisode = ({ animeId, episode }) => {
  return (
    <Link
      href={{
        pathname: "/watch/[animeId]/[episodeId]",
      }}
      as={`/watch/${animeId}/${episode.id}`}
      key={episode.id}
    >
      <div key={episode.id} className="lg:mb-4">
        <img
          src={episode.image}
          alt={episode.title}
          className="w-full h-52 object-cover object-center"
          loading="lazy"
        />
        <p className="text-white font-semibold text-lg px-1 pt-1">
          {episode.number}. {episode.title}
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
