"use client";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [isopen, setIsopen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isopen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-white",
        "w-full",
        "p-4",
        "left-0",
        "gap-10",
        "flex-col",
        "items-center",
      ];
    } else {
      menuClasses = ["hidden", "md:flex", "items-center", "justify-center"];
    }
    return menuClasses.join(" ");
  }

  return (
    <nav className="bg-white text-black sticky top-0 shadow z-50 h-20 w-full p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center md:w-1/4 justify-start">
          <Link href="/" className="flex items-center">
            <img src="/assets/Primary_.svg" alt="Zenly Logo" className="h-10 md:h-12 font-bold" />
          </Link>
        </div>

        {/* Center Section: Menu Links */}
        <div className={`${getMenuClasses()} md:w-1/2 justify-center`}>
          <Link href="/" className="mx-4 font-teko tracking-wide text-xs sm:text-sm md:text-lg lg:text-2xl font-bold hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="mx-4 font-teko tracking-wide text-xs sm:text-sm md:text-lg lg:text-2xl font-bold hover:text-gray-600">
            AboutUs
          </Link>
          <Link href="/gallery" className="mx-4 font-teko tracking-wide text-xs sm:text-sm md:text-lg lg:text-2xl font-bold hover:text-gray-600">
            Gallery
          </Link>
          <Link href="/product" className="mx-4 font-teko tracking-wide text-xs sm:text-sm md:text-lg lg:text-2xl font-bold hover:text-gray-600">
            Products
          </Link>
          <Link href="/store" className="mx-4 font-teko tracking-wide text-xs sm:text-sm md:text-lg lg:text-2xl font-bold hover:text-gray-600">
            Store
          </Link>
        </div>

        {/* Right Section: Contact Us */}
        <div className="hidden md:flex md:w-1/4 justify-end items-center">
          <Link href="tel:+1234567890" className="mx-2 font-teko tracking-wide text-xs sm:text-sm md:text-lg lg:text-xl font-bold hover:text-gray-600">
            Contact Us: +91 6379645725
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsopen(!isopen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isopen ? (
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
