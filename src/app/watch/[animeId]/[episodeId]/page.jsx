import Watch from "@/components/watch/Watch";

export const getStreamingLinks = async (episodeId) => {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/watch/${episodeId}`
  );

  return res.json();
};

export const getAnimeInfo = async (animeId) => {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/info/${animeId}`
  );

  return res.json();
};

const page = async ({ params }) => {
  const streamingLink = await getStreamingLinks(params.episodeId);
  const animeInfo = await getAnimeInfo(params.animeId);

  return (
    <Watch
      streamingLink={streamingLink}
      animeInfo={animeInfo}
      animeId={params.animeId}
      episodeId={params.episodeId}
    />
  );
};
export default page;
