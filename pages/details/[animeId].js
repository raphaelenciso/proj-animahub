import DetailsEpisode from "@/components/DetailsEpisode";
import jsonConvert from "@/utils/jsonConvert";
import { META } from "@consumet/extensions";
import { useState } from "react";

export const getServerSideProps = async ({ query }) => {
  const { animeId } = query;

  const AnilistConsumet = new META.Anilist();

  const animeInfo = await AnilistConsumet.fetchAnimeInfo(animeId);

  return {
    props: { animeInfo: jsonConvert(animeInfo), animeId: animeId },
  };
};

const AnimeDetails = ({ animeInfo, animeId }) => {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(50);

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
    <div className="bg-bg-main">
      <div className="md:relative">
        <img
          src={cover}
          alt={title}
          className="h-[200px] md:h-[400px] w-full object-cover object-center "
          loading="lazy"
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
        <h1 className="text-white text-2xl font-semibold my-4 inline-block mr-8">
          {" "}
          Episodes
        </h1>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodes.slice(from - 1, to).map((episode) => {
            return (
              <DetailsEpisode
                episode={episode}
                animeId={animeId}
                key={episode.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AnimeDetails;
