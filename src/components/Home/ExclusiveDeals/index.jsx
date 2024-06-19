import { Link } from "react-router-dom";
import {
  exclusiveDeals,
  exclusiveDealsLink,
} from "../../../constants/exclusivedeals.constant";
import SectionHeading from "../../ui/FooterHeading/SectionHeading";
import DealCard from "./DealCard";

const ExclusiveDeals = () => {
  return (
    <div>
      <div className=" my-14 flex flex-row items-center justify-between">
        <SectionHeading>Up to -40% 🎊 Order.uk exclusive deals</SectionHeading>
        <div className="flex flex-row items-center gap-8 font-normal font-poppins text-black text-base">
          {exclusiveDealsLink.map((item) => (
            <Link to={item.path} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-5 ">
        {exclusiveDeals[1].content.map((deal) => (
          <DealCard
            className={"rounded-xl"}
            key={deal.id}
            image={deal?.img}
            title={deal?.title}
            type={deal?.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDeals;
