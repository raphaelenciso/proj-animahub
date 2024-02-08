"use client";

import generateTitle from "@/utils/generateTitle";
import Link from "next/link";

const Like = ({ likes }) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {likes.map((item) => {
        return (
          <Link href={`/details/${item.id}`} key={item.id}>
            <div key={item.id} className="lg:mb-4 flex">
              <img
                src={item.image}
                alt={generateTitle(item.title)}
                className="w-44 object-cover object-center rounded-lg aspect-[9/12]"
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
export default Like;
