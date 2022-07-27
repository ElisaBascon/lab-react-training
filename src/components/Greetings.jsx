import React from "react";

const Greetings = (props) => {

    let greeting;
    switch(props.lang){
        case 'es':
            greeting = 'Hola';
            break;
        case 'de':
            greeting = 'Hallo';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default: 
            greeting = 'Hello'
            break;
    };

    return (
            <div className="greetingCardStyle">
                <div className="greetingCardInfo">
                    <h2>{greeting + ' ' + props.children}!</h2>
                </div>
            </div>
    )
}

export default Greetings;