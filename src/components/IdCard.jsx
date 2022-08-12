import React from "react";

export default function IdCard (props) {
    const {lastName, firstName, gender, height, birth, picture} = props.client;
    console.log(props)
    return (
        <div >
            <div className="idCardStyle" >
                <img src={picture} alt="text"></img>
                <div className="idCardInfo" >
                    <p><b>First name: </b>{firstName}</p>
                    <p><b>Last name: </b>{lastName}</p>
                    <p><b>Gender: </b>{gender}</p>
                    <p><b>Height: </b>{height / 100}m</p>
                    <p><b>Birth: </b>{birth}</p>
                </div>
            </div>
        </div>
    )
}