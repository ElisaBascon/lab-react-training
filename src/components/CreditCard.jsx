import React from "react";
import Visa from "./../assets/images/visa.png";
import Mastercard from "./../assets/images/master-card.svg"

export default function CreditCard(props) {
    let imageType = props.type === Mastercard ? Mastercard : Visa;
    return (
            <div className="boxCreditCard">
                <div className="creditCard " style={{backgroundColor: `${props.bgColor}` }}>
                    <div className="creditCardImg" >
                        <img src={imageType} alt={imageType} />
                    </div>
                    <h2 className="creditCardNumber">···· ···· ···· {props.number.slice(-4)}</h2>
                    <p>{props.expirationMonth} / {props.expirationYear} {props.bank}</p>
                    <p>{props.owner}</p>
                </div>
            </div>
    )
}