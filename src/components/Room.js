/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "@reach/router";
import balcony from "../img/balcony.svg";
import tub from "../img/bathtub.svg";
import bed from "../img/bed.svg";
import house from "../img/house.svg";
import kitchen from "../img/kitchen.svg";
import sofa from "../img/room.svg";

const Room = ({ id, name, icon, lights }) => {
    const illu = { balcony, tub, bed, house, kitchen, sofa };

    const style = css`
        width: 9.375em;
        height: 9.375em;
        border-radius: 1.5em;
        background-color: white;
        box-shadow: 0px 3px 11px rgba(10, 77, 162, 0.06);
        padding: 1.5em 0.5em 1em 1.2em;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        & img {
            flex: 0;
            margin-bottom: auto;
        }
        & h2 {
            margin-bottom: 0.5em;
        }

        & p {
            font-size: 0.8em;
            font-weight: bold;
            color: orange;
        }

        & * {
            margin: 0;
        }
    `;

    return (
        <Link to={"/controls/" + id}>
            <div css={style}>
                <img src={illu[icon]} alt="" />
                <h2>{name}</h2>
                <p>
                    {lights} Light{lights > 1 && "s"}
                </p>
            </div>
        </Link>
    );
};

export default Room;
