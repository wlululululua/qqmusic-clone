import { useRouter } from "next/router";

const ToplistDetail = () => {
    const router = useRouter();
    const toplistId = router.query.toplistId;
    return (
        <div>
            <h1>排行榜 {toplistId}</h1>
        </div>
    );
};

export default ToplistDetail;
