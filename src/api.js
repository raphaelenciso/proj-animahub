export const provider = process.env.NEXT_PUBLIC_PROVIDER || "gogoanime";

export const api =
  provider === "gogoanime"
    ? "https://animahub-api.vercel.app/anime/gogoanime/"
    : "https://animahub-api.vercel.app/meta/anilist/";

// export const provider = "anilist";
// export const api = "https://animahub-api.vercel.app/meta/anilist/";
