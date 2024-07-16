import { BsPlusCircleFill } from "react-icons/bs";
import selectedFoodData from "../../../constants/selectedFood.constant";
const SelectedFood = () => {
  return (
    <div className="flex flex-row items-center gap-5 mt-24 mb-16">
      {selectedFoodData.map((food) => (
        <div
          key={food?.id}
          className="rounded-xl cursor-pointer relative  w-full"
        >
          <img src={food?.img} alt="" className="rounded-xl w-full" />
          <div className="bg-gradient-to-bl from-white/0 to-[#03081F] rounded-xl via-[#03081F]/20 absolute inset-y-0 inset-x-0"></div>
          <p className="absolute bg-black text-white p-5  rounded-b-xl text-lg font-bold top-0 right-5 border-none">
            -20%
          </p>
          <div className="absolute left-7 bottom-3">
            <p className="text-orange font-medium text-lg">
              McDonald’s East London
            </p>
            <h3 className="text-3xl font-bold text-white">
              First Order Discount
            </h3>
          </div>
          <div className="absolute right-0 bg-white/90 p-5 rounded-tl-3xl rounded-br-xl  bottom-0">
            <BsPlusCircleFill className="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default SelectedFood;
