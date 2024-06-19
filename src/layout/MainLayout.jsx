import HeaderTop from "../components/shared/HeaderTop";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
