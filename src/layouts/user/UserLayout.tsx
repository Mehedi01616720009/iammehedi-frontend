import Footer from "@/components/user/LayoutComponents/Footer/Footer";
import Header from "@/components/user/LayoutComponents/Header/Header";
import SubscribeSection from "@/components/user/LayoutComponents/SubscribeSection/SubscribeSection";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <div className="px-[5%]">
            <Header />
            <Outlet />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default UserLayout;
