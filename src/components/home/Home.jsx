"use client";

import Grid from "@/components/Grid";
import { useState } from "react";

export default function Home({ trending, popular }) {
  const [option, setOption] = useState("Trending");

  return (
    <div className="bg-bg-main">
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

        <Grid data={option === "Trending" ? trending : popular} />
        {/* <Grid data={trending} /> */}
      </div>
    </div>
  );
}
