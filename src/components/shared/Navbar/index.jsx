import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import navLinks from "../../../constants/navlinks.constants";

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-8 mb-10 hidden md:flex flex-row justify-between  ">
      <div className="w-4/12 ">
        <img src={logo} alt="" />
      </div>
      <div className="  w-8/12 flex flex-row justify-between items-center text-lg font-medium font-poppins">
        {navLinks.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "py-2 px-8 rounded-full bg-orange text-white"
                : "py-2 px-8 "
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
