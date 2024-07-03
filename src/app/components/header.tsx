"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    console.log("clicked");
  };
  return (
    <>
      <header className="bg-[#17726D] text-white h-[70px] md:h-[96px] flex items-center">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl flex items-center">
            <Image
              src={"/sustain.svg"}
              alt="logo"
              width={100}
              height={80}
              className="hidden md:block"
            />

            <div
              className="inline-flex flex-col gap-y-1 border p-2 rounded-full md:hidden cursor-pointer"
              onClick={handleClick}
            >
              <div className="border-[1px] border-white w-[18px]"></div>
              <div className="border-[1px] border-white w-[18px]"></div>
              <div className="border-[1px] border-white w-[18px]"></div>
            </div>
          </div>
          <div>
            <ul className=" gap-x-8 hidden md:flex">
              <li className="border-b-[1px] border-[#DCB07B] cursor-pointer">
                Home
              </li>
              <li className="cursor-pointer">Platform</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Service</li>
            </ul>

            <Image
              src={"/sustain.svg"}
              alt="logo"
              width={80}
              height={60}
              className="block md:hidden"
            />
          </div>

          <div>
            <button className="rounded-full px-5 py-2 md:px-8 md:py-3 bg-[#DCB07B] text-center text-xs md:text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {show && (
        <div className="block md:hidden bg-[#17726D] p-6 absolute left-0 w-full top-[70px] z-40">
          <div>
            <ul className="flex flex-col gap-y-8 text-white">
              <li className=" cursor-pointer">Home</li>
              <li className="cursor-pointer">Platform</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Service</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
