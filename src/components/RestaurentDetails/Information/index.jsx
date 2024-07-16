import tracking from "../../../assets/images/icons/Tracking.jpg";
import contact from "../../../assets/images/icons/contact.png";
import CardHeading from "./CardHeading";
import DeliveryTime from "./DeliveryTime";

const Information = () => {
  return (
    <div className="flex flex-row bg-[#fbfbfb] rounded-xl drop-shadow-2xl mb-10">
      {/* Delivery Information */}
      <div className=" w-full py-16 px-10">
        {/* Heading */}
        <CardHeading img={tracking} title={"Delivery information"} />
        {/* Time Container */}
        <DeliveryTime />
      </div>
      {/* Contact Information */}
      <div className=" w-full py-16 px-10">
        <CardHeading img={contact} title={"Contact information"} />
        <div className="mt-8">
          <p className="text-lg font-normal font-poppins text-black leading-loose max-w-sm">
            f you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>
          <h4 className="font-bold text-lg leading-loose">Phone number</h4>
          <p className="text-2xl font-normal leading-loose">+934443-43</p>
          <h4 className="font-bold text-lg leading-loose"> Website</h4>
          <a
            href="http://mcdonalds.uk/"
            className="text-2xl font-normal leading-loose"
            target="_blanks"
          >
            http://mcdonalds.uk/
          </a>
        </div>
      </div>
      {/* Operational Times */}
      <div className="border w-full py-16 px-10 bg-black text-white rounded-r-xl"></div>
    </div>
  );
};
export default Information;
