import { META } from "@consumet/extensions";
import jsonConvert from "@/utils/jsonConvert";
import Grid from "@/components/Grid";
import { useState } from "react";

export const getStaticProps = async () => {
  const AnilistConsumet = new META.Anilist();
  const trending = await AnilistConsumet.fetchTrendingAnime(1, 20);
  const popular = await AnilistConsumet.fetchPopularAnime(1, 20);

  return {
    props: {
      data: {
        trending: jsonConvert(trending.results),
        popular: jsonConvert(popular.results),
      },
    },
  };
};

export default function Home({ data }) {
  const [option, setOption] = useState("Trending");

  return (
    <div className="bg-bg-main">
      <Grid
        data={option === "Trending" ? data.trending : data.popular}
        option={option}
        setOption={setOption}
      />
    </div>
  );
}
