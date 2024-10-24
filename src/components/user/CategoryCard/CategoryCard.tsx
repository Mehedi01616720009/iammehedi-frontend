import colorFinder from "@/hooks/colorFinder/colorFinder";
import { TCategory } from "@/types/category";
import { TBackground, TTheme } from "@/types/color";
import { Link } from "react-router-dom";

type Props = {
    category: TCategory;
};

const CategoryCard = ({ category }: Props) => {
    const theme: TTheme = category.theme;
    const background: TBackground = colorFinder(theme);

    return (
        <Link to={category.slug}>
            <div
                className={`${background} ${
                    background !== "bg-primary" ? "text-deep" : ""
                } p-3.5 xl:p-5 rounded-3xl`}
            >
                <div className="h-[120px] lg:h-[145px] xl:h-[195px] rounded-2xl overflow-hidden mb-2">
                    <img
                        src={`./${category.image}`}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <div className="px-[5px]">
                    <h4 className="text-lg font-bold">{category.name}</h4>
                    <p className="text-sm font-semibold">10 posts</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
