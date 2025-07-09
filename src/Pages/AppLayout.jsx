import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Header";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl m-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};
