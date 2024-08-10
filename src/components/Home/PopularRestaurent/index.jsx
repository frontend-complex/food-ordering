/* eslint-disable react/prop-types */
import { popularRestaurantList } from "../../../constants/popularRestaurant.constant";
import SectionHeading from "../../ui/FooterHeading/SectionHeading";

const PopularRestaurant = ({ title }) => {
  return (
    <section className="p-5 md:p-0">
      <SectionHeading className={"my-14"}>{title}</SectionHeading>
      <div className="flex   overflow-x-auto  flex-row  items-center justify-between gap-2 md:gap-5 ">
        {popularRestaurantList.map((restaurant) => (
          <div key={restaurant.id} className="rounded-xl w-full  md:w-auto ">
            <div className=" w-full">
              <img src={restaurant?.image} className="rounded-t-xl  w-full" />
            </div>
            <div className="bg-orange py-1 md:py-4 text-white px-3 md:px-7 rounded-b-xl">
              <p className="font-normal md:font-bold text-center text-sm md:text-lg  font-poppins">
                {restaurant?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurant;
