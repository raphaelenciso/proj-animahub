import jsonConvert from "@/utils/jsonConvert";
import { META } from "@consumet/extensions";
import { useRouter } from "next/router";

export const getServerSideProps = async ({ query }) => {
  const { animeId } = query;

  const AnilistConsumet = new META.Anilist();

  const animeInfo = await AnilistConsumet.fetchAnimeInfo(animeId);

  return {
    props: { animeInfo: jsonConvert(animeInfo) },
  };
};

const AnimeDetails = ({ animeInfo }) => {
  const router = useRouter();

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
    <div>
      <div>
        <img src={cover} alt="cover" />
        <p>{title.english}</p>
        <p>{season}</p>
        <p>{description}</p>
        <p>
          {releaseDate} | {duration} | {genres.map((genre) => genre + ", ")}
        </p>
        <p>
          Characters:{" "}
          {characters.slice(0, 3).map((character, index) => {
            if (index === 2) {
              return character.name.first + "...";
            } else {
              return character.name.first + ", ";
            }
          })}
        </p>
      </div>
      <div>
        <h1>Episodes:</h1>
        <div className="flex flex-wrap gap-2">
          {episodes.map((episode) => {
            return (
              <div
                className="w-[250px]"
                onClick={() => router.push(`/watch/${episode.id}`)}
                key={episode.id}
              >
                <img src={episode.image} alt="" />
                <p>
                  {episode.number}. {episode.title}
                </p>
                {/* <p>{episode.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AnimeDetails;
