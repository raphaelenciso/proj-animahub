"use client";

import React, { useMemo, useState } from "react";
import Episodes from "@/components/watch/Episodes";
import Related from "@/components/watch/Related";
import Like from "@/components/watch/Like";
import generateTitle from "@/utils/generateTitle";
import Player from "./Player";
import { outfit } from "@/utils/font";

const watch = ({ streamingLink, animeInfo, animeId, episodeId }) => {
  const [option, setOption] = useState("Episodes");
  const { sources } = streamingLink;
  const { title, image } = animeInfo;

  return (
    <div className="bg-bg-main min-h-screen pt-[60px]">
      <div className="w-full md:w-[93%]  mx-auto flex flex-col xl:flex-row gap-8  md:pt-8">
        <div className="flex-[3] w-full ">
          <Player sources={sources} />
          <div>
            <div className="px-4 md:px-0">
              <p className="text-text-secondary text-lg  mt-2 md:mt-6">
                Episode {episodeId.split("episode-")[1]}
              </p>
              <h1
                className={`text-white text-3xl  font-semibold ${outfit.className}`}
              >
                {generateTitle(title)}
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                {
                  animeInfo.episodes[episodeId.split("episode-")[1] - 1]
                    .description
                }
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  px-4 md:px-0">
          <div className="flex gap-2 text-white h-10 border-t border-gray-400 ">
            <div
              onClick={() => setOption("Episodes")}
              className={`bg-primary-main flex justify-center items-center  ${
                option === "Episodes" ? "pt-1" : "mt-1"
              } `}
            >
              <div className="font-semibold px-4 text-sm md:text-base bg-bg-main w-full h-full cursor-pointer hover:bg-gray-600">
                EPISODES
              </div>
            </div>
            <div
              onClick={() => setOption("Related")}
              className={`bg-primary-main  flex justify-center items-center  ${
                option === "Related" ? "pt-1" : "mt-1"
              } `}
            >
              <div className="font-semibold px-4 text-sm md:text-base bg-bg-main w-full h-full cursor-pointer hover:bg-gray-600">
                RELATED
              </div>
            </div>
            <div
              onClick={() => setOption("Likes")}
              className={`bg-primary-main flex justify-center items-center ${
                option === "Likes" ? "pt-1" : "mt-1"
              } `}
            >
              <div className="font-semibold px-4 text-sm md:text-base bg-bg-main w-full h-full cursor-pointer hover:bg-gray-600">
                MORE LIKE THIS
              </div>
            </div>
          </div>
          {option === "Episodes" && (
            <Episodes
              image={image}
              episodes={animeInfo.episodes}
              animeId={animeId}
            />
          )}
          {animeInfo.relations && option === "Related" && (
            <Related relateds={animeInfo.relations} />
          )}
          {animeInfo.recommendations && option === "Like" && (
            <Like likes={animeInfo.recommendations} />
          )}
        </div>
      </div>
    </div>
  );
};

export default watch;
