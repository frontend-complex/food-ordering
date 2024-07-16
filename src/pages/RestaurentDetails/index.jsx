import PopularRestaurant from "../../components/Home/PopularRestaurent";
import Banner from "../../components/RestaurentDetails/Banner";
import CategoryRestaurent from "../../components/RestaurentDetails/CategoryRestaurent";
import CustomerReview from "../../components/RestaurentDetails/CustomerReview";
import FoodCategory from "../../components/RestaurentDetails/FoodCategory";
import Information from "../../components/RestaurentDetails/Information";
import Map from "../../components/RestaurentDetails/Map";
import SelectedFood from "../../components/RestaurentDetails/SelectedFood";

const RestaurentDetails = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      <FoodCategory />
      <SelectedFood />
      <CategoryRestaurent />
      <Information />
      <Map />
      <CustomerReview />
      {/* <div className="mb-32">
        <PopularRestaurant title={"Similar Restaurants"} />
      </div> */}
    </div>
  );
};
export default RestaurentDetails;
