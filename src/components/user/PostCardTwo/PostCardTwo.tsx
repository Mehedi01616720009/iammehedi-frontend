import colorFinder from "@/hooks/colorFinder/colorFinder";
import { TBackground, TTheme } from "@/types/color";
import { TPost } from "@/types/post";
import moment from "moment";
import {
    IoCalendarNumberSharp,
    IoLockClosed,
    IoPersonSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {
    post: TPost;
};

const PostCardTwo = ({ post }: Props) => {
    const theme: TTheme = post.theme;
    const background: TBackground = colorFinder(theme);

    return (
        <div>
            <div
                className={`${background} ${
                    background !== "bg-primary" ? "text-deep" : ""
                } rounded-3xl overflow-hidden`}
            >
                <Link to={`/post/${post.slug}`}>
                    <div className="h-[270px] lg:h-[230px] xl:h-[250px] overflow-hidden mb-2">
                        <img
                            src={`./${post.image}`}
                            alt=""
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </Link>

                <div className="pt-5 px-5 lg:px-6 pb-4 lg:pb-6">
                    <Link to={`/post/${post.slug}`}>
                        <h4 className="text-lg lg:text-xl xl:text-2xl font-bold mb-2 lg:mb-3">
                            {post.title}
                        </h4>
                    </Link>

                    <div className="text-sm xl:text-base font-semibold flex justify-between items-center mb-5">
                        <Link to={`/post/${post.slug}`}>
                            <p className="flex items-center gap-1">
                                <IoPersonSharp />
                                {post.createdBy}
                            </p>
                        </Link>

                        <p className="flex justify-end items-center gap-1 lg:gap-2 text-right">
                            <IoCalendarNumberSharp />
                            {moment(post.createdAt).format("ll")}
                        </p>
                    </div>

                    <div className="font-medium flex justify-between items-center">
                        <Link to={`/category/${post.category}`}>
                            <div
                                className={`${
                                    background === "bg-primary"
                                        ? "bg-primary"
                                        : "bg-tags"
                                } text-xs uppercase tracking-[2px] px-3 py-2 rounded-full`}
                            >
                                {post.category}
                            </div>
                        </Link>

                        <div className="w-8 h-8 bg-tags flex justify-center items-center rounded-full">
                            <IoLockClosed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCardTwo;
