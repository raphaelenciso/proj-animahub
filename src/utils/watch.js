import Hls from "hls.js";

export const getHighestReso = (sources) => {
  let highestReso = {
    quality: "",
    index: -1,
  };

  sources.forEach((stream, index) => {
    const qualityValue = parseInt(stream.quality.split("p")[0]);
    if (
      stream.quality !== "default" &&
      (highestReso.quality === "" ||
        qualityValue > parseInt(highestReso.quality))
    ) {
      highestReso.quality = stream.quality;
      highestReso.index = index;
    }
  });

  return highestReso;
};

export function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
    if (art.hls) art.hls.destroy();
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.on("destroy", () => hls.destroy());
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
}

export const reshapeSources = (sources, highestReso) => {
  return sources.map(({ quality, url }) => {
    return {
      default: highestReso.quality === quality,
      html: quality,
      url: url,
    };
  });
};

export const removeBackupDefaultSources = (sourcesProp) => {
  return sourcesProp.filter((source) => {
    return source.quality !== "backup" && source.quality !== "default";
  });
};
