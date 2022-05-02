import { useState } from "react";
import styles from "../styles/Tabs.module.css";

const Tabs = ({ tablist }) => {
    const [currentTab, setCurrentTab] = useState(tablist[0]);
    const handleClick = (t) => {
        if (currentTab !== t) {
            setCurrentTab(t);
        }
    };
    return (
        <div className={styles.tabs}>
            {tablist.map((tab) => {
                return (
                    <span
                        key={tab}
                        className={currentTab === tab ? styles.active : ""}
                        onClick={() => handleClick(tab)}
                    >
                        {tab}
                    </span>
                );
            })}
        </div>
    );
};

export default Tabs;
