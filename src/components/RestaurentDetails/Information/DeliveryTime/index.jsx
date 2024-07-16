const TimeShedule = ({ time, className }) => {
  return (
    <div className={`${className} mt-8`}>
      {time.map((time) => (
        <div key={time?.id} className="flex flex-row items-center ">
          <h5 className="font-bold text-lg leading-[3]">{time?.day} : </h5>
          <div className="flex flex-row text-lg font-normal ">
            <p className="">{time?.startTime1}</p> -
            <p className="">{time?.closeTime}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TimeShedule;
