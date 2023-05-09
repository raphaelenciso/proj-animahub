import Home from "@/components/home/Home";

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

  return (
    <div>
      <Home trending={trending.results} popular={popular.results} />
    </div>
  );
};
export default page;
