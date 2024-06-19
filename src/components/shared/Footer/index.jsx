import { FaFacebook, FaSnapchat } from "react-icons/fa";
import footerLogo from "../../../assets/footerlogo.png";
import appleStore from "../../../assets/images/advertise-banner/applestore.png";
import playStore from "../../../assets/images/advertise-banner/playstore.png";
import FooterHeading from "../../ui/FooterHeading";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import {
  importantLinks,
  legalPages,
} from "../../../constants/footerLinks.constant";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray pt-20 pb-14 font-poppins">
      <section className="flex flex-row container  gap-20 mx-auto">
        <div className="w-3/12  ">
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
        <div className="w-9/12  flex flex-row gap-10">
          <div className="w-6/12  ">
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
          <div className="w-3/12  ">
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
          <div className="w-3/12  ">
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
      </section>
    </footer>
  );
};

export default Footer;
