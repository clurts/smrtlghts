import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataContextProvider = (props) => {
    const [color, setColor] = useState("#FF0000");
    const [intensity, setIntensity] = useState("10");
    const [isSubPage, setIsSubPage] = useState(false);
    const [places] = useState([
        {
            id: 1,
            icon: "bed",
            name: "Bed Room",
            lights: 4,
        },
        {
            id: 2,
            icon: "sofa",
            name: "Living Room",
            lights: 2,
        },
        {
            id: 3,
            icon: "kitchen",
            name: "Kitchen",
            lights: 2,
        },
        {
            id: 4,
            icon: "tub",
            name: "Bathroom",
            lights: 1,
        },
        {
            id: 5,
            icon: "house",
            name: "Outdoor",
            lights: 5,
        },
        {
            id: 6,
            icon: "balcony",
            name: "Balcony",
            lights: 2,
        },
    ]);

    return (
        <dataContext.Provider
            value={{
                places,
                color,
                setColor,
                intensity,
                setIntensity,
                isSubPage,
                setIsSubPage,
            }}
        >
            {props.children}
        </dataContext.Provider>
    );
};

export default DataContextProvider;
