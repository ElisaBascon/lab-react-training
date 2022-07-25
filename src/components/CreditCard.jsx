import React from "react";

export default function CreditCard(props) {

    return (
        <div className="boxCreditCard">
            <div className="creditCard " style={{backgroundColor: `${props.bgColor}` }}>
                <img src={props.type} alt={props.type} />
                <h2>···· ···· ···· {props.number.slice(-4)}</h2>
                <h3>{props.expirationMonth} / {props.expirationYear}</h3>   
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}