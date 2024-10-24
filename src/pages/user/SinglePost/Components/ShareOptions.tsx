import { IoCopy, IoLogoLinkedin } from "react-icons/io5";
import { SiFiverr } from "react-icons/si";
import { Link } from "react-router-dom";

const ShareOptions = () => {
    return (
        <div className="post__content flex justify-center items-center gap-5 pt-5 pb-12">
            <Link to={"/"}>
                <div className="w-14 h-14 md:w-[70px] md:h-[70px] bg-secondary flex justify-center items-center rounded-full">
                    <SiFiverr className="w-7 h-7 md:w-9 md:h-9" />
                </div>
            </Link>

            <Link to={"/"}>
                <div className="w-14 h-14 md:w-[70px] md:h-[70px] bg-secondary flex justify-center items-center rounded-full">
                    <IoLogoLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                </div>
            </Link>

            <div className="w-14 h-14 md:w-[70px] md:h-[70px] bg-secondary flex justify-center items-center rounded-full cursor-pointer">
                <IoCopy className="w-6 h-6 md:w-7 md:h-7" />
            </div>
        </div>
    );
};

export default ShareOptions;
