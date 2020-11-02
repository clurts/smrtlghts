/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import bulb from "../img/settings.svg"

const Button = ({color, txt}) => {

    const style = css`
        background-color: ${color}
        //mere styling her...
    `;


    return (
        <button css={style}>
            <img src={bulb} alt="bulb"/>
            {txt}
        </button>

      );
    
}
 
export default Button
