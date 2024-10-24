import PostCardOne from "@/components/user/PostCardOne/PostCardOne";
import { TPost } from "@/types/post";
import { useEffect, useState } from "react";

const FeaturedPostsSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("./posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="small__container relative pt-6 pb-10 xl:pt-12">
            <h3 className="text-sm text-center font-bold tracking-[3px] mb-6 xl:w-[150px] xl:text-[10px] xl:text-right xl:absolute xl:left-0 xl:-translate-x-[64%] xl:translate-y-[30px] xl:-rotate-[90deg] xl:tracking-[8px]">
                FEATURED
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-10">
                {posts.slice(0, 4).map((post: TPost) => (
                    <PostCardOne key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedPostsSection;
