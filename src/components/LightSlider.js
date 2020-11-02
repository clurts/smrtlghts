/** @jsx jsx */
import {useState} from "react";
import { css, jsx } from "@emotion/core";
import settings from "../img/settings.svg"

const LightSlider = ({initial}) => {

    const [intensity, setIntensity] = useState(initial);

    const styleBulb = css`
        width: 5em;
        height: 5em;
        //background-color: hsla(70, 100%, ${90-intensity}%, ${0.6+parseFloat((intensity/100).toFixed(1))});
        background-color: hsla(0, 100%, ${90-intensity}%, 1);
        box-shadow: 0px 0px 10px 3px hsla(0, 100%, ${90-intensity}%, ${0.6+parseFloat((intensity/100).toFixed(1))});
    `
    return ( 
        <div>
            <img src={settings} alt=""/>
            <div css={styleBulb} className="bulb">{(intensity/100).toFixed(1)}</div>
            
            <div class="slidecontainer">
            <input 
                type="range" 
                min="00" 
                max="40" 
                value={intensity} 
                class="slider" 
                id="myRange"
                onChange={ e => (setIntensity(e.target.value))}
                />
            </div>
        </div>
     );
}
 
export default LightSlider;