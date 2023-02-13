import { META } from "@consumet/extensions";
import jsonConvert from "@/utils/jsonConvert";
import Grid from "@/components/Grid";
import { useState } from "react";

export const getStaticProps = async () => {
  const AnilistConsumet = new META.Anilist();
  const data = await AnilistConsumet.fetchTrendingAnime(1, 20);

  return {
    props: { data: jsonConvert(data.results) },
  };
};

export default function Home({ data }) {
  const [option, setOption] = useState("Trending");

  return (
    <div className="bg-bg-main">
      <Grid data={data} option={option} setOption={setOption} />
    </div>
  );
}
