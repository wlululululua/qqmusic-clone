import styles from "../styles/Card.module.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Card = ({ coverImgUrl, title, singer, info }) => {
    return (
        <div className={styles.card}>
            <a className={styles.cover} href="">
                <img src={coverImgUrl} alt="" />
                <span className={styles.mask}></span>
                <AiFillPlayCircle className={styles.icon} />
            </a>
            <a href="" className={styles.title}>
                {title}
            </a>
            {singer && (
                <a href="" className={styles.singer}>
                    {singer}
                </a>
            )}
            {info && <span className={styles.info}>{info}</span>}
        </div>
    );
};

export default Card;
