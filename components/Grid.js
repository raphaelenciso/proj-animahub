import Link from "next/link";

const Grid = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5  gap-4 md:gap-8 mt-4 w-[90%] md:w-full mx-auto px-2">
      {data &&
        data.map((item) => {
          return (
            <Link href={`/details/${item.id}`} key={item.id}>
              <div className="group  hover:scale-105 transition-all">
                <img
                  src={item.image}
                  alt={item.id}
                  className="w-full h-[250px] xs:h-[300px] sm:h-[250px] lg:h-[350px]  md object-cover rounded-lg cursor-pointer"
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
  );
};
export default Grid;
