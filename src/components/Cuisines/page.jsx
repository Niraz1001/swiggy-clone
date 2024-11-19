import React from "react";

const Cuisines = () => {

    const Cuisine = [
        
        {
          name: "Chinese Restaurant Near Me",
        },
        {
          name: "South Indian Restaurant Near Me",
        },
        {
          name: "Indian Restaurant Near Me",
        },
        {
          name: "Kerala Restaurant Near Me",
        },
    
        {
          name: "Korean Restaurant Near Me",
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
            name: "Italian Restaurant Near Me",
          },
          {
            name: "Andhra Restaurant Near Me",
          },
          {
            name: "See More",
          }
    ]

  return (
    <div className="max-w-[1000px] mx-auto mt-8">
      <div className="text-[25px] font-bold mb-[30px]">
      Best Cuisines Near Me
      </div>

      <div className="grid grid-cols-4 gap-5 mb-[30px]">
        {Cuisine.map((data, idx) => {
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

export default Cuisines;
