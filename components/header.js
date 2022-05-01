import Navbar from "./navbar";
import SearchBar from "./searchbar";

const Header = () => {
    return (
        <header>
            <div>QQ音乐</div>
            <SearchBar />
            <Navbar />
        </header>
    );
};

export default Header;
