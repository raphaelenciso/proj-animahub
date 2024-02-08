"use client";

import { getSearchResults } from "@/app/search/[query]/page";
import generateTitle from "@/utils/generateTitle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchModal = ({ setIsSearchOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const res = await getSearchResults(searchQuery);
      setResults(res.results);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <div
      className=" z-[300] flex items-center justify-center  fixed top-0 left-0 w-screen h-screen backdrop-blur-[2px] bg-[#000000b4] overscroll-none"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="flex flex-col justify-center items-center gap-2 "
        onClick={(e) => e.stopPropagation()}
      >
        <input
          placeholder="Search something..."
          className="bg-bg-main py-4 px-4 w-[90vw] max-w-[600px] rounded-md text-white font-semibold"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <div className="bg-bg-main max-h-[400px] w-[90vw] max-w-[600px] overflow-y-scroll ">
          {results &&
            results.map((anime) => (
              <Link
                href={"/details/" + anime.id}
                className="flex items-center justify-start gap-2 py-2 hover:bg-[#474b4eaf] "
                onClick={() => setIsSearchOpen(false)}
              >
                <Image
                  src={anime.image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="aspect-square w-24 h-24 object-cover rounded-md"
                />
                <div className="text-white">
                  <h3>{generateTitle(anime.title)}</h3>
                  <p className="text-gray-400">
                    {anime.releaseDate && anime.releaseDate + " "}
                    {anime.type && anime.type}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
