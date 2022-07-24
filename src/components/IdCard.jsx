import React from "react";

export default function IdCard (props) {
    const {lastName, firstName, gender, height, birth, picture} = props.client;
    console.log(props)
    return (
        <div className="IdCard-style">
            <img src={picture}></img>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>{height}m</p>
            <p>First name: {birth}</p>
        </div>
    )
}