import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { Toaster } from "react-hot-toast";


const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        <Sidebar />
        <div className='flex-1 md:ml-64'>
          <div className='p-5'>
            <Outlet />
          </div>
        </div>
        <Toaster />
      </div>
    );
};

export default DashboardLayout;