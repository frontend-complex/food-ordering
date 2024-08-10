import { TiLocation } from "react-icons/ti";
import star from "../../../assets/images/icons/star.png";
import { PiBasketFill } from "react-icons/pi";
import { FaCircleArrowDown } from "react-icons/fa6";
import logo from "../../../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import avatar from "../../../assets/images/avatar/avatar-1.png";
import shopingBasket from "../../../assets/images/icons/Shopping Basket.svg";

const HeaderTop = () => {
  return (
    <>
      {/* Desktop Header */}
      <nav className="hidden md:flex flex-col md:flex-row items-center justify-between container mx-auto bg-silver rounded-b-xl border border-black/10 border-t-0  border-r-0 ">
        <div className="flex flex-row  md:pl-9 items-center  gap-3 font-poppins  w-full md:w-5/12">
          <img src={star} alt="" className="" />
          <p className="font-poppins text-[15px] font-medium">
            {" "}
            Get 5% Off your first order,{" "}
            <span className="text-orange font-bold">Promo: ORDER5</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between  w-full md:w-7/12">
          <div className="hidden md:flex  pt-6 pb-5 px-9  flex-row items-center text-[15px] gap-4 ">
            <TiLocation className="text-xl" />
            <p className="font-medium">Regent Street, A4, A4201, London</p>
            <a href="" className="font-medium underline text-orange">
              Change Location
            </a>
          </div>
          <div className="bg-green flex flex-row items-center text-white   md:w-max rounded-b-xl ">
            <div className="px-2.5 py-2  md:py-4 md:px-5 flex items-center h-full border-r border-white">
              <PiBasketFill className="text-2xl " />
            </div>
            <p className="px-2.5 py-2  md:py-4 md:px-5 flex items-center  h-full border-r border-white text-base font-semibold">
              23 Items
            </p>
            <p className="px-2.5 py-2  md:py-4 md:px-5 flex items-center  h-full border-r border-white text-base font-semibold">
              GBP 79.89
            </p>
            <div className="px-2.5 py-2  md:py-4 md:px-5 flex items-center h-full text-xl border-r border-white">
              <FaCircleArrowDown />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Header */}
      <div className="">
        {/* Mobile Nav */}
        <section className="flex flex-row md:hidden justify-between  mx-5 ">
          <div className="w-10/12 py-4">
            <img src={logo} alt="" className="w-36" />
          </div>
          <button className="w-2/12 py-4 flex justify-end items-center border-l border-l-black/30">
            <MdOutlineMenu className="text-4xl text-right" />
          </button>
        </section>
        {/* Mobile Cart */}
        <section className="flex flex-row md:hidden ">
          <div
            className="flex flex-row py-4 pl-5
           items-center bg-orange w-full gap-2"
          >
            <img src={avatar} alt="" className="rounded-full" />
            <h4 className="text-[14px] font-semibold text-black">Aycan</h4>
          </div>
          <div
            className="w-full bg-green py-4 pr-5 pl-5 flex flex-row items-center gap-4
          "
          >
            <img src={shopingBasket} alt="shopping basket" className="w-1/3" />
            <h4 className="text-white text-base font-semibold">GBP 79.89</h4>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeaderTop;
