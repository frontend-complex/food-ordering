import { FaFacebook, FaSnapchat } from "react-icons/fa";
import footerLogo from "../../../assets/footerlogo.png";
import appleStore from "../../../assets/images/advertise-banner/applestore.png";
import playStore from "../../../assets/images/advertise-banner/playstore.png";
import FooterHeading from "../../ui/FooterHeading";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import {
  bottomFooterLinks,
  importantLinks,
  legalPages,
} from "../../../constants/footerLinks.constant";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" font-poppins">
      <section className="bg-gray pt-20  pb-14 ">
        {" "}
        <div className="flex flex-col md:flex-row container  gap-20 mx-auto p-5 md:p-0">
          <div className="w-full md:w-3/12  ">
            <img src={footerLogo} alt="" />
            <div className="flex flex-row mt-8 gap-1 w-full ">
              <div className="w-full">
                <img src={appleStore} alt="" className="w-full" />
              </div>
              <div className="w-full">
                <img src={playStore} alt="" className="w-max" />
              </div>
            </div>
            <p className="text-[15px] mt-6 font-normal">
              Company # 490039-445, Registered with ? House of companies.
            </p>
          </div>
          <div className="w-full md:w-9/12  flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-6/12  ">
              <FooterHeading>Get Exclusive Deals in your Inbox</FooterHeading>
              <div className="mt-6 relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="youremail@gmail.com"
                  className="bg-[#D9D9D9] border-none outline-none py-3 pl-8 rounded-full w-full"
                />
                <button className="bg-orange inset-y-0 rounded-full absolute top-0 right-0 px-10 text-white text-lg font-medium font-poppins">
                  Subscribe
                </button>
              </div>
              <p className="my-3 pl-5 font-poppins text-sm font-normal">
                we wont spam, read our email policy
              </p>
              <div className="mt-5 flex flex-row gap-4">
                <FaFacebook className="text-5xl" />
                <RiInstagramFill className="text-5xl" />
                <AiFillTikTok className="text-5xl" />
                <FaSnapchat className="text-5xl" />
              </div>
            </div>
            <div className="w-full md:w-3/12  ">
              <FooterHeading>Legal Pages</FooterHeading>
              <div className="flex flex-col mt-3 text-[15px]">
                {legalPages.map((item) => (
                  <Link
                    className="underline leading-10"
                    key={item.id}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full md:w-3/12  ">
              <FooterHeading>Legal Pages</FooterHeading>
              <div className="flex flex-col mt-3 text-[15px]">
                {importantLinks.map((item) => (
                  <Link
                    className="underline leading-10"
                    key={item.id}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#03081F] text-white    ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8">
          <div className="">
            <p className="text-center md:text-left mb-5 md:mb-0">
              Order.uk Copyright 2024, All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center text-white">
            {bottomFooterLinks.map((item) => (
              <Link className="" to={item.path} key={item.id}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
