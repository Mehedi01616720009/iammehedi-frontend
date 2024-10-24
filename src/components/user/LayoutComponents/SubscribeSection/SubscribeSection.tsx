import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";

const SubscribeSection = () => {
    return (
        <div className="small__container flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 mt-14 mb-3">
            <h2 className="text-[34px] md:text-[42px] lg:md:text-[46px] text-center font-bold">
                Subscribe to new posts
            </h2>

            <div className="flex justify-center items-center">
                <Link to={"/subscribe"}>
                    <Button className="text-[19px] font-semibold">
                        <p>Subscribe</p>
                        <IoSend className="w-6 h-6 ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default SubscribeSection;
