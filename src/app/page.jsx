import Home from "@/components/home/Home";
import { api } from "@/api";

// export const recentAnime = async () => {
//   const res = await fetch(
//     "https://animahub-api.vercel.app/meta/anilist/recent-episodes?page=1&perPage=20",
//     {
//       next: { revalidate: 60 },
//     }
//   );
//   return res.json();
// };

export const getTrending = async () => {
  const res = await fetch(api + "meta/anilist/trending?page=1&perPage=40", {
    next: { revalidate: 60 },
  });
  return res.json();
};

export const getPopular = async () => {
  const res = await fetch(api + "meta/anilist/popular?page=1&perPage=40", {
    next: { revalidate: 60 },
  });
  return res.json();
};

const page = async () => {
  const trending = await getTrending();
  const popular = await getPopular();

  // const recent = await recentAnime();

  return (
    <Home
      trending={trending.results}
      popular={popular.results}
      // recent={recent.results}
    />
  );
};
export default page;
