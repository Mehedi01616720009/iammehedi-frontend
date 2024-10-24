import PostCardThree from "@/components/user/PostCardThree/PostCardThree";
import { TPost } from "@/types/post";
import { useEffect, useState } from "react";

const LastPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("./posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="large__container relative pt-6 pb-10 xl:pt-12">
            <h3 className="text-sm text-center font-bold tracking-[3px] mb-6 xl:w-[168px] xl:text-[10px] xl:text-right xl:absolute xl:left-0 xl:-translate-x-[64%] xl:translate-y-[155px] xl:-rotate-[90deg] xl:tracking-[8px]">
                LATEST POSTS
            </h3>

            <div className="">
                {posts.slice(0, 1).map((post: TPost) => (
                    <PostCardThree key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default LastPost;
