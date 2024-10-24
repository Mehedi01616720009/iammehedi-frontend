import PostCardTwo from "@/components/user/PostCardTwo/PostCardTwo";
import { Button } from "@/components/ui/button";
import { TPost } from "@/types/post";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("./posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="small__container relative pt-6 pb-10 xl:pt-12">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-5 xl:gap-10">
                {posts.slice(1, 4).map((post: TPost) => (
                    <PostCardTwo key={post.slug} post={post} />
                ))}
            </div>

            <div className="flex justify-center items-center pt-7 pb-10">
                <Link to={"/posts"}>
                    <Button className="text-[19px] font-semibold">
                        View all
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default LatestPosts;
