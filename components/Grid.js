import { useRouter } from "next/router";

const Grid = ({ data, option, setOption }) => {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-7xl w-[100%]">
      <div className="px-6 pt-8 mb-4 flex flex-row justify-between">
        <div>
          <h1 className="text-white text-3xl font-bold">Trending Anime</h1>
          <p className="text-gray-400  ">
            Get in on the action and see what's trending in the anime world.
          </p>
        </div>
        <div className="flex flex-row border border-gray-200 h-full my-auto rounded-lg">
          <div
            className={`${
              option === "Trending" ? "text-bg-main bg-white" : "text-white"
            } border-r border-gray-200 p-2 rounded-l-lg cursor-pointer hover:underline`}
            onClick={() => setOption("Trending")}
          >
            Trending
          </div>
          <div
            className={`${
              option === "Popular" ? "text-bg-main bg-white" : "text-white"
            } p-2 cursor-pointer rounded-r-lg hover:underline`}
            onClick={() => setOption("Popular")}
          >
            Popular
          </div>
        </div>
      </div>

      <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400" />
      <div className="mx-auto flex flex-wrap justify-center mt-4">
        {data &&
          data.map((item) => {
            return (
              <div
                className="w-[160px] md:w-[200px] mx-2 md:mx-6 my-2"
                key={item.id}
              >
                {console.log(item.title)}
                <img
                  src={item.image}
                  alt=""
                  className="w-[full] h-[200px] sm:[230px] md:h-[300px] object-cover rounded-lg hover:scale-105 transition-all cursor-pointer"
                  onClick={() => router.push(`/details/${item.id}`)}
                />
                <h1 className="mx-auto text-center text-gray-300 text-md hover:underline cursor-pointer">
                  {item.title.userPreferred.slice(0, 35)}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Grid;
