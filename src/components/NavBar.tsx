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
        "bg-white",  // Changed background to white
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
    <nav className="bg-white text-black sticky top-0 shadow z-50 h-20 w-full p-4 sm:p-6 md:flex md:justify-between md:items-center"> {/* Changed background to white */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/assets/Primary_.svg" alt="Zenly Logo" className="h-10 md:h-12 font-bold" />
        </Link>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 font-bold hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="mx-2 font-bold hover:text-gray-600">
            About-Us
          </Link>
          <Link href="/gallery" className="mx-2 font-bold hover:text-gray-600">
            Gallery
          </Link>
          <Link href="/product" className="mx-2 font-bold hover:text-gray-600">
            Products
          </Link>
          <Link href="/store" className="mx-2 font-bold hover:text-gray-600">
            Store
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
                className="w-6 h-6 text-black"
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
                className="w-6 h-6 text-black"
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
