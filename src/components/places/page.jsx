import React from "react";

const Places = () => {

    const place = [
        {
          name: "Best Restaurants in Bangalore",
        },
        {
          name: "Best Restaurants in Pune",
        },
        {
          name: "Best Restaurants in Mumbai",
        },
        {
          name: "Best Restaurants in Delhi",
        },
    
        {
          name: "Best Restaurants in Hyderabad",
        },
        {
          name: "Best Restaurants in Kolkata",
        },
        {
          name: "Best Restaurants in ChennaiBest Restaurants in Chennai",
        },
        {
          name: "Best Restaurants in Chandigarh",
        },
        {
            name: "Best Restaurants in Ahmedabad",
          },
          {
            name: "Best Restaurants in Jaipur",
          },
          {
            name: "Best Restaurants in Nagpur",
          },
          {
            name: "See More",
          }
    ]

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      <div className="text-[25px] font-bold mb-[30px]">
      Best Places to Eat Across Cities
      </div>

      <div className="grid grid-cols-4 gap-5 mb-[30px] justify-center">
        {place.map((data, idx) => {
          return (
            <div
              className="py-1 px-3 border-gray-400 border-[1px] rounded-3xl cursor-pointer text-[15px] "
              key={idx}
            >
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;
