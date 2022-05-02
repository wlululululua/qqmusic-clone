import Layout from "../components/layout";
import styles from "../styles/HomePage.module.css";
import React from "react";
import Tabs from "../components/tabs";
import TopListCard from "../components/toplistcard";

export const HotListContext = React.createContext();

const HomePage = ({ hotList }) => {
    return (
        <HotListContext.Provider value={hotList}>
            <Layout>
                <main className={styles.main}>
                    <section>
                        <h2 className={styles.title}>歌单推荐</h2>
                        <Tabs
                            tablist={[
                                "为你推荐",
                                "伤感",
                                "经典",
                                "情歌",
                                "官方歌单",
                                "网络歌曲",
                            ]}
                        />
                        <div className="slider">
                            <div className="slide-box"></div>
                            <span className="prev"></span>
                            <span className="next"></span>
                        </div>
                    </section>
                    <section>
                        <h2 className={styles.title}>新歌首发</h2>
                        <Tabs
                            tablist={[
                                "最新",
                                "内地",
                                "港台",
                                "欧美",
                                "韩国",
                                "日本",
                            ]}
                        />
                    </section>
                    <section>
                        <h2 className={styles.title}>精彩推荐</h2>
                    </section>
                    <section>
                        <h2 className={styles.title}>新碟首发</h2>
                        <Tabs
                            tablist={[
                                "内地",
                                "港台",
                                "欧美",
                                "韩国",
                                "日本",
                                "其它",
                            ]}
                        />
                    </section>
                    <section>
                        <h2 className={styles.title}>排行榜</h2>
                        <div className={styles.gridTopListCard}>
                            <TopListCard />
                            <TopListCard />
                            <TopListCard />
                            <TopListCard />
                            <TopListCard />
                        </div>
                    </section>
                    <section>
                        <h2 className={styles.title}>MV</h2>
                        <Tabs
                            tablist={[
                                "精选",
                                "内地",
                                "港台",
                                "欧美",
                                "韩国",
                                "日本",
                            ]}
                        />
                    </section>
                </main>
            </Layout>
        </HotListContext.Provider>
    );
};

export default HomePage;

export async function getStaticProps() {
    const currentTime = new Date().getTime();
    const getHotKey = await fetch(
        `https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=0&g_tk_new_20200303=5381&g_tk=5381&hostUin=0&_${currentTime}`
    );
    const hotKey = await getHotKey.json();

    return {
        props: {
            hotList: hotKey.data.hotkey.slice(0, 5),
        },
    };
}
