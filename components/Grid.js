import Link from "next/link";

const Grid = ({ data, option, setOption }) => {
  return (
    <div className="mx-auto max-w-7xl w-[90%]">
      <div className="px-6 pt-8 mb-4 flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="text-white text-3xl font-bold">{option} Anime</h1>
          <p className="text-gray-400  ">
            Get in on the action and see what's trending in the anime world.
          </p>
        </div>
        <div className="flex flex-row border border-gray-200 h-full my-auto mx-auto mt-4 lg:mx-0 rounded-lg">
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
export default Grid;
