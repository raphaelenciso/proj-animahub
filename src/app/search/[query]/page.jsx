import Link from "next/link";
import { api } from "@/api";
import generateTitle from "@/utils/generateTitle";

export const getSearchResults = async (query) => {
  const res = await fetch(`${api + query}`);

  return res.json();
};

const page = async ({ params }) => {
  const searchResults = await getSearchResults(params.query);

  return (
    <div className="bg-bg-main min-h-screen">
      <div className="mx-auto max-w-7xl w-[90%]">
        <h1 className="text-white text-3xl font-semibold mb-4  px-6 pt-8 ">
          Results for{" "}
          <span className="underline text-slate-400 font-normal">
            {" " + params.query.replace("%20", " ")}
          </span>
        </h1>
        <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400" />

        <div className="grid grid-cols-3  md:grid-cols-4 xl:grid-cols-5  gap-1 md:gap-2 lg:gap-4 mt-4 w-[90%] md:w-full mx-auto lg:px-2">
          {searchResults.results &&
            searchResults.results.map((item) => {
              return (
                <Link href={`/details/${item.id}`} key={item.id}>
                  <div className="group transition-all duration-300 bg-gradient-to-b from-primary-main via-pink-400 to-secondary-main hover:shadow-2xl hover:shadow-[#00ff754d] ">
                    <div className="card2 bg-bg-main transition-all duration-300 hover:scale-[0.98]  ">
                      <img
                        src={item.image}
                        alt={item.id}
                        className="w-full h-[150px] xs:h-[250px] lg:h-[350px]  md object-cover cursor-pointer"
                        width={200}
                        loading="lazy"
                      />
                      <h1 className="mx-auto text-center text-gray-300 text-sm lg:text-base group-hover:underline cursor-pointer">
                        {generateTitle(item.title)}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default page;
