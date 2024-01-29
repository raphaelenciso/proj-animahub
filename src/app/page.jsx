import Home from "@/components/home/Home";
import { api } from "@/api";
import { provider } from "@/api";

export const getRecentEpisodes = async () => {
  const res = await fetch(api + "recent-episodes", {
    next: { revalidate: 60 },
  });
  return res.json();
};

export const getTopAiring = async () => {
  const res = await fetch(api + "top-airing", {
    next: { revalidate: 60 },
  });
  return res.json();
};

export const getPopular = async () => {
  const res = await fetch(api + "popular", {
    next: { revalidate: 60 },
  });
  return res.json();
};

export const getMovies = async () => {
  const res = await fetch(api + "movies", {
    next: { revalidate: 60 },
  });
  return res.json();
};

export const getTrending = async () => {
  const res = await fetch(api + "trending", {
    next: { revalidate: 60 },
  });
  return res.json();
};

const page = async () => {
  let animes = provider === "anilist" ? [{}, {}] : [{}, {}, {}, {}];

  if (provider === "anilist") {
    animes[0].by = "Trending Anime";
    animes[0].data = await getTrending();

    animes[1].by = "Popular Anime";
    animes[1].data = await getPopular();
  } else if (provider === "gogoanime") {
    animes[0].by = "Recently Release Episodes";
    animes[0].data = await getRecentEpisodes();

    animes[1].by = "Top Airing Anime";
    animes[1].data = await getTopAiring();

    animes[2].by = "Popular Anime";
    animes[2].data = await getPopular();

    animes[3].by = "Anime Movies";
    animes[3].data = await getMovies();
  }

  return <Home animes={animes} />;
};
export default page;
