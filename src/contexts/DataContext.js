import React, { createContext, useState } from "react";


const dataContext = createContext()


const DataContextProvider = (props) => {
    const [color, setColor] = useState("#FF0000");

    return (  
        <dataContext.Provider value={{color, setColor}} >
            {props.children}
        </dataContext.Provider>
    );
}
 
export default DataContextProvider;