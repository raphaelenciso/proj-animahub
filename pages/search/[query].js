import Grid from "@/components/Grid";
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
      <div className="mx-auto max-w-7xl w-[90%]">
        <h1 className="text-white text-3xl font-semibold mb-4  px-6 pt-8 ">
          Results for{" "}
          <span className="underline text-slate-400 font-normal">
            {" " + query}
          </span>
        </h1>
        <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400" />

        <Grid data={data} />
      </div>
    </div>
  );
};
export default Search;
