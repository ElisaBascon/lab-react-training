import React, { useState } from "react";
import Dice0 from "../assets/images/dice-empty.png"
import Dice1 from "../assets/images/dice1.png"
import Dice2 from "../assets/images/dice2.png"
import Dice3 from "../assets/images/dice3.png"
import Dice4 from "../assets/images/dice4.png"
import Dice5 from "../assets/images/dice5.png"
import Dice6 from "../assets/images/dice6.png"



function Dice () {
    const faces = [ Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const [image, setImage] = useState(Dice0);
    
    const handleCLick = () => {
        setImage(Dice0);
        setTimeout(() => {
            return setImage(faces[Math.floor(Math.random() * faces.length)]);
        }, 1000)
    }

    return (
        <div>
            <img className="dice" src={image} alt="dice" onClick={handleCLick} />
        </div>

    );
}

export default Dice;