import headerBanner from "../../../assets/images/header-banner/Group 112.png";
import heroImage from "../../../assets/images/header-banner/hero.png";

const Banner = () => {
  return (
    <section className="bg-silver2 gap-10 md:gap-60 border relative border-black/20 font-poppins  rounded-xl flex flex-col-reverse md:flex-row items-center  mt-10 md:mt-0 md:pt-12 md:pl-14 mx-5 md:mx-0 ">
      {/* left */}
      <div className="w-full p-2 md:p-0 md:w-5/12 z-30">
        <p className="text-[#03081F] text-base leading-10 text-center md:text-left ">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-[#03081F] leading-snug text-3xl md:text-[54px] text-center md:text-left  font-semibold">
          Feast Your Senses, <span className="text-orange">Fast and Fresh</span>
        </h1>
        <p className="text-[#03081F]  leading-10 text-[13px] mt-8  text-center md:text-left  ">
          Enter a postcode to see what we deliver
        </p>
        <div className="relative w-full md:w-4/5 ">
          <input
            type="text"
            name=""
            id=""
            className="py-3 md:py-5 pl-3 pr-32 md:pl-10 md:pr-60 w-full rounded-full border border-black/40"
            defaultValue={"e.g. EC4R 3TE"}
          />
          <button className="px-10 md:px-14 cursor-pointer  rounded-full bg-orange text-white absolute right-0 top-0 inset-y-0">
            Search
          </button>
        </div>
      </div>
      {/* right */}
      <div className="w-full md:w-7/12   z-20 flex justify-end">
        <img src={headerBanner} alt="" />
      </div>
      <img
        src={heroImage}
        alt=""
        className="absolute hidden md:block md:bottom-0 md:left-1/2 z-10  -translate-x-[55%]"
      />
    </section>
  );
};

export default Banner;
