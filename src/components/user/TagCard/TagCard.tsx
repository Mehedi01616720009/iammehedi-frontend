import { TTag } from "@/types/tag";
import { Link } from "react-router-dom";

type Props = {
    tag: TTag;
};

const TagCard = ({ tag }: Props) => {
    return (
        <Link to={tag.slug}>
            <div className="bg-primary flex lg:flex-col items-center lg:items-start gap-3 p-3.5 xl:p-5 rounded-2xl lg:rounded-3xl">
                <div className="w-[70px] h-[70px] lg:w-[100%] lg:h-[145px] xl:h-[195px] rounded-xl lg:rounded-2xl overflow-hidden">
                    <img
                        src={`./${tag.image}`}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="px-[5px]">
                    <h4 className="text-lg font-bold">{tag.name}</h4>
                    <p className="text-sm font-semibold">10 posts</p>
                </div>
            </div>
        </Link>
    );
};

export default TagCard;
