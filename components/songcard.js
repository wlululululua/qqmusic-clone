import { AiFillPlayCircle } from "react-icons/ai";
import styles from "../styles/SongCard.module.css";

const SongCard = () => {
    return (
        <div className={styles.card}>
            <a className={styles.cover} href="">
                <img src="./images/song-cover.jpg" alt="" />
                <span className={styles.mask}></span>
                <AiFillPlayCircle className={styles.icon} />
            </a>
            <div>
                <a href="" className={styles.title}>
                    사랑했었다 (Still I love you)
                </a>
                <a href="" className={styles.singer}>
                    柳会胜 (유회승)
                </a>
            </div>
            <span className={styles.info}>04:12</span>
        </div>
    );
};

export default SongCard;
