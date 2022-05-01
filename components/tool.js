import { AiOutlineUp, AiOutlinePlaySquare } from "react-icons/ai";
import styles from "../styles/Tool.module.css";
import { useState, useEffect } from "react";

const Tool = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className={styles.toolBox}>
            <span
                onClick={scrollToTop}
                className={isVisible ? styles.toTop : styles.toTop_hidden}
            >
                <AiOutlineUp />
            </span>
            <span>反馈</span>
            <span>
                <AiOutlinePlaySquare />
            </span>
        </div>
    );
};

export default Tool;
