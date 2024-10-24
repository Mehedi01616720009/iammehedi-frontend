import { useState } from "react";
import FirstNav from "../FirstNav/FirstNav";
import Logo from "../Logo/Logo";
import MobileNav from "../MobileNav/MobileNav";
import SecondNav from "../SecondNav/SecondNav";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="large__container relative flex justify-between xl:grid xl:grid-cols-1-max-1 gap-5 my-5 md:my-8 xl:mt-10 xl:mb-14">
            <FirstNav />

            <Logo />

            <SecondNav openMenu={openMenu} setOpenMenu={setOpenMenu} />

            <MobileNav openMenu={openMenu} />
        </div>
    );
};

export default Header;
