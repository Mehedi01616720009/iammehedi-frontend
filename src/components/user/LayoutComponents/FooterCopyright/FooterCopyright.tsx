import { Link } from "react-router-dom";

const FooterCopyright = () => {
    return (
        <div className="my-5 text-center">
            <Link to={"/"}>
                <span className="text-button">IAmMehedi</span>
            </Link>{" "}
            &copy; {new Date().getFullYear()}. All Right Reserved.
        </div>
    );
};

export default FooterCopyright;
