import Skeleton from "@/components/Skeleton";

const loading = () => {
  return (
    <div className="bg-bg-main">
      <div className="w-full md:w-[93%] mx-auto flex flex-col xl:flex-row gap-8 pt-[60px]">
        <div className="flex-[2] w-full ">
          {/* videojs */}
          <Skeleton className="full h-[18rem] md:h-[30rem]" />
          <div>
            <div className="px-4 md:px-0">
              <h1 className="text-white font-semibold text-xl">
                <Skeleton className="w-24 h-6" />
              </h1>
              <div className="flex flex-row gap-4">
                {[1, 2, 3, 4, 5].map((source) => (
                  <Skeleton key={source} className="w-20 h-6 " />
                ))}
              </div>
            </div>
            <div className="px-4 md:px-0">
              <h1 className="text-text-secondary text-lg mt-2">
                {/* episode */}
                <Skeleton className="w-32 h-4" />
              </h1>
              <div className="text-white text-3xl mt-2 font-semibold">
                {/* season */}
                <Skeleton className="w-56 h-8" />
              </div>
              <div className="text-gray-400 text-sm mt-2">
                {/* description */}
                <Skeleton className="w-[15rem] md:w-[45rem] h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1  px-4 md:px-0">
          <div className="flex gap-2 text-white h-10 border-t border-gray-400 ">
            <Skeleton className="w-28 h-8" />
            <Skeleton className="w-28 h-8" />
            <Skeleton className="w-28 h-8" />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6].map((episode) => {
              return (
                <div key={episode.id} className="lg:mb-4 flex">
                  <Skeleton className="w-48 h-28 " />
                  <div className="flex flex-col  justify-center">
                    <div className="text-white font-semibold text-sm md:text-base  lg:text-lg px-1 pt-1">
                      <Skeleton className="w-28 h-6" />
                    </div>
                    <div className="text-text-secondary px-1 text-sm cursor-text">
                      <Skeleton className="w-56 h-16" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default loading;
