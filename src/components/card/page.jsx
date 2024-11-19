import React from "react";
import { MdStars } from "react-icons/md";

const Card = (props) => {
  return (
    <div className="shrink-0  duration-200 mb-5" style={{width:props.width}}>
      <div className="h-[182px] object-cover  relative overflow-hidden rounded-[20px]">
        <img
          src={"http://localhost:5000/images/" + props.image} 
          alt="img" className="w-full h-full"
        ></img>
        <div className="w-full h-full image-overlay absolute top-0 flex items-end  text-[20px] text-white font-bold pb-2 p-5">
          {props.offer}
        </div>
      </div>
      <div className="font-bold text-[18px] pl-5 mt-3 ">{props.title}</div>
        <div className="font-medium text-[16px] pl-5"><MdStars className="inline text-green-700 text-[20px] mt-[-4px]"/> {props.rating} {props.minTime}-{props.maxTime} mins</div>
        <div className="text-[16px] pl-5">{props.name}</div>
        <div className="text-[16px] pl-5">{props.place}</div>
    </div>
  );
};

export default Card;
