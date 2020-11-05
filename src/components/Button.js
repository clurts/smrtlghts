/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import bulb from "../img/settings.svg";

const Button = ({ color, txt }) => {
    const style = css`
        background-color: ${color};
        padding: 1em 3em;

        &:not(:last-of-type) {
            margin-right: 1.5em;
        }
    `;

    return (
        <button css={style} onClick={(e) => console.log("clicked")}>
            <img src={bulb} alt="bulb" />
            {txt}
        </button>
    );
};

export default Button;
