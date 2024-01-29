import Home from "@/components/home/Home";
import { api, anilist, gogoanime } from "@/api";
import { provider } from "@/api";

export const getAnimeBy = async (by) => {
  let res;

  if (provider === "anilist") {
    res = await fetch(api + "/" + by + "?page=1&perPage=40", {
      next: { revalidate: 60 },
    });
  } else {
    res = await fetch(api + "/" + by, {
      next: { revalidate: 60 },
    });
  }

  return res.json();
};

const page = async () => {
  let animes = provider === "anilist" ? [{}, {}] : [{}, {}, {}, {}];

  if (provider === "anilist") {
    anilist.forEach(async (by, i) => {
      animes[i].by = by.title;
      animes[i].data = await getAnimeBy(by.endpoint);
    });
  } else if (provider === "gogoanime") {
    gogoanime.forEach(async (by, i) => {
      animes[i].by = by.title;
      animes[i].data = await getAnimeBy(by.endpoint);
    });
  }

  return <Home animes={animes} />;
};
export default page;
