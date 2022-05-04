import { useRef, useEffect } from "react";
import styles from "../styles/RowContainer.module.css";

const RowContainer = ({ children, getRowWidth }) => {
    const rowRef = useRef();
    useEffect(() => {
        getRowWidth(rowRef.current.clientWidth);
    }, []);

    return (
        <div className={styles.row} ref={rowRef}>
            {children}
        </div>
    );
};

export default RowContainer;
