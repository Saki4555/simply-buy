import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import  { Toaster } from 'react-hot-toast';
const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-80"><Outlet /></div>
      
      <Footer />
      <Toaster />
    </>
  );
};

export default MainLayout;
