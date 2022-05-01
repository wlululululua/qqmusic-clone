import { AiOutlineSearch, AiFillDelete, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/SearchBar.module.css";
import { useState, useContext, useEffect } from "react";
import { HotListContext } from "../pages";

const SearchBar = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="搜索音乐、MV、歌单、用户"
                className={styles.searchInput}
                onFocus={() => setIsShow(true)}
                onBlur={() => setIsShow(false)}
            />
            <button className={styles.searchButton}>
                <AiOutlineSearch />
            </button>
            {/* {isShow && <SearchList />} */}
            <SearchList />
        </div>
    );
};

export default SearchBar;

const SearchList = () => {
    const hotList = useContext(HotListContext);
    const [searchHistory, setSearchHistory] = useState([
        "LOSER",
        "IF",
        "橘子汽水",
    ]);

    const handleDelete = (deleteItem) => {
        setSearchHistory(searchHistory.filter((item) => item !== deleteItem));
    };

    const handleClear = () => {
        setSearchHistory([]);
    };

    return (
        <div className={styles.searchList}>
            <dl className={styles.hot}>
                <dt>热门推荐</dt>
                {hotList.map(({ k, n }, i) => {
                    return (
                        <dd key={i}>
                            <span className={styles.number}>{i + 1}</span>
                            <span className={styles.name}>{k}</span>
                            <span className={styles.listen}>
                                {(n / 10000).toFixed(1)} 万
                            </span>
                        </dd>
                    );
                })}
            </dl>
            <dl className={styles.history}>
                <dt>
                    <span>历史搜索</span>
                    <button className={styles.clearBtn} onClick={handleClear}>
                        <AiFillDelete />
                    </button>
                </dt>
                {searchHistory.map((s, i) => {
                    return (
                        <dd key={i}>
                            <span>{s}</span>
                            <span
                                className={styles.delete}
                                onClick={() => {
                                    handleDelete(s);
                                }}
                            >
                                <AiOutlineClose />
                            </span>
                        </dd>
                    );
                })}
            </dl>
        </div>
    );
};
