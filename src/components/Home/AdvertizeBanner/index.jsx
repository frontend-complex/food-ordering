import atvergizeImage from "../../../assets/images/advertise-banner/hero.png";
import logo from "../../../assets/logo.png";
import playstore from "../../../assets/images/advertise-banner/playstore.png";
import applestore from "../../../assets/images/advertise-banner/applestore.png";

const AdvertizeBanner = () => {
  return (
    <section className="px-5 md:px-0  mx-auto  mb-10 md:mb-0">
      <div className="mt-14 md:mt-24 container rounded-xl  md:mx-auto bg-gradient-to-r from-[#EEEEEE] to-[#E0E1DC] flex flex-col-reverse md:flex-row items-center pt-20 px-7 md:pt-24 md:pb-40 md:pr-28 relative">
        <div className="w-full md:w-5/12   ">
          <img
            src={atvergizeImage}
            style={{
              filter: "drop-shadow(-16px -15px 4px rgba(0, 0, 0, 0.25))",
            }}
            className="md:absolute bottom-0 left-0 w-80  mt-5 md:mt-0 md:w-[830px]"
          />
        </div>
        <div className="w-full md:w-7/12 ">
          <div className="flex justify-center md:justify-end mb-2 flex-row items-center font-bold text-4xl md:text-[68px] font-poppins">
            <img src={logo} alt="" className="w-[110px] md:w-auto" />
            <h1 className="text-[32px] md:text-[68px]">ing is more</h1>
          </div>
          <h1 className="text-white  font-poppins font-medium md:bg-[#03081F] rounded-r-full text-2xl md:text-[54px] md:pr-12 md:py-2 text-center md:text-right">
            <span className="text-orange underline ">Personalised</span>{" "}
            <span className="text-[#03081F] md:text-white">& Instant</span>
          </h1>
          <p className="mt-7 text-center md:text-right font-normal font-poppins text-sm  md:text-2xl md:mr-16">
            Download the Order.uk app for faster ordering
          </p>
          <div className="flex flex-row mt-6 md:ml-32 justify-center gap-1 items-center">
            <div className="w-full">
              <img src={playstore} alt="" className="w-full" />
            </div>
            <div className="w-full">
              <img src={applestore} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertizeBanner;
