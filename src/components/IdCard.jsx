import React from "react";

export default function IdCard (props) {
    const {lastName, firstName, gender, height, birth, picture} = props.client;
    console.log(props)
    return (
        <div >
            <div className="idCardStyle" >
                <img src={picture} alt="text"></img>
                <div className="idCardInfo" >
                    <p><strong>First name: </strong>{firstName}</p>
                    <p><strong>Last name: </strong>{lastName}</p>
                    <p><strong>Gender: </strong>{gender}</p>
                    <p><strong>Height: </strong>{height / 100}m</p>
                    <p><strong>Birth: </strong>{birth}</p>
                </div>
            </div>
        </div>
    )
}