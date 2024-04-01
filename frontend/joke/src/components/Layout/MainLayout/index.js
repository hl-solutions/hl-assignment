import Slogan from "../Slogan";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <Slogan />
            <div className={cx("container")}>{children}</div>
            <Footer />
        </div>
    );
}

export default MainLayout;
