import colorFinder from "@/hooks/colorFinder/colorFinder";
import { TBackground, TTheme } from "@/types/color";
import { TPost } from "@/types/post";
import moment from "moment";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {
    post: TPost;
};

const PostCardOne = ({ post }: Props) => {
    const theme: TTheme = post.theme;
    const background: TBackground = colorFinder(theme);

    return (
        <div>
            <div
                className={`${background} ${
                    background !== "bg-primary" ? "text-deep" : ""
                } p-5 rounded-3xl`}
            >
                <Link to={`/post/${post.slug}`}>
                    <div className="h-[270px] lg:h-[175px] xl:h-[195px] rounded-2xl overflow-hidden mb-2">
                        <img
                            src={`./${post.image}`}
                            alt=""
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </Link>

                <div className="px-[5px]">
                    <Link to={`/post/${post.slug}`}>
                        <h4 className="text-lg font-bold mb-1">{post.title}</h4>
                    </Link>

                    <p className="text-sm font-semibold flex items-center gap-2">
                        <IoCalendarNumberSharp />
                        {moment(post.createdAt).format("ll")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostCardOne;
