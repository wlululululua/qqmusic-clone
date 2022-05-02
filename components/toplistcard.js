import styles from "../styles/TopListCard.module.css";
import { AiFillPlayCircle } from "react-icons/ai";

const TopListCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <h3>巅峰榜</h3>
                <span>热歌</span>
            </div>
            <div className={styles.delimiter}>
                <a href="" className={styles.play}>
                    <AiFillPlayCircle />
                </a>
            </div>
            <div className={styles.content}>
                <div>
                    <span className={styles.number}>1</span>
                    <a className={styles.song} href="">
                        本草纲目
                    </a>
                    <a className={styles.singer} href="">
                        周杰伦
                    </a>
                </div>
                <div>
                    <span className={styles.number}>2</span>
                    <a className={styles.song} href="">
                        孤勇者
                    </a>
                    <a className={styles.singer} href="">
                        陈奕迅
                    </a>
                </div>
                <div>
                    <span className={styles.number}>3</span>
                    <a className={styles.song} href="">
                        晴天
                    </a>
                    <a className={styles.singer} href="">
                        周杰伦
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopListCard;
