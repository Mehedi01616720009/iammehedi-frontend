import TagCard from "@/components/user/TagCard/TagCard";
import { TTag } from "@/types/tag";
import { useEffect, useState } from "react";

const Tags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch("./categories.json")
            .then((res) => res.json())
            .then((data) => setTags(data));
    }, []);

    return (
        <div className="large__container relative pt-6 pb-10 xl:pt-12">
            <h3 className="text-sm text-center font-bold tracking-[3px] mb-6 xl:w-[150px] xl:text-[10px] xl:text-right xl:absolute xl:left-0 xl:-translate-x-[64%] xl:translate-y-[30px] xl:-rotate-[90deg] xl:tracking-[8px]">
                TAGS
            </h3>

            <div className="md:max-w-[440px] md:w-full lg:max-w-full md:mx-auto grid lg:grid-cols-5 gap-4 lg:gap-5 xl:gap-10">
                {tags.map((tag: TTag) => (
                    <TagCard key={tag.slug} tag={tag} />
                ))}
            </div>
        </div>
    );
};

export default Tags;
