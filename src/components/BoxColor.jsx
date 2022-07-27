import React from "react";

export default function BoxColor (props) {
    return (
        <div className="greetingCardStyle" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
            <div className="greetingCardInfo" >rgb({props.r}, {props.g}, {props.b})</div>
        </div>
    )

} 