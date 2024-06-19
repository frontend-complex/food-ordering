import { TiLocation } from "react-icons/ti";
import star from "../../../assets/images/icons/star.png";
import { PiBasketFill } from "react-icons/pi";
import { FaCircleArrowDown } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <nav className="flex flex-row items-center justify-between container mx-auto bg-silver rounded-b-xl border border-black/10 border-t-0  border-r-0">
      <div className="flex flex-row  pl-9 items-center  gap-3 font-poppins  w-5/12">
        <img src={star} alt="" className="" />
        <p className="font-poppins text-[15px] font-medium">
          {" "}
          Get 5% Off your first order,{" "}
          <span className="text-orange font-bold">Promo: ORDER5</span>
        </p>
      </div>
      <div className="flex flex-row justify-end  gap-20  w-7/12">
        <div className="flex  pt-6 pb-5 px-9  flex-row items-center text-[15px] gap-4 ">
          <TiLocation className="text-xl" />
          <p className="font-medium">Regent Street, A4, A4201, London</p>
          <a href="" className="font-medium underline text-orange">
            Change Location
          </a>
        </div>
        <div className="bg-green flex flex-row items-center text-white w-max rounded-b-xl ">
          <div className="py-4 px-5 h-full text-xl border-r border-white">
            <PiBasketFill />
          </div>
          <p className="py-4 px-5  h-full border-r border-white text-base font-semibold">
            23 Items
          </p>
          <p className="py-4 px-5  h-full border-r border-white text-base font-semibold">
            GBP 79.89
          </p>
          <div className="py-4 px-5 h-full text-xl border-r border-white">
            <FaCircleArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
