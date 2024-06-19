/* eslint-disable react/prop-types */

const FooterHeading = ({ children, className }) => {
  return (
    <h2
      className={`text-[#03081F] font-poppins font-bold text-lg ${className}`}
    >
      {children}
    </h2>
  );
};

export default FooterHeading;
