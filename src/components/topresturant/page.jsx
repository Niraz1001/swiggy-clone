'use client'
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../card/page";

const Topresturants = () => {

    const [slider, setslider] = useState(0);
    const [card, setcard] = useState([]);
  
    const nextslide = ()=>{
      if (card.length-2 == slider) {
          return false
      }
      setslider(slider+2)
    }
  
    const backslide = ()=>{
      if (slider==0) {
          return false
      }
      setslider(slider-2)
    }
  
    const carddata = async () => {
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      const data = await response.json();
      setcard(data);
    };
  
    useEffect(() => {
        carddata();
    }, []);
  

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      <div className="flex justify-between items-center mb-[30px]">
        <div className="text-[25px] font-bold">Top restaurant chains in Mumbai</div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 rounded-[50%] bg-[#E8E8E9] text-center ">
            <FaArrowLeft
              className="inline mt-[4px] text-[12px] cursor-pointer" onClick={backslide}
            />
          </div>
          <div className="w-8 h-8 rounded-[50%] bg-[#D6D7D8] text-center ">
            <FaArrowRight
              className="inline mt-[4px] text-[12px] cursor-pointer" onClick={nextslide}
            />
          </div>
        </div>
      </div>
      <div className="mb-[40px] flex gap-5 overflow-hidden ">
        {
            card.map((data,idx) =>{
                return(
                    <div key={idx} className="duration-500 " style={{
                        transform: `translateX(-${slider * 100}%)`
                    }}>
                        <Card {...data} width="273px"/>
                    </div>
                )
            })
        }
      </div>

      <hr className="border-slate-300 border-[1px]"></hr>
    </div>
  );
};

export default Topresturants;
