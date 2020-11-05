/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useContext } from "react";
import { dataContext } from "../contexts/DataContext";
import leftArrow from "../img/arrow-round-back.svg";
import Button from "../components/Button";
import Flickity from "react-flickity-component";

const Header = () => {
    const { isSubPage } = useContext(dataContext);
    console.log(isSubPage);
    const styleHeader = css`
        padding: 0 1.5em;
        height: ${isSubPage ? "17em" : "9.75em"};
        transition: height 1s;
    `;
    const styleCont = css`
        position: relative;
        left: -1.5em;
        width: 100vw;
        padding: 0 1.5em;
        box-sizing: border-box;
        overflow: hidden;
    `;

    const flickityOptions = {
        freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,
    };
    return (
        <header css={styleHeader}>
            <h1>
                {isSubPage && (
                    <Link to="/">
                        <img src={leftArrow} alt="left arrow" />{" "}
                    </Link>
                )}
                Bed Room
            </h1>
            <Flickity
                className={"carousel"} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
            >
                <Button color="#235846" txt="Party" />
                <Button color="#3654ff" txt="Fun" />
                <Button color="#9845cc" txt="BooHaa" />
            </Flickity>
        </header>
    );
};

export default Header;
