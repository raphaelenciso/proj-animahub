"use client";

import Link from "next/link";

const Grid = ({ data }) => {
  return (
    <div className="grid grid-cols-3  md:grid-cols-4 xl:grid-cols-5  gap-1 md:gap-2 lg:gap-4 mt-4 w-[90%] md:w-full mx-auto lg:px-2">
      {data &&
        data.map((item) => {
          return (
            <Link href={`/details/${item.id}`} key={item.id}>
              <div className="group transition-all duration-300 bg-gradient-to-b from-primary-main via-pink-400 to-secondary-main hover:shadow-2xl hover:shadow-[#00ff754d] ">
                <div className="card2 bg-bg-main transition-all duration-300 hover:scale-[0.98]  ">
                  <img
                    src={item.image}
                    alt={item.id}
                    className="w-full h-[150px] xs:h-[250px] lg:h-[350px]  object-cover cursor-pointer"
                    width={200}
                    loading="lazy"
                  />
                  <h1 className="mx-auto text-center text-gray-300 text-sm lg:text-base group-hover:underline cursor-pointer">
                    {item.title.userPreferred.slice(0, 35)}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
export default Grid;
