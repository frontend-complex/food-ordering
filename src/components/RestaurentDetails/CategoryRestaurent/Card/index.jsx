/* eslint-disable react/prop-types */
const CategoryRestaurentCard = ({ title, description, price, img }) => {
  console.log({ title, description, img, price });
  return (
    <div className="flex flex-row col-span-4 drop-shadow-2xl hover:drop-shadow-xl duration-300 hover:duration-300 ease-in-out bg-[#FDFDFD] border border-black/10 cursor-pointer gap-4  p-6 rounded-xl">
      {/* left */}
      <div className="w-8/12 text-black">
        <h2 className="text-black my-6 font-semibold text-xl font-poppins">
          {title}
        </h2>
        <p className="text-sm font-normal mb-4">{description}</p>
        <h4 className="font-bold text-lg text-[#03081F] font-poppins">
          GBP {price}
        </h4>
      </div>
      {/* right */}
      <div className="w-4/12">
        <img src={img} alt="" className="rounded-xl" />
      </div>
    </div>
  );
};
export default CategoryRestaurentCard;
