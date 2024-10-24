import { Button } from "@/components/ui/button";
import ActiveLink from "../ActiveLink/ActiveLink";
import { IoClose, IoMail, IoMenu, IoSend } from "react-icons/io5";

type Props = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const SecondNav = ({ openMenu, setOpenMenu }: Props) => {
    return (
        <div className="flex justify-end items-center gap-7">
            <div className="hidden xl:flex xl:justify-end xl:items-center xl:gap-7 text-[19px] leading-normal font-semibold">
                <ActiveLink to={"/subscribe"}>
                    <IoSend className="w-6 h-6" />
                    <p>Subscribe</p>
                </ActiveLink>

                <ActiveLink to={"/contact"}>
                    <IoMail className="w-6 h-6" />
                    <p>Contact</p>
                </ActiveLink>

                <Button className="text-[19px] font-semibold">Sign in</Button>
            </div>

            <div className="flex justify-end items-center gap-2 xl:hidden">
                <Button className="text-[19px] font-semibold">Sign in</Button>

                {openMenu ? (
                    <IoClose
                        onClick={() => setOpenMenu(!openMenu)}
                        className="w-10 h-10 cursor-pointer"
                    />
                ) : (
                    <IoMenu
                        onClick={() => setOpenMenu(!openMenu)}
                        className="w-10 h-10 cursor-pointer"
                    />
                )}
            </div>
        </div>
    );
};

export default SecondNav;
