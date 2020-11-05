/** @jsx jsx */
import { Fragment, useContext, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import Room from "./Room";
import { dataContext } from "../contexts/DataContext";

const Rooms = (props) => {
    const { places, setIsSubPage } = useContext(dataContext);

    useEffect(() => {
        setIsSubPage(false);
    }, [setIsSubPage]);

    const styleGrid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25em 1.5em;
    `;
    return (
        <Fragment>
            <h2>All Rooms</h2>
            <div css={styleGrid}>
                {places.map((place) => (
                    <Room
                        key={place.id}
                        id={place.id}
                        name={place.name}
                        icon={place.icon}
                        lights={place.lights}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default Rooms;
