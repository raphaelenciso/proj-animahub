import jsonConvert from "@/utils/jsonConvert";
import { META } from "@consumet/extensions";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const { query } = context.query;

  const AnilistConsumet = new META.Anilist();

  const searchResults = await AnilistConsumet.search(query, 1, 20);

  return {
    props: { data: jsonConvert(searchResults.results), query },
  };
};

const Search = ({ data, query }) => {
  return (
    <div className="bg-bg-main">
      <div className="mx-auto flex flex-wrap justify-center pt-4 max-w-7xl w-[90%]">
        <h1 className="text-white text-3xl font-semibold mb-4">
          Results for{" "}
          <span className="underline text-slate-400 font-normal">{query}</span>
        </h1>

        <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400 mb-4" />
        {data &&
          data.map((item) => {
            return (
              <Link href={`/details/${item.id}`} key={item.id}>
                <div className="w-[160px] md:w-[200px] mx-2 md:mx-6 my-2 group  hover:scale-105 transition-all">
                  <img
                    src={item.image}
                    alt={item.id}
                    className="w-[full] h-[250px]  md:h-[300px] object-cover rounded-lg  cursor-pointer"
                    width={200}
                    loading="lazy"
                  />
                  <h1 className="mx-auto text-center text-gray-300 text-md group-hover:underline cursor-pointer">
                    {item.title.userPreferred.slice(0, 35)}
                  </h1>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Search;
