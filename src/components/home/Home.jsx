"use client";

import HomeCarousel from "../swiper/HomeCarousel";
import AnimeCarousel from "../swiper/AnimeCarousel";

export default function Home({ trending, popular, recent }) {
  return (
    <div className="bg-bg-main min-h-screen">
      <div className="mx-auto max-w-7xl w-full">
        <HomeCarousel animelist={trending} />

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
      </div>
    </div>
  );
}
