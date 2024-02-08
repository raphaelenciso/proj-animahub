"use client";

import HomeCarousel from "../swiper/HomeCarousel";
import AnimeCarousel from "../swiper/AnimeCarousel";

export default function Home({ animes }) {
  return (
    <div className="bg-bg-main min-h-screen">
      <div className="mx-auto max-w-[1400px] w-full ">
        <HomeCarousel animelist={animes[1].data.results.slice(0, 3)} />
      </div>

      <div className="mx-auto max-w-7xl w-full ">
        {animes?.map((anime) => (
          <AnimeCarousel
            key={anime.by}
            animelist={anime.data.results}
            title={anime.by}
            className="pb-6"
            tag={anime.by === "Recently Release Episodes"}
          />
        ))}
      </div>
    </div>
  );
}
