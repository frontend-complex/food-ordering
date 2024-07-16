const Map = () => {
  return (
    <div className="relative rounded-xl drop-shadow-xl mb-32">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.990684779359!2d90.39233883533095!3d23.72697677363429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8dd4855f073%3A0x27aa71bcab92ae5a!2sBangladesh%20University%20of%20Engineering%20and%20Technology%20(BUET)!5e0!3m2!1sen!2sbd!4v1721131574869!5m2!1sen!2sbd"
        className="border-none w-full h-[600px] rounded-xl"
      ></iframe>
      <div className="text-white bg-[#03081F] px-10 py-24 rounded-xl absolute top-1/2 left-10 -translate-y-1/2">
        <h1 className="text-[32px] font-poppins font-bold">McDonald’s </h1>
        <p className="text-orange font-semibold text-[22px]">South London</p>
        <p className="max-w-[280px] text-lg  font-light font-poppins my-3">
          Tooley St, London Bridge, London SE1 2TF,United Kingdom
        </p>
        <p className="text-lg font-bold font-poppins">Phone number</p>
        <p className="text-2xl font-poppins font-normal text-orange">
          +934443-43
        </p>
        <h4 className="text-lg font-bold font-poppins mt-4">Website</h4>
        <p className="text-2xl font-poppins font-normal text-orange">
          http://mcdonalds.uk/
        </p>
      </div>
    </div>
  );
};
export default Map;
