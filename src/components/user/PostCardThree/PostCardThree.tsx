import colorFinder from "@/hooks/colorFinder/colorFinder";
import { TBackground, TTheme } from "@/types/color";
import { TPost } from "@/types/post";
import moment from "moment";
import { Link } from "react-router-dom";

type Props = {
    post: TPost;
};

const PostCardThree = ({ post }: Props) => {
    const theme: TTheme = post.theme;
    const background: TBackground = colorFinder(theme);

    return (
        <div className="grid lg:grid-cols-max-1 lg:items-center gap-4">
            <Link to={`/post/${post.slug}`}>
                <div className="h-[340px] md:h-[450px] lg:w-[450px] xl:w-[600px] xl:h-[600px] overflow-hidden rounded-3xl lg:mr-2 xl:mr-5">
                    <img
                        src={`./${post.image}`}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </Link>

            <div className="pt-5 px-5 lg:px-6 pb-4 lg:pb-6">
                <Link to={`/category/${post.category}`}>
                    <div
                        className={`${
                            background !== "bg-primary"
                                ? "bg-secondary"
                                : "bg-tags"
                        } w-max text-xs uppercase tracking-[2px] px-4 py-2 mb-4 rounded-full`}
                    >
                        {post.category}
                    </div>
                </Link>

                <Link to={`/post/${post.slug}`}>
                    <h4 className="text-4xl md:text-[42px] xl:text-[54px] font-bold mt-1.5 mb-5 lg:mb-8 leading-[1.4]">
                        {post.title}
                    </h4>
                </Link>

                <div className="flex items-center gap-2">
                    <Link to={`/author/${post.createdBy}`}>
                        <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
                            <img
                                src={`./mehediH.jpg`}
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </Link>

                    <div>
                        <Link to={`/author/${post.createdBy}`}>
                            <p className="text-lg font-medium">
                                {post.createdBy}
                            </p>
                        </Link>

                        <p>
                            {moment(post.createdAt).format("LL")} .{" "}
                            {moment(post.createdAt).startOf("hour").fromNow()}
                        </p>
                    </div>
                </div>

                {/* <div className="text-sm xl:text-base font-semibold flex justify-between items-center mb-5">
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
                        <div className="bg-tags text-xs uppercase px-3 py-2 rounded-full">
                            {post.category}
                        </div>
                    </Link>

                    <div className="w-8 h-8 bg-tags flex justify-center items-center rounded-full">
                        <IoLockClosed />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default PostCardThree;
