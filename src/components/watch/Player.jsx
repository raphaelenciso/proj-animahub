"use client";

import {
  getHighestReso,
  playM3u8,
  removeBackupDefaultSources,
  reshapeSources,
} from "@/utils/watch";
import Artplayer from "artplayer";

import { useEffect, useRef } from "react";
import { backward, forward } from "../svg/player";

const Player = ({ sources: sourcesProp }) => {
  const artRef = useRef();
  let sources = removeBackupDefaultSources(sourcesProp);

  useEffect(() => {
    let highestReso = getHighestReso(sources);

    Artplayer.PLAYBACK_RATE = [0.5, 0.75, 1, 1.24, 1.5, 2];

    var art = new Artplayer({
      container: artRef.current,
      url: sources[highestReso.index].url,
      type: "m3u8",
      customType: {
        m3u8: playM3u8,
      },

      fullscreen: true,
      autoOrientation: true,
      forward: 10,
      lock: true,
      playbackRate: true,
      setting: true,
      settings: [
        {
          html: "Quality",
          width: 150,
          tooltip: "1080P",
          selector: reshapeSources(sources, highestReso),
          onSelect: function (item, $dom, event) {
            art.switchQuality(item.url, item.html);
            return item.html;
          },
        },
      ],
      controls: [
        {
          index: 11,
          name: "fast-rewind",
          position: "left",
          html: forward,
          tooltip: "Backward 10s",
          click: function () {
            art.backward = 10;
          },
        },
        {
          index: 12,
          name: "fast-forward",
          position: "left",
          html: backward,
          tooltip: "Forward 10s",
          click: function () {
            art.forward = 10;
          },
        },
      ],
      layers: [
        {
          name: "forward",
          html: "",
          style: {
            position: "absolute",
            top: 0,
            right: 0,
            width: "25%",
            height: "100%",
          },
          click() {
            art.controls.show = !art.controls.show;
          },
        },
        {
          name: "backward",
          html: "",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "25%",
            height: "100%",
            zIndex: "-1",
          },
          click() {
            art.controls.show = !art.controls.show;
          },
        },
      ],
    });

    function forward10() {
      if (art.isLock) {
        return;
      }
      art.forward = 10;
    }

    function backward10() {
      if (art.isLock) {
        return;
      }
      art.backward = 10;
    }

    art.layers["forward"].ondblclick = forward10;

    art.layers["backward"].ondblclick = backward10;

    // console.log(art.utils.lock);
  }, []);

  return <div className="w-full aspect-video" ref={artRef}></div>;
};
export default Player;
