import { IoHome, IoList, IoPricetags } from "react-icons/io5";
import ActiveLink from "../ActiveLink/ActiveLink";

const FirstNav = () => {
    return (
        <div className="hidden xl:flex xl:justify-start xl:items-center xl:gap-7 text-[19px] leading-normal font-semibold">
            <ActiveLink to={"/"}>
                <IoHome className="w-6 h-6" />
                <p>Home</p>
            </ActiveLink>

            <ActiveLink to={"/categories"}>
                <IoList className="w-6 h-6" />
                <p>Categories</p>
            </ActiveLink>

            <ActiveLink to={"/tags"}>
                <IoPricetags className="w-6 h-6" />
                <p>Tags</p>
            </ActiveLink>
        </div>
    );
};

export default FirstNav;
