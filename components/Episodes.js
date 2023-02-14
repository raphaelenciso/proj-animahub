import Image from "next/image";
import Link from "next/link";

const Episodes = ({ episodes, animeId }) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {episodes.map((episode) => {
        return (
          <Link
            href={{
              pathname: "/watch/[animeId]/[episodeId]",
            }}
            as={`/watch/${animeId}/${episode.id}`}
            key={episode.id}
          >
            <div key={episode.id} className="lg:mb-4 flex">
              <Image
                src={episode.image}
                alt={episode.title}
                className=" object-cover object-center"
                width={200}
                height={50}
                unoptimized
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
