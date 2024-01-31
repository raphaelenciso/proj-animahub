import AnimeDetails from "@/components/animedetails/AnimeDetails";
import { api } from "@/api";

const getAnimeInfo = async ({ animeId }) => {
  const res = await fetch(`${api}info/${animeId}`);
  return res.json();
};

const page = async ({ params }) => {
  const animeInfo = await getAnimeInfo(params);

  return <AnimeDetails animeInfo={animeInfo} animeId={params.animeId} />;
};
export default page;
