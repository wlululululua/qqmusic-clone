import Layout from "../components/layout";
import styles from "../styles/HomePage.module.css";
import React from "react";
import Tabs from "../components/tabs";
import TopListCard from "../components/toplistcard";
import MvCard from "../components/mvcard";
import GridContentLayout from "../components/gridcontent";
import SongCard from "../components/songcard";
import Card from "../components/card";

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
                        <GridContentLayout col="5">
                            {new Array(5).fill().map((val, i) => {
                                return (
                                    <Card
                                        key={i}
                                        coverImgUrl="./images/card-cover.jpg"
                                        title="满级人类进化之路必备BGM"
                                        info="播放量：2924.4万"
                                    />
                                );
                            })}
                        </GridContentLayout>
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
                        <GridContentLayout col="3">
                            <SongCard />
                            <SongCard />
                            <SongCard />
                            <SongCard />
                            <SongCard />
                            <SongCard />
                        </GridContentLayout>
                    </section>
                    <section>
                        <h2 className={styles.title}>精彩推荐</h2>
                        <div class={styles.row}>
                            <a href="" className={styles.recommend}>
                                <img src="./images/recommend-1.jpg" alt="" />
                            </a>
                            <a href="" className={styles.recommend}>
                                <img src="./images/recommend-2.jpg" alt="" />
                            </a>
                        </div>
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
                        <GridContentLayout col="5">
                            {new Array(10).fill().map((val, i) => {
                                return (
                                    <Card
                                        key={i}
                                        coverImgUrl="./images/album-cover.jpg"
                                        title="Alcohol"
                                        singer="反返"
                                    />
                                );
                            })}
                        </GridContentLayout>
                    </section>
                    <section>
                        <h2 className={styles.title}>排行榜</h2>
                        <GridContentLayout col="5">
                            <TopListCard />
                            <TopListCard />
                            <TopListCard />
                            <TopListCard />
                            <TopListCard />
                        </GridContentLayout>
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
                        <GridContentLayout col="5">
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                            <MvCard />
                        </GridContentLayout>
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
