import AnimeDetails from "@/components/animedetails/AnimeDetails";

const getAnimeInfo = async ({ animeId }) => {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/info/${animeId}`
  );
  return res.json();
};

const page = async ({ params }) => {
  const animeInfo = await getAnimeInfo(params);

  return <AnimeDetails animeInfo={animeInfo} animeId={params.animeId} />;
};
export default page;
