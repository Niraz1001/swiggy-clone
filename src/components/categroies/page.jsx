"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Categories = () => {

    const [slider, setslider] = useState(0);
  const [categories, setcategories] = useState([]);

  const nextslide = ()=>{
    if (categories.length-8 == slider) {
        return false
    }
    setslider(slider+3)
  }

  const backslide = ()=>{
    if (slider==0) {
        return false
    }
    setslider(slider-3)
  }

  const categoiresdata = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setcategories(data);
  };

  useEffect(() => {
    categoiresdata();
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      <div className="flex justify-between items-center mb-[30px]">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 rounded-[50%] bg-[#E8E8E9] text-center " >
            <FaArrowLeft className="inline mt-[4px] text-[12px] cursor-pointer" onClick={backslide}/>
          </div>
          <div className="w-8 h-8 rounded-[50%] bg-[#D6D7D8] text-center " >
            <FaArrowRight className="inline mt-[4px] text-[12px] cursor-pointer" onClick={nextslide}/>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center overflow-hidden -z-30 ">
        {
            categories.map((cat,idx)=>{
                return (
                    <div key={idx} className="w-[170px] shrink-0 duration-500" style={{
                        transform: `translateX(-${slider * 100}%)`
                    }}>
                        <img src={"http://localhost:5000/images/" + cat.image} alt="img" ></img>
                    </div>
                )
            })
        }
    </div>

    <hr className="border-slate-300 border-[1px] mt-[40px]"></hr>
    </div> 
  );
};

export default Categories;
