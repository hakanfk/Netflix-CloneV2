"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const links = ["Home", "Series", "Films", "Popular", "MyList"];

function Header({}: Props) {
  const [clicked, setClicked] = useState<boolean>(false);

  function handleSearch() {
    setClicked(!clicked);
    console.log("Clicked");
  }

  return (
    <div className="flex py-6 px-10 sticky top-0 z-50  bg-gradient-to-b from-black to-black/30 backdrop-blur-sm justify-between">
      {/* 
      
      Left Section
      */}

      <div className="flex flex-row items-center gap-x-12">
        <h2 className="text-3xl tracking-widest font-bold text-red-700">
          Netflix
        </h2>
        <div className="flex gap-x-4">
          {links.map((item, key) => {
            return (
              <Link
                href={`/${item}`}
                key={key}
                className={`text-gray-200 font-bold hover:scale-105 transition-all duration-200 hover:underline`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
      {/* 

            Rİght Section

          */}
      <div className="flex flex-row-reverse gap-x-12">
        <div className="h-10 w-10 rounded-full bg-blue-800 flex justify-center items-center">
          <h2 className="text-lg font-bold text-center">H</h2>
        </div>
        <div className="flex flex-row-reverse  relative justify-center items-center">
          <div className="cursor-pointer" onClick={handleSearch}>
            <AiOutlineSearch className="w-8 h-8 text-gray-200 hover:scale-110 transition-all duration-200" />
          </div>
          <input
            type="text"
            placeholder=" Search films, series"
            className={
              clicked
                ? "bg-black/70 rounded-md h-7 w-52 transition-all duration-700"
                : "bg-black/70 rounded-md h-7 w-0 transition-all duration-700 "
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
