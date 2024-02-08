"use client";

import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dark } from "@clerk/themes";
import { IoIosSearch } from "react-icons/io";

import { outfit } from "@/utils/font";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const { isLoaded, isSignedIn } = useAuth();

  const [atTop, setAtTop] = useState(true);
  const [yPos, setYPos] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
  }, [viewportWidth]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[70] transition-all duration-200 ${
          atTop
            ? "bg-gradient-to-b from-black via-[#0000009f] to-[#00000011]  "
            : "bg-bg-neutral"
        }`}
      >
        <div className="w-[93%] flex justify-between items-center mx-auto py-3 md:py-6 ">
          <Link href="/">
            <div
              className={`text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl md:text-3xl tracking-wide from-primary-main via-pink-400 to-secondary-main ${outfit.className}`}
            >
              Animehub
            </div>
          </Link>
          <div className="flex items-center gap-2 md:gap-4  ">
            <IoIosSearch
              className="text-gray-300 text-3xl md:text-4xl font-bold cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            />

            {!!isLoaded && !!isSignedIn ? (
              <UserButton
                appearance={{
                  baseTheme: dark,
                  elements: {
                    userButtonAvatarBox: `w-10 h-10 flex`,
                  },
                }}
                userProfileMode="navigation"
              />
            ) : (
              <SignInButton
                className={`text-black bg-secondary-main font-bold px-4 rounded-md flex items-center  md:text-lg`}
              />
            )}
          </div>
        </div>
      </nav>
      {isSearchOpen && <SearchModal setIsSearchOpen={setIsSearchOpen} />}
    </>
  );
};

export default Navbar;
