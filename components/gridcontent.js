import styles from "../styles/GridContentLayout.module.css";

const GridContentLayout = ({ col, children }) => {
    const style = { gridTemplateColumns: `repeat(${col}, 1fr)` };
    return (
        <div className={styles.container} style={style}>
            {children}
        </div>
    );
};

export default GridContentLayout;
