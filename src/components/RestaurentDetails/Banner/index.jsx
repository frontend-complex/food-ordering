/* eslint-disable react/no-unescaped-entities */
import heroBg from "../../../assets/restaurent-details-page/hero-bg.png";
import hero from "../../../assets/restaurent-details-page/hero.png";
import { GoChecklist } from "react-icons/go";
import { IoBicycle } from "react-icons/io5";
import IconButton from "../../ui/LogoButton";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { TbClockHour9Filled } from "react-icons/tb";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className=" w-full relative bg-center p-14 bg-no-repeat  rounded-xl bg-cover"
    >
      <div className="bg-[#F4F4F4]/70 z-0 absolute inset-y-0 inset-x-0 rounded-xl"></div>
      {/* container */}
      <div className="flex flex-row justify-between items-end gap-32">
        {/* left */}
        <div className="w-7/12  relative font-normal z-10">
          <p className="text-xl font-normal text-black ">I'm lovin' it!</p>
          <h1 className="text-6xl font-semibold mt-2 text-black">
            McDonald’s East London
          </h1>
          <div className="flex mb-8  flex-row gap-4 text-lg mt-8 font-medium">
            <IconButton icon={GoChecklist} title={"Minimum Order: 12 GBP"} />
            <IconButton icon={IoBicycle} title={"Delivery in 20-25 Minutes"} />
          </div>
          <div className="bg-orange absolute flex flex-row items-center gap-3  -bottom-14 -left-14 py-4 px-16 rounded-r-xl text-white">
            <TbClockHour9Filled className="text-2xl text-white" />
            <p className="text-lg font-semibold">Open until 3:00 AM</p>
          </div>
        </div>
        {/* right */}
        <div className="w-5/12  relative  z-10">
          <img src={hero} alt="" className="" />
          <div className="absolute -left-12 bottom-0 bg-white p-2 rounded-lg text-center">
            <p className="text-6xl font-normal text-black mb-2">3.4</p>
            <div className="text-orange flex flex-row items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <p className="text-slate-500 text-sm font-normal">1360 reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
