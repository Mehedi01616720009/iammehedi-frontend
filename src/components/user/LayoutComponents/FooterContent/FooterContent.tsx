import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";
import { SiFiverr } from "react-icons/si";

const FooterContent = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-8 lg:pt-14">
            <Logo />

            <div className="flex justify-center items-center gap-4 md:gap-6 mt-3 mb-6">
                <Link to={"https://www.fiverr.com/mehedi81714"}>
                    <SiFiverr className="w-8 h-8" />
                </Link>

                <Link to={"https://www.facebook.com/hasan.mehedi.940"}>
                    <IoLogoFacebook className="w-8 h-8" />
                </Link>

                <Link
                    to={
                        "https://www.linkedin.com/in/mehedi-hasan-mim-448b87322/"
                    }
                >
                    <IoLogoLinkedin className="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
};

export default FooterContent;
