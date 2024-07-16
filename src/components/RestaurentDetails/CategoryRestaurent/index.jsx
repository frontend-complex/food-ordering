import foodStore from "../../../constants/foodStore.constant";
import CategoryRestaurentCard from "./Card";

const CategoryRestaurent = () => {
  //   console.log(foodStore);
  return (
    <div>
      {foodStore?.map((category, index) => {
        // console.log(category);
        // console.log(store?.categoryTitle);
        return (
          <div className="" key={index}>
            <h1 className="text-[44px] text-orange mb-10  font-bold">
              {category?.categoryTitle}
            </h1>
            <div className="grid grid-cols-12 gap-5 mb-20">
              {category?.categoryStore?.map((store) => {
                //   console.log(store);
                return (
                  <CategoryRestaurentCard
                    title={store?.title}
                    description={store?.description}
                    img={store?.img}
                    price={store?.price}
                    key={store?.id}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryRestaurent;
