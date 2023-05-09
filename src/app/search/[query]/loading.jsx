import Skeleton from "@/components/Skeleton";

const loading = () => {
  return (
    <div className="bg-bg-main min-h-screen">
      <div className="mx-auto max-w-7xl w-[90%]">
        <h1 className="text-white text-3xl font-semibold mb-4  px-6 pt-8 ">
          <Skeleton className="w-64 h-8" />
        </h1>
        <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400" />

        <div className="grid grid-cols-3  md:grid-cols-4 xl:grid-cols-5  gap-1 md:gap-2 lg:gap-4 mt-4 w-[90%] md:w-full mx-auto lg:px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div key={index}>
                <Skeleton className="w-full h-[150px] xs:h-[250px] lg:h-[350px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default loading;
