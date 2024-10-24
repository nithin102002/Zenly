"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [isopen, setIsopen] = useState(false);
  function getMenuClasses() {
    let menuClasses = [];
    if (isopen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-[#161617]",
        "w-full",
        "p-4",
        "left-0",
        "gap-10",
        "flex-col",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }
    return menuClasses.join(" ");
  }

  return (
    <nav className="bg-[#161617] text-white h-20 w-full p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-4xl font-bold">
          Zenly
        </a>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2  font-bold hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="mx-2 font-bold hover:text-gray-300">
            About
          </Link>
          <Link href="/gallery" className="mx-2 font-bold hover:text-gray-300">
            Gallery
          </Link>
          <Link href="/products" className="mx-2 font-bold hover:text-gray-300">
            Products
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsopen(!isopen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isopen ? (
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
