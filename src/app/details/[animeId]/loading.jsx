import Skeleton from "@/components/Skeleton";

const loading = () => {
  return (
    <div className="bg-bg-main min-h-screen">
      <div className="md:relative">
        <Skeleton className="h-[200px] md:h-[400px] w-full" />
      </div>
      <hr className="w-[90%] md:w-[100%] mx-auto border-gray-400 md:hidden" />
      <div className="w-[90%] max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-semibold my-4 inline-block mr-8">
          <Skeleton className="w-44 h-8" />
        </h1>

        <Skeleton className="w-44 h-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return <Skeleton className="w-full h-64" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default loading;
