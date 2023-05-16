"use client";

import React, { useMemo, useState } from "react";
import Episodes from "@/components/watch/Episodes";
import Related from "@/components/watch/Related";
import Like from "@/components/watch/Like";
import VideoJS from "@/components/watch/Video";

const watch = ({ streamingLink, animeInfo, animeId, episodeId }) => {
  const { sources } = streamingLink;

  const [option, setOption] = useState("Episodes");
  const [qualityOption, setQualityOption] = useState(0);

  const playerRef = React.useRef(null);

  const { title } = animeInfo;
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
    sources: [
      {
        src: sources[qualityOption]?.url,
        type: "application/x-mpegURL",
      },
    ],
    plugins: {
      seekButtons: {
        forward: 8,
        back: 8,
      },
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="bg-bg-main min-h-screen pt-[60px]">
      <div className="w-full md:w-[90%] max-w-7xl mx-auto flex flex-col xl:flex-row gap-8  md:pt-8">
        <div className="flex-[2] w-full ">
          {useMemo(() => {
            return (
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            );
          }, [qualityOption, episodeId])}
          <div>
            <div className="px-4 md:px-0">
              <h1 className="text-white font-semibold text-xl">Quality:</h1>
              {sources.map((source, index) => (
                <button
                  className={`${
                    qualityOption === index
                      ? "bg-white text-bg-main"
                      : "bg-bg-neutral-lighter text-white"
                  } px-4 rounded-2xl mr-1 mt-1 disabled:bg-slate-400 `}
                  onClick={() => setQualityOption(index)}
                  key={index}
                >
                  {source.quality}
                </button>
              ))}
            </div>
            <div className="px-4 md:px-0">
              <h1 className="text-text-secondary text-lg mt-2">
                Episode {episodeId.split("episode-")[1]}
              </h1>
              <p className="text-white text-3xl mt-2 font-semibold">
                {title.english ? title.english : title.romaji}
              </p>
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
              className={`bg-gradient-to-r from-primary-main via-pink-400 to-secondary-main  flex justify-center items-center  ${
                option === "Episodes" ? "pt-1" : "mt-1"
              } `}
            >
              <div className="font-semibold px-4 text-sm md:text-base bg-bg-main w-full h-full cursor-pointer hover:bg-gray-600">
                EPISODES
              </div>
            </div>
            <div
              onClick={() => setOption("Related")}
              className={`bg-gradient-to-r from-primary-main via-pink-400 to-secondary-main  flex justify-center items-center  ${
                option === "Related" ? "pt-1" : "mt-1"
              } `}
            >
              <div className="font-semibold px-4 text-sm md:text-base bg-bg-main w-full h-full cursor-pointer hover:bg-gray-600">
                RELATED
              </div>
            </div>
            <div
              onClick={() => setOption("Likes")}
              className={`bg-gradient-to-r from-primary-main via-pink-400 to-secondary-main  flex justify-center items-center ${
                option === "Likes" ? "pt-1" : "mt-1"
              } `}
            >
              <div className="font-semibold px-4 text-sm md:text-base bg-bg-main w-full h-full cursor-pointer hover:bg-gray-600">
                MORE LIKE THIS
              </div>
            </div>
          </div>
          {option === "Episodes" && (
            <Episodes episodes={animeInfo.episodes} animeId={animeId} />
          )}
          {option === "Related" && <Related relateds={animeInfo.relations} />}
          {option === "Like" && <Like likes={animeInfo.recommendations} />}
        </div>
      </div>
    </div>
  );
};

export default watch;
