"use client";

import Link from "next/link";
import generateTitle from "@/utils/generateTitle";

const Related = ({ relateds }) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {relateds.map((item) => {
        return (
          <Link href={`/details/${item.id}`} key={item.id}>
            <div key={item.id} className="lg:mb-4 flex">
              <img
                src={item.image}
                alt={generateTitle(item.title)}
                className="w-44 object-cover object-center"
                loading="lazy"
              />

              <p className="text-white font-semibold text-lg px-1 pt-1">
                {generateTitle(item.title)}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Related;
