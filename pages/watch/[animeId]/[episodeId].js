import React, { useState } from "react";
import VideoJS from "@/components/Video";
import jsonConvert from "@/utils/jsonConvert";
import { META } from "@consumet/extensions";
import Episodes from "@/components/Episodes";
import Related from "@/components/Related";
import Like from "@/components/Like";

export const getServerSideProps = async ({ query }) => {
  const { episodeId, animeId } = query;

  const AnilistConsumet = new META.Anilist();

  const streamingLink = await AnilistConsumet.fetchEpisodeSources(episodeId);
  const animeInfo = await AnilistConsumet.fetchAnimeInfo(animeId);

  return {
    props: {
      streamingLink: jsonConvert(streamingLink),
      animeInfo: jsonConvert(animeInfo),
      animeId: animeId,
    },
  };
};

const watch = ({ streamingLink, animeInfo, animeId }) => {
  const { sources } = streamingLink;

  console.log(streamingLink);
  const [option, setOption] = useState("Episodes");

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: sources[0]?.url,
        type: "application/x-mpegURL",
      },
    ],
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
    <div className="bg-bg-main min-h-screen">
      <div className=" w-[90%] max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 pt-8">
        <div className="flex-[2] w-full ">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="flex-1 ">
          <div className="flex gap-2 text-white h-10">
            <button
              className={`${
                option === "Episodes"
                  ? "bg-white text-bg-main"
                  : "bg-bg-neutral-lighter"
              } px-4 rounded-2xl `}
              onClick={() => setOption("Episodes")}
            >
              Episodes
            </button>
            <button
              className={`${
                option === "Related"
                  ? "bg-white text-bg-main"
                  : "bg-bg-neutral-lighter"
              } px-4 rounded-2xl `}
              onClick={() => setOption("Related")}
            >
              Related
            </button>
            <button
              className={`${
                option === "Like"
                  ? "bg-white text-bg-main"
                  : "bg-bg-neutral-lighter"
              } px-4 rounded-2xl `}
              onClick={() => setOption("Like")}
            >
              You may also like
            </button>
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
