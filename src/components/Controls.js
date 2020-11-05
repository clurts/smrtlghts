/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useContext, useEffect } from "react";
import LightSlider from "../components/LightSlider";
import { dataContext } from "../contexts/DataContext";

const Controls = (props) => {
    const { setIsSubPage } = useContext(dataContext);

    useEffect(() => {
        setIsSubPage(true);
    }, [setIsSubPage]);

    return (
        <div>
            <h2>Controls go here</h2>
            <LightSlider initial="10" />
        </div>
    );
};

export default Controls;
