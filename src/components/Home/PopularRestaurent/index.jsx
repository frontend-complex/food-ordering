
import { popularRestaurantList } from "../../../constants/popularRestaurant.constant";
import SectionHeading from "../../ui/FooterHeading/SectionHeading";

const PopularRestaurant = () => {
  return (
    <section className="">
      <SectionHeading className={"my-14"}>Popular Restaurants</SectionHeading>
      <div className="flex flex-row items-center justify-between gap-5">
        {popularRestaurantList.map((restaurant) => (
          <div key={restaurant.id} className="rounded-xl ">
            <div className=" w-full">
              <img src={restaurant?.image} className="rounded-t-xl w-full" />
            </div>
            <div className="bg-orange py-4 text-white px-7 rounded-b-xl">
            <p className="font-bold text-center text-lg  font-poppins">{restaurant?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurant;
