"use client";

import Link from "next/link";

const Related = ({ relateds }) => {
  console.log(relateds);

  return (
    <div className="mt-4 flex flex-col gap-2">
      {relateds.map((item) => {
        return (
          <Link
            href={{
              pathname: "/details/[animeId]",
            }}
            as={`/details/${item.id}`}
            key={item.id}
          >
            <div key={item.id} className="lg:mb-4 flex">
              <img
                src={item.image}
                alt={
                  item.title.english ? item.title.english : item.title.romaji
                }
                className="w-44 object-cover object-center"
                loading="lazy"
              />

              <p className="text-white font-semibold text-lg px-1 pt-1">
                {item.title.english ? item.title.english : item.title.romaji}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Related;
