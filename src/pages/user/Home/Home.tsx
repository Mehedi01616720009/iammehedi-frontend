import CategoriesSection from "./Components/CategoriesSection";
import FeaturedPostsSection from "./Components/FeaturedPostsSection";
import LastPost from "./Components/LastPost";
import LatestPosts from "./Components/LatestPosts";

const Home = () => {
    return (
        <div>
            <FeaturedPostsSection />
            <LastPost />
            <LatestPosts />
            <CategoriesSection />
        </div>
    );
};

export default Home;
