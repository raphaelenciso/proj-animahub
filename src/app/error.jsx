"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="bg-bg-main min-h-screen flex justify-center items-center">
      <h2 className="text-white text-xl md:text-2xl pl-[10px] xl:pl-0 font-semibold mb-2">
        This anime is not available right now, come back later.
      </h2>
    </div>
  );
}
