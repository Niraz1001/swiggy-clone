"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { CiGps } from "react-icons/ci";
import { RiFolder5Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BsMinecart } from "react-icons/bs";

const Navbar = () => {
  const [trigger, settrigger] = useState(false);

  const showmenu = () => {
    settrigger(true);
  };

  const closemenu = () => {
    settrigger(false);
  };

  const nav = [
    {
      icon: <RiFolder5Line />,
      name: "Swiggy Corporate",
    },
    {
      icon: <CiSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offer",
      sup: "New",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <CiUser />,
      name: "Sign In",
    },
    {
      icon: <BsMinecart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="w-full h-full black-overlay fixed duration-500 z-[10000000]"
        style={{
          visibility: trigger ? "visible" : "hidden",
        }}
        onClick={closemenu}
      >
        <div
          className="w-[450px] h-full absolute bg-white duration-[400ms] "
          style={{
            left: trigger ? "0%" : "-100%",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="ml-[50px] mt-[50px] mr-[50px]">
            <IoMdClose
              className="text-2xl mb-[30px] cursor-pointer"
              onClick={closemenu}
            />
            <div className="border-gray-300 border-[1px]  p-[14px] mb-[30px]">
              <input
                type="text"
                placeholder="Search for area, Street name.. "
                className="border-none outline-none"
              ></input>
            </div>

            <div className="border-gray-300 border-[1px]  p-[14px]">
              <p className="text-[16px]">
                <CiGps className="inline text-[20px]" /> &nbsp;Get Current
                Location
              </p>
              <p className="text-[12px] text-gray-400 ml-8">Using GPS</p>
            </div>
          </div>
        </div>
      </div>

      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto  flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="img\logo.png"
              alt="logo"
              className="w-[50px] h-[60px]"
            ></img>
            <div className="text-[14px] text-gray-600">
              <span className="font-semibold border-b-black border-b-2 text-[16px] text-black hover:text-orange-500 hover:border-b-orange-500 cursor-pointer">
                Other
              </span>
              &nbsp;&nbsp; Mumbai, Maharashtra, India{" "}
              <FaChevronDown
                className="inline mt-[-3px] text-orange-500 cursor-pointer"
                onClick={showmenu}
              />
            </div>
          </div>

          <div>
            <nav className="flex justify-center items-center gap-10 font-medium text-[16px]">

              {nav.map((val, idx) => {
                return <li className="list-none flex justify-center items-center gap-2 hover:text-orange-500" key={idx}>{val.icon}{val.name}<sup className="text-orange-500">{val.sup}</sup></li>
              })}

            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
