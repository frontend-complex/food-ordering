import PopularRestaurant from "../../components/Home/PopularRestaurent";
import Banner from "../../components/RestaurentDetails/Banner";
import CategoryRestaurent from "../../components/RestaurentDetails/CategoryRestaurent";
import FoodCategory from "../../components/RestaurentDetails/FoodCategory";
import SelectedFood from "../../components/RestaurentDetails/SelectedFood";

const RestaurentDetails = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      <FoodCategory />
      <SelectedFood />
      <CategoryRestaurent />
      {/* <div className="mb-32">
        <PopularRestaurant title={"Similar Restaurants"} />
      </div> */}
    </div>
  );
};
export default RestaurentDetails;
