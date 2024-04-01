import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx("wrapper")}>
            <span className={cx("line")}></span>
            <div className={cx("footer-info")}>
                <p>
                    This website is created as part of HLsolutions program. The
                    meterials contained on this website are provided for general{" "}
                    {/* <br /> */}
                    infomation only and do not constitute any form of advice.
                    HLS assumes no responsibility for the accuracy of any
                    particular statement and accepts no liability of any loss or
                    damage which may arise from reliance on the information
                    contained on this site.
                </p>
                <span>Copyright 2021 HLS</span>
            </div>
        </div>
    );
}

export default Footer;
