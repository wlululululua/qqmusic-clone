import { useRouter } from "next/router";

const CategoryPage = () => {
    const router = useRouter();
    console.log(router.query);
    return <div>分类歌单</div>;
};

export default CategoryPage;
