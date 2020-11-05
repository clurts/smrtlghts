/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { Router } from "@reach/router";
import { dataContext } from "../contexts/DataContext";
import Rooms from "../components/Rooms";
import Controls from "../components/Controls";

const Main = () => {
    const { isSubPage } = useContext(dataContext);

    const styleMain = css`
        background-color: #f6f8fb;
        border-radius: 2em;
        padding: 1.5em;
        height: ${isSubPage ? "33.75em" : "41em"};
    `;
    return (
        <main css={styleMain}>
            <Router>
                <Rooms path="/" />
                <Controls path="controls/:id" />
            </Router>
        </main>
    );
};

export default Main;
