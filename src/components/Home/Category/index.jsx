import SectionHeading from "../../ui/FooterHeading/SectionHeading";
import { categoryList } from "../../../constants/category.constant";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="p-5 md:p-0">
      <SectionHeading className={"mt-16 pb-12 "}>
        Order.uk Popular Categories 🤩
      </SectionHeading>
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        {categoryList.map((category) => (
          <CategoryCard
            title={category?.title}
            key={category?.id}
            total={category?.total}
            img={category?.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
