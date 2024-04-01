import images from "../../../assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img className={cx("logo")} src={images.logo} alt="logo" />
                <div className={cx("info")}>
                    <div className={cx("info-user")}>
                        <span>Handicrafted by</span>
                        <h4>Jim HLS</h4>
                    </div>
                    <img
                        className={cx("avatar")}
                        src={images.avatar}
                        alt="avatar"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
