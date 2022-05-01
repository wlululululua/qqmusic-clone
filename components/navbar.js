import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <a>首页</a>
            </Link>
            <Link href="/singer_list">
                <a>歌手</a>
            </Link>
            <Link href="/album">
                <a>新碟</a>
            </Link>
            <Link href="/toplist">
                <a>排行榜</a>
            </Link>
            <Link href="/category">
                <a>分类歌单</a>
            </Link>
            <Link href="/radio">
                <a>电台</a>
            </Link>
            <Link href="/mvList">
                <a>MV</a>
            </Link>
            <Link href="/album_mall">
                <a>数字专辑</a>
            </Link>
            <Link href="/piao_wu">
                <a>票务</a>
            </Link>
        </nav>
    );
};

export default Navbar;
