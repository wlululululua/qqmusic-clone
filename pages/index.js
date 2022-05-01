import Layout from "../components/layout";
import styles from "../styles/HomePage.module.css";
import React from "react";

export const HotListContext = React.createContext();

const HomePage = ({ hotList }) => {
    return (
        <HotListContext.Provider value={hotList}>
            <Layout>
                <main className={styles.main}>
                    <section>
                        <h2 className="title"></h2>
                        <div className="tab-list"></div>
                        <div className="slider">
                            <div className="slide-box"></div>
                            <span className="prev"></span>
                            <span className="next"></span>
                        </div>
                    </section>
                    <section>新歌首发</section>
                    <section>精彩推荐</section>
                    <section>新碟首发</section>
                    <section>排行榜</section>
                    <section>MV</section>
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
