import atvergizeImage from "../../../assets/images/advertise-banner/hero.png";
import logo from "../../../assets/logo.png";
import playstore from "../../../assets/images/advertise-banner/playstore.png";
import applestore from "../../../assets/images/advertise-banner/applestore.png";

const AdvertizeBanner = () => {
  return (
    <section className="mt-24 container rounded-xl mx-auto bg-gradient-to-r from-[#EEEEEE] to-[#E0E1DC] flex flex-col md:flex-row items-center md:pt-24 md:pb-40 md:pr-28 relative">
      <div className="w-full md:w-5/12   ">
        <img
          src={atvergizeImage}
          style={{ filter: "drop-shadow(-16px -15px 4px rgba(0, 0, 0, 0.25))" }}
          className="md:absolute bottom-0 left-0 md:w-[830px]"
        />
      </div>
      <div className="w-full md:w-7/12 ">
        <div className="flex justify-end mb-2 flex-row items-center font-bold text-4xl md:text-[68px] font-poppins">
          <img src={logo} alt="" className="" />
          <h1 className="">ing is more</h1>
        </div>
        <h1 className="text-white text-[54px] font-poppins font-medium bg-[#03081F] rounded-r-full pr-12 py-2 text-right">
          <span className="text-orange underline">Personalised</span> & Instant
        </h1>
        <p className="mt-7 text-right font-normal font-poppins text-2xl mr-16">
          Download the Order.uk app for faster ordering
        </p>
        <div className="flex flex-col md:flex-row mt-6 ml-32 justify-center gap-1 items-center">
          <img src={playstore} alt="" />
          <img src={applestore} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AdvertizeBanner;
