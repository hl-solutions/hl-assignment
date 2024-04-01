import { useState, useEffect } from "react";
import Button from "../../Button";
import styles from "./Joke.module.scss";
import classNames from "classnames/bind";
import Cookies from "js-cookie";

const cx = classNames.bind(styles);

function Joke() {
    const jokes = [
        {
            id: 1,
            content: `A child asked his father, "How were people born?" So his father
            said, "Adam and Eve made babies, then their babies became adults
            and made babies, and so on." The child then went to his mother,
            asked her the same question and she told him, "We were monkeys
            then we evolved to become like we are now." The child ran back
            to his father and said, "You lied to me!" His father replied,
            "No, your mom was talking about her side of the family."`,
        },

        {
            id: 2,
            content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
        },

        {
            id: 3,
            content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
        },

        {
            id: 4,
            content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
        },
    ];

    const [type, setType] = useState(1);

    const handleFunny = () => {
        setType(type + 1);
        Cookies.set("funny", type, { expires: 7 });
        console.log("Cookie Funny", Cookies.get("funny"));
    };

    const handleNotFunny = () => {
        setType(type + 1);
        Cookies.set("notFunny", type, { expires: 7 });
        console.log("Cookie Not Funny: ", Cookies.get("notFunny"));
    };
    return (
        <div className={cx("content")}>
            {jokes.map(
                (joke) =>
                    type === joke.id && <p key={joke.id}>{joke.content}</p>
            )}

            {type > jokes.length && (
                <p className={cx("message")}>
                    "That's all the jokes for today! Come back another day!"
                </p>
            )}

            <span className={cx("line")}></span>
            <div className={cx("btn-group")}>
                <Button btnPrimary onClick={handleFunny}>
                    This is Funny!
                </Button>
                <Button btnSuccess onClick={handleNotFunny}>
                    This is not funny.
                </Button>
            </div>
        </div>
    );
}

export default Joke;
