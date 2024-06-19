/* eslint-disable react/prop-types */

const CategoryCard = ({ img, title, total, className }) => {
  return (
    <div className={`${className} rounded-xl w-full `}>
      <div className="">
        <img src={img} className="w-full" />
      </div>
      <div className="flex flex-col gap-1 px-5 py-2 bg-silver3">
        <h4 className="text-[#03081F]  font-bold font-poppins text-lg">
          {title}
        </h4>
        <p className="text-orange  text-[13px] font-poppins font-normal">
          {total} Restaurants
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
