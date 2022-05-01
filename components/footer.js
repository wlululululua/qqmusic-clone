import styles from "../styles/Footer.module.css";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <dl>
                    <dt>下载QQ音乐客户端</dt>
                    <dd>
                        <i className={`${styles.icon} ${styles.iconPC}`}></i>
                        <span>PC版</span>
                    </dd>
                    <dd>
                        <i className={`${styles.icon} ${styles.iconMAC}`}></i>
                        <span>Mac版</span>
                    </dd>
                    <dd>
                        <i
                            className={`${styles.icon} ${styles.iconAndroid}`}
                        ></i>
                        <span>Android版</span>
                    </dd>
                    <dd>
                        <i
                            className={`${styles.icon} ${styles.iconIPhone}`}
                        ></i>
                        <span>iPhone版</span>
                    </dd>
                </dl>
                <dl>
                    <dt>特色产品</dt>
                    <dd>
                        <i className={`${styles.icon} ${styles.icon_qmkg}`}></i>
                        <span>全民K歌</span>
                    </dd>
                    <dd>
                        <i className={`${styles.icon} ${styles.icon_yhyx}`}></i>
                        <span>银行音效</span>
                    </dd>
                    <dd>
                        <i
                            className={`${styles.icon} ${styles.icon_qplay}`}
                        ></i>
                        <span>QPlay</span>
                    </dd>
                    <dd>
                        <i className={`${styles.icon} ${styles.icon_fan}`}></i>
                        <span>Fan直播伴侣</span>
                    </dd>
                </dl>
                <dl className={styles.cooperate}>
                    <dt>合作链接</dt>
                    <dd>CJ ENM</dd>
                    <dd>腾讯视频</dd>
                    <dd>手机QQ空间</dd>
                    <dd>最新版QQ</dd>
                    <dd>腾讯社交广告</dd>
                    <dd>电脑管家</dd>
                    <dd>QQ浏览器</dd>
                    <dd>腾讯微云</dd>
                    <dd>腾讯云</dd>
                    <dd>企鹅FM</dd>
                    <dd>智能电视网</dd>
                    <dd>当贝市场</dd>
                    <dd>酷我音乐</dd>
                    <dd>酷狗听书</dd>
                </dl>
                <dl>
                    <dt>开放平台</dt>
                    <dd>QQ音乐开放平台</dd>
                    <dd>腾讯音乐人</dd>
                    <dd>音乐推</dd>
                </dl>
                <dl>
                    <dt>TME集团官网</dt>
                    <dd>腾讯音乐</dd>
                </dl>
            </div>
            <div className={styles.siteInfo}>
                <span>仿QQ音乐网页版 仅供学习</span>
                <a
                    href="https://github.com/wlululululua/qqmusic-clone"
                    target="_blank"
                >
                    &copy;2022 <AiFillGithub />
                    wlulu
                </a>
            </div>
        </footer>
    );
};

export default Footer;
