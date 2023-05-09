import Home from "@/components/home/Home";

export const recentAnime = async () => {
  const res = await fetch(
    "https://api.consumet.org/meta/anilist/recent-episodes?page=1&perPage=20",
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};

export const getTrending = async () => {
  const res = await fetch(
    "https://api.consumet.org/meta/anilist/trending?page=1&perPage=20",
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};

export const getPopular = async () => {
  const res = await fetch(
    "https://api.consumet.org/meta/anilist/popular?page=1&perPage=20",
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};

const page = async () => {
  const trending = await getTrending();
  const popular = await getPopular();
  const recent = await recentAnime();

  return (
    <div>
      <Home
        trending={trending.results}
        popular={popular.results}
        recent={recent.results}
      />
    </div>
  );
};
export default page;
