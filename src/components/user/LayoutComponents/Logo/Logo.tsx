import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"}>
            <h2 className="text-3xl lg:text-4xl font-bold leading-[1.6] lg:leading-[1.3]">
                IAmMehedi
            </h2>
        </Link>
    );
};

export default Logo;
