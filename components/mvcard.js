import { AiOutlineVideoCamera, AiFillPlayCircle } from "react-icons/ai";
import styles from "../styles/MvCard.module.css";

const MvCard = () => {
    return (
        <div className={styles.card}>
            <a className={styles.cover} href="">
                <img src="./images/mv-cover.jpg" alt="" />
                <span className={styles.mask}></span>
                <AiFillPlayCircle className={styles.icon} />
            </a>
            <a href="" className={styles.title}>
                《诛仙忘尘》（新《诛仙》手游2022剧情主题曲）
            </a>
            <a href="" className={styles.singer}>
                李玉刚
            </a>
            <span className={styles.info}>
                <AiOutlineVideoCamera />
                3.5万
            </span>
        </div>
    );
};

export default MvCard;
