import { IoHome, IoList, IoMail, IoPricetags, IoSend } from "react-icons/io5";
import ActiveLink from "../ActiveLink/ActiveLink";

type Props = {
    openMenu: boolean;
};

const MobileNav = ({ openMenu }: Props) => {
    return (
        <div
            className={`w-full absolute top-[88px] flex flex-col gap-6 bg-secondary px-8 py-10 rounded-xl z-50 xl:hidden transition-all ${
                openMenu
                    ? "scale-1 -translate-y-0"
                    : "scale-0 -translate-y-[400px]"
            }`}
        >
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

            <ActiveLink to={"/subscribe"}>
                <IoSend className="w-6 h-6" />
                <p>Subscribe</p>
            </ActiveLink>

            <ActiveLink to={"/contact"}>
                <IoMail className="w-6 h-6" />
                <p>Contact</p>
            </ActiveLink>
        </div>
    );
};

export default MobileNav;
