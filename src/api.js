export const provider = "gogoanime";

export const api =
  "https://animahub-api.vercel.app/" +
  (provider === "gogoanime" ? "anime/gogoanime" : "meta/anilist");

export const anilist = [
  {
    endpoint: "popular",
    title: "Popular Anime",
  },
  {
    endpoint: "trending",
    title: "Trending Anime",
  },
];

export const gogoanime = [
  {
    endpoint: "recent-episodes",
    title: "Recently Release Episodes",
  },
  {
    endpoint: "top-airing",
    title: "Top Airing Anime",
  },
  {
    endpoint: "popular",
    title: "Popular Anime",
  },
  {
    endpoint: "movies",
    title: "Anime Movies",
  },
];
