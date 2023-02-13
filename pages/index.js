import { META } from "@consumet/extensions";
import { useRouter } from "next/router";
import jsonConvert from "@/utils/jsonConvert";

export const getStaticProps = async () => {
  const AnilistConsumet = new META.Anilist();
  const data = await AnilistConsumet.fetchTrendingAnime(1, 20);

  return {
    props: { data: jsonConvert(data.results) },
  };
};

export default function Home({ data }) {
  const router = useRouter();

  return (
    <div className="mx-auto flex flex-wrap gap-2 max-w-7xl w-[90%] justify-center">
      {data &&
        data.map((item) => {
          return (
            <div className="w-[200px] flex flex-col items-center" key={item.id}>
              <img
                src={item.image}
                alt=""
                className="w-[full] h-[300px] object-cover rounded-lg"
                onClick={() => router.push(`/details/${item.id}`)}
              />
              <h1 className="mx-auto text-center">{item.title.english}</h1>
            </div>
          );
        })}
    </div>
  );
}
