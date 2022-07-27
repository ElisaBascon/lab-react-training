import React from "react";

export default function BoxColor (props) {
    return (
        <div className="boxColorStyle" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
            <div className="boxColorInfo" >rgb({props.r}, {props.g}, {props.b})</div>
        </div>
    )

} 