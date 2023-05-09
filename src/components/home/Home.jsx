"use client";

import HomeCarousel from "../swiper/HomeCarousel";
import AnimeCarousel from "../swiper/AnimeCarousel";

export default function Home({ trending, popular, recent }) {
  return (
    <div className="bg-bg-main min-h-screen">
      <div className="mx-auto max-w-7xl w-full md:w-[90%]">
        <HomeCarousel animelist={trending} />
      </div>

      <div className="mx-auto max-w-7xl w-[90%]">
        <AnimeCarousel
          animelist={recent}
          title="Recently Released Anime"
          className="pt-4 pb-6"
          tag={true}
        />
        <AnimeCarousel
          animelist={trending}
          title="Trending Anime"
          className="pb-6"
        />
        <AnimeCarousel
          animelist={popular}
          title="Popular Anime"
          className="pb-6"
        />

        {/* <Grid data={option === "Trending" ? trending : popular} /> */}
      </div>
    </div>
  );
}
