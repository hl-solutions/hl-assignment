import styles from "./Slogan.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Slogan() {
    return (
        <div className={cx("slogan")}>
            <h1 className={cx("title")}>A joke a day keeps the doctor away</h1>
            <p className={cx("sub-title")}>
                If you joke wrong way, your teeth have to pay. (Serious)
            </p>
        </div>
    );
}

export default Slogan;
