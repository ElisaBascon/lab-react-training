import React from "react";

export default function CreditCard(props) {

    return (
            <div className="boxCreditCard">
                <div className="creditCard " style={{backgroundColor: `${props.bgColor}` }}>
                    <img src={props.type} alt={props.type} />
                    <h2><strong>···· ···· ····</strong> {props.number.slice(-4)}</h2>
                    <div>
                    <h3>{props.expirationMonth} / {props.expirationYear}</h3><p>{props.bank}</p>
                    </div>
                    <p>{props.owner}</p>
                </div>
            </div>
    )
}