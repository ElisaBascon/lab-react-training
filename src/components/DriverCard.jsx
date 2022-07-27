import React from "react";

export default function DriverCard(props) {
    
    
    return (
        <div className="cardContainer">
        <div className="driveCard" >
            <img className="driveCardImg" src={props.img} alt={props.img}/>
            <h3>{props.name}</h3>   
            <h1>{props.rating}</h1>
            <h3>{props.car.model} - {props.car.licensePlate}</h3>   
        </div>
    </div>
    )
}