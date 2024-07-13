import PopularRestaurant from "../../components/Home/PopularRestaurent";
import Banner from "../../components/RestaurentDetails/Banner";

const RestaurentDetails = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />
      <div className="mb-32">
        <PopularRestaurant title={"Similar Restaurants"} />
      </div>
    </div>
  );
};
export default RestaurentDetails;
