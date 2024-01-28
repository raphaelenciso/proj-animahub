"use client";

import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { dark } from "@clerk/themes";

const Navbar = () => {
  const { isLoaded, isSignedIn } = useAuth();

  const [searchFocused, setSearchFocused] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [yPos, setYPos] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, [yPos]);

  const changeBackground = () => {
    setYPos(window.scrollY);
    if (window.scrollY > 150) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportWidth]); // Empty dependency array to run the effect only once

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-10 transition-all duration-200 ${
        atTop
          ? "bg-gradient-to-b from-black via-[#0000009f] to-[#00000011]  "
          : "bg-bg-neutral"
      }`}
    >
      <div className="w-[93%] flex justify-between items-center mx-auto py-3 ">
        <Link href="/">
          <div
            className={`text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl md:text-3xl tracking-wide from-primary-main via-pink-400 to-secondary-main `}
          >
            {searchFocused && viewportWidth < 500 ? "AH" : "AnimeHub"}
          </div>
        </Link>
        <div className="flex gap-2  ">
          <SearchBar onFocus={handleSearchFocus} onBlur={handleSearchBlur} />

          {!!isLoaded && !!isSignedIn ? (
            <UserButton
              appearance={{
                baseTheme: dark,
                elements: {
                  userButtonAvatarBox: `w-10 h-10 ${
                    searchFocused && "hidden sm:flex"
                  }`,
                },
              }}
              userProfileMode="navigation"
            />
          ) : (
            <SignInButton
              className={`text-white border px-4 rounded-full ${
                searchFocused && "hidden sm:flex"
              }  `}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

const SearchBar = ({ onFocus, onBlur }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${e.target[0].value}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className=" peer cursor-pointer relative z-10 h-10 w-12 rounded-3xl  border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-secondary-main focus:pl-16 focus:pr-4 text-gray-100 | md:w-full md:pl-16 md:pr-4 motion | transition-all duration-300"
          placeholder="Search"
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-secondary-main peer-focus:stroke-secondary-main md:border-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
};

export default Navbar;
