/* eslint-disable react/prop-types */
const SectionHeading = ({ children, className }) => {
  return (
    <h2 className={`font-poppins font-bold text-[32px] text-black ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
