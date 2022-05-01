import Header from "./header";
import Footer from "./footer";
import Tool from "./tool";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Tool />
            <Footer />
        </div>
    );
};

export default Layout;
