"use client";

import { SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { dark } from "@clerk/themes";

const Navbar = () => {
  const { isSignedIn } = useUser();

  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
  };

  return (
    <nav className="bg-bg-neutral sticky w-full top-0 z-10 ">
      <div className="w-[93%]  max-w-7xl flex justify-between items-center mx-auto py-2 ">
        <Link href="/">
          <div
            className={`text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl md:text-3xl tracking-wide from-primary-main via-pink-400 to-secondary-main`}
          >
            AnimaHub
          </div>
        </Link>
        <div className="flex gap-2  ">
          <SearchBar onFocus={handleSearchFocus} onBlur={handleSearchBlur} />

          {isSignedIn ? (
            <UserButton
              appearance={{
                baseTheme: dark,
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                },
              }}
              userProfileMode="navigation"
            />
          ) : (
            <SignInButton
              className={`text-white border px-4 rounded-full  ${
                searchFocused && "hidden sm:block"
              }`}
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
          className=" peer cursor-pointer relative z-10 h-10 w-12 rounded-3xl  border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-primary-main focus:pl-16 focus:pr-4 text-gray-100 | md:w-full md:pl-16 md:pr-4 motion | transition-all duration-300"
          placeholder="Search"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-primary-main peer-focus:stroke-primary-main md:border-gray-500"
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
