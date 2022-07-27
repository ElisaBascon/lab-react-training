import React from "react";
import Rating from "./Rating";

export default function DriverCard(props) {
    
    
    return (
        <div className="driveCard" >
            <img className="driveCardImg" src={props.img} alt={props.img}/>
            <div className="driveCardText">
                <h3>{props.name}</h3>   
                <Rating>{props.rating}</Rating>
                <h5>{props.car.model} - {props.car.licensePlate}</h5>   
            </div>    
        </div>
    )
}