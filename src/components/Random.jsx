import React from "react";

export default function Random(props) {
    let randomNumber = Math.floor(Math.random() * props.max) +1
    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {randomNumber}</p>
        </div>
    )
}