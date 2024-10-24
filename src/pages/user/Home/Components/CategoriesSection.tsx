import CategoryCard from "@/components/user/CategoryCard/CategoryCard";
import { TCategory } from "@/types/category";
import { useEffect, useState } from "react";

const CategoriesSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("./categories.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className="small__container relative pt-6 pb-10 xl:pt-12">
            <h3 className="text-sm text-center font-bold tracking-[3px] mb-6 xl:w-[150px] xl:text-[10px] xl:text-right xl:absolute xl:left-0 xl:-translate-x-[64%] xl:translate-y-[30px] xl:-rotate-[90deg] xl:tracking-[8px]">
                CATEGORIES
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-10">
                {categories.slice(0, 4).map((category: TCategory) => (
                    <CategoryCard key={category.slug} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesSection;
