import SectionHeading from "../../ui/FooterHeading/SectionHeading";
import { categoryList } from "../../../constants/category.constant";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="p-5 md:p-0">
      <SectionHeading className={"mt-16 pb-12 "}>
        Order.uk Popular Categories 🤩
      </SectionHeading>
      <div className="flex  flex-row flex-wrap md:flex-nowrap  items-center box-border md:gap-5 -translate-x-3 md:-translate-x-1 ">
        {categoryList.map((category) => (
          <div
            className="w-1/2 md:w-full h-full pl-5 pb-3 md:pl-0 md:pb-0 md:overflow-x-auto"
            key={category?.id}
          >
            <CategoryCard
              title={category?.title}
              total={category?.total}
              img={category?.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
