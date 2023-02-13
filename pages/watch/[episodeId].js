import React from "react";
import VideoJS from "@/components/Video";
import jsonConvert from "@/utils/jsonConvert";
import { META } from "@consumet/extensions";

export const getServerSideProps = async ({ query }) => {
  const { episodeId } = query;

  const AnilistConsumet = new META.Anilist();

  const data = await AnilistConsumet.fetchEpisodeSources(episodeId);

  return {
    props: { streamingLink: jsonConvert(data) },
  };
};

const watch = ({ streamingLink }) => {
  const { sources } = streamingLink;

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: sources[5].url,
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
    <div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};
export default watch;
