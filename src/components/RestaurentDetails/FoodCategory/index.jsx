import { LuSearch } from "react-icons/lu";
import { foodCategory } from "../../../constants/category.constant";
import { useState } from "react";

const FoodCategory = () => {
  const [activeCategory, setActiveCategory] = useState("Offers");
  console.log(activeCategory);
  return (
    <div className="">
      {/* top */}
      <div className="py-10 flex flex-row items-center justify-between px-10">
        <h1 className="font-bold text-3xl text-black  w-9/12 ">
          All Offers from McDonald’s East London
        </h1>
        <div className="  w-3/12 relative">
          <input
            type="text"
            name="search-food"
            id="search-food"
            className="border border-[#03081F] placeholder:text-slate-400 text-lg font-poppins font-semibold w-full rounded-full py-4 pr-2 pl-10"
            placeholder="Search from menu..."
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-3">
            <LuSearch className="text-2xl text-slate-400" />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-silver3 py-7 border-y border-y-black/10 flex flex-row justify-between  items-center  ">
        {foodCategory.map((category) => {
          //   console.log(category);
          //   console.log(activeCategory);
          return (
            <button
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "font-bold text-xl px-1 py-2 w-full rounded-full bg-black text-white"
                  : "font-bold text-xl px-1 py-2 w-full rounded-full hover:bg-black hover:text-white"
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
      {/* Selected Food */}
    </div>
  );
};
export default FoodCategory;
