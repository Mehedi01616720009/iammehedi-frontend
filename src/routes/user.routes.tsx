import UserLayout from "@/layouts/user/UserLayout";
import Home from "@/pages/user/Home/Home";
import AllPosts from "@/pages/user/AllPosts/AllPosts";
import SinglePost from "@/pages/user/SinglePost/SinglePost";
import Categories from "@/pages/user/Categories/Categories";
import Tags from "@/pages/user/Tags/Tags";

export const userRoutes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/posts",
                element: <AllPosts />,
            },
            {
                path: "/post",
                element: <SinglePost />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            {
                path: "/tags",
                element: <Tags />,
            },
        ],
    },
];
