import styles from "../styles/Slider.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import RowContainer from "./row";

const Slider = ({ children }) => {
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const getRowWidth = (w) => {
        setWidth(w);
    };

    const getPrev = () => {
        const condition = currentIndex > 0;
        const nextIndex = condition ? currentIndex - 1 : children.length - 1;
        setCurrentIndex(nextIndex);
    };

    const getNext = () => {
        const condition = currentIndex < children.length - 1;
        const nextIndex = condition ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
    };

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inner} style={{ width: width }}>
                <div
                    className={styles.items}
                    style={{
                        width: width * children.length,
                        marginLeft: -width * currentIndex,
                    }}
                >
                    {children.map((child, i) => {
                        return (
                            <RowContainer key={i} getRowWidth={getRowWidth}>
                                {child}
                            </RowContainer>
                        );
                    })}
                </div>
            </div>
            <div className={styles.circles}>
                {children.map((child, i) => {
                    return (
                        <span
                            key={i}
                            className={i === currentIndex ? styles.active : ""}
                            onClick={() => {
                                handleClick(i);
                            }}
                        ></span>
                    );
                })}
            </div>
            <div className={styles.prev} onClick={getPrev}>
                <AiOutlineLeft />
            </div>
            <div className={styles.next} onClick={getNext}>
                <AiOutlineRight />
            </div>
        </div>
    );
};

export default Slider;
