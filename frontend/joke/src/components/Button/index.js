import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Button({ btnPrimary, btnSuccess, children, className, onClick }) {
    const classes = cx("wrapper", {
        btnPrimary,
        btnSuccess,
        [className]: className,
    });

    const props = { onClick };
    return (
        <button className={classes} {...props}>
            <span className={cx("title")}>{children}</span>
        </button>
    );
}

export default Button;
