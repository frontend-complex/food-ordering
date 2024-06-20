import AdvertizeBanner from "../../components/Home/AdvertizeBanner";
import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import ExclusiveDeals from "../../components/Home/ExclusiveDeals";
import PopularRestaurant from "../../components/Home/PopularRestaurent";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExclusiveDeals />
      <Category />
      <PopularRestaurant />
      <AdvertizeBanner />
    </div>
  );
};

export default Home;
