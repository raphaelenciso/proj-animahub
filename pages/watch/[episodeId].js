import React from "react";
import VideoJS from "@/components/Video";
import axios from "axios";

export const getServerSideProps = async ({ query }) => {
  const { episodeId } = query;

  const url = `https://api.consumet.org/meta/anilist/watch/${episodeId}`;

  const { data } = await axios.get(url);

  return {
    props: { streamingLink: data },
  };
};

const watch = ({ streamingLink }) => {
  const { sources } = streamingLink;
  console.log(sources);
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
