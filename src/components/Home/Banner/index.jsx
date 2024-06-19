import headerBanner from "../../../assets/images/header-banner/Group 112.png";
import heroImage from "../../../assets/images/header-banner/hero.png";

const Banner = () => {
  return (
    <section className="bg-silver2 gap-60 border relative border-black/20 font-poppins  rounded-xl flex flex-row items-center pt-12 pl-14">
      {/* left */}
      <div className="w-5/12 z-30">
        <p className="text-[#03081F] text-base leading-10 ">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="text-[#03081F] leading-snug text-[54px]  font-semibold">
          Feast Your Senses, <span className="text-orange">Fast and Fresh</span>
        </h1>
        <p className="text-[#03081F]  leading-10 text-[13px] mt-8   ">
          Enter a postcode to see what we deliver
        </p>
        <div className="relative w-4/5">
          <input
            type="text"
            name=""
            id=""
            className="py-5 pl-10 pr-60 w-full rounded-full border border-black/40"
            defaultValue={"e.g. EC4R 3TE"}
          />
          <button className="px-14 cursor-pointer  rounded-full bg-orange text-white absolute right-0 top-0 inset-y-0">
            Search
          </button>
        </div>
      </div>
      {/* right */}
      <div className="w-7/12  z-20 flex justify-end">
        <img src={headerBanner} alt="" />
      </div>
      <img
        src={heroImage}
        alt=""
        className="absolute bottom-0 left-1/2 z-10  -translate-x-[55%]"
      />
    </section>
  );
};

export default Banner;
