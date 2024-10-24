import PostCardThree from "@/components/user/PostCardThree/PostCardThree";
import PostCardTwo from "@/components/user/PostCardTwo/PostCardTwo";
import Paginate from "@/components/ui/Paginate";
import { TPost } from "@/types/post";
import { useEffect, useState } from "react";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("./posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <div className="large__container relative pt-6 pb-10 xl:pt-12">
                <div>
                    {posts.slice(0, 1).map((post: TPost) => (
                        <PostCardThree key={post.slug} post={post} />
                    ))}
                </div>
            </div>

            <div className="small__container relative pt-6 pb-10 xl:pt-12">
                <div className="grid md:grid-cols-3 gap-6 lg:gap-5 xl:gap-10">
                    {posts.slice(1, 10).map((post: TPost) => (
                        <PostCardTwo key={post.slug} post={post} />
                    ))}
                </div>

                <Paginate
                    totalPages={5}
                    currentPage={1}
                    destination={"/posts/page/"}
                />
            </div>
        </div>
    );
};

export default AllPosts;
