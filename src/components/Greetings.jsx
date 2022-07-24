import React from "react";

const Greetings = ({lang, children}) => {

    let greeting = 'Hello';
    switch(lang){
        case 'es':
            lang = 'Hola';
            break;
        case 'de':
            lang = 'Hallo';
            break;
        case 'fr':
            lang = 'Bonjour';
            break;
        default: 
            lang = 'Hello'
            break;
    };

    return (
        <div>
            <h2>{greeting + ' ' + children}!</h2>
        </div>
    )
}

export default Greetings;