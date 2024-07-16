import avatar from "../../../../assets/images/avatar/avatar.png";
import { CiClock2 } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

const ReviewCard = () => {
  return (
    <div className="bg-white p-7  px-5 ml-5 rounded-md">
      {/* top */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <img src={avatar} alt="" className="" />
          <div className="w-[2px] bg-orange h-[50px]"></div>
          <div className="">
            <p className="text-lg font-semibold text-[#03081F]">St Glx</p>
            <p className="text-base text-orange font-normal font-poppins">
              South London
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex flex-row gap-1 text-orange justify-end mb-1">
            <IoStar className="text-xl" />
            <IoStar className="text-xl" />
            <IoStar className="text-xl" />
            <IoStar className="text-xl" />
            <IoStar className="text-xl" />
          </div>
          <div className="flex flex-row items-end gap-3">
            <CiClock2 className="text-2xl text-orange" />
            <p className="text-base font-normal text-black">
              24th September, 2023
            </p>
          </div>
        </div>
      </div>
      {/* content */}
      <p className="text-base font-normal max-w-md mt-7">
        The positive aspect was undoubtedly the efficiency of the service. The
        queue moved quickly, the staff was friendly, and the food was up to the
        usual McDonald's standard – hot and satisfying.
      </p>
    </div>
  );
};
export default ReviewCard;
