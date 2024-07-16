import { deliveryTime } from "../../../../constants/information.constant";

const DeliveryTime = () => {
  return (
    <div className="">
      {deliveryTime.map((time) => (
        <div key={time?.id} className="flex flex-row items-center mt-8">
          <h5 className="font-bold text-lg leading-normal">{time?.day} : </h5>
          <div className="flex flex-row text-lg font-normal text-black">
            <p className="">{time?.startTime1}</p> -
            <p className="">{time?.closeTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DeliveryTime;
