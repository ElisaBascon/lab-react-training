import React from "react";

export default function IdCard (props) {
    const {lastName, firstName, gender, height, birth, picture} = props.client;
    console.log(props)
    return (
        <div className="IdCard-style">
            <img src={picture} alt="text"></img>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height / 100}m</p>
            <p>Birth: {birth}</p>
        </div>
    )
}