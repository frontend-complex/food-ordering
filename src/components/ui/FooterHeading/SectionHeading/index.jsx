/* eslint-disable react/prop-types */
const SectionHeading = ({ children, className }) => {
  return (
    <h2
      className={`font-poppins font-bold text-2xl md:text-[32px] text-black text-center md:text-left  ${
        className ? className : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
