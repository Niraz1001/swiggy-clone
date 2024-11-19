"use client";
import React, { useEffect, useState } from "react";
import Card from "../card/page";
import { IoFilter } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Resturants = () => {
  const [card, setcard] = useState([]);

  const carddata = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setcard(data);
  };

  useEffect(() => {
    carddata();
  }, []);

  const filter = [
    {
      icon: <IoFilter className="inline"/>,
      name: "Filter",
    },
    {
      icon: <FaChevronDown className="inline"/>,
      name: "Sort By",
    },
    {
      name: "Fast Delivery",
    },
    {
      name: "New On Swiggy",
    },

    {
      name: "Pure veg",
    },
    {
      name: "offers",
    },
    {
      name: "Rs 300- Rs600",
    },
    {
      name: "Less than Rs. 300",
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      <div className="text-[25px] font-bold mb-[30px]">
        Restaurants with online food delivery in Mumbai
      </div>

      <div className="flex gap-5 mb-[30px]">

      {
        filter.map((data,idx)=>{
            return (
                    <div className="py-1 px-3 border-gray-400 border-[1px] rounded-3xl cursor-pointer" key={idx}>{data.name} {data.icon}</div>
            )
        })
      }
      </div>

      <div className="mb-[40px] grid grid-cols-4 gap-5 justify-center items-center">
        {card.slice(2,11).map((data, idx) => {
          return (
            <div key={idx}>
              <Card {...data} width="240px" />
            </div>
          );
        })}
      </div>
      <hr className="border-slate-300 border-[1px]"></hr>
    </div>
  );
};

export default Resturants;
