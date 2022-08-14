import React, { useState } from "react";
import Profiles from '../data/berlin.json';

export default function FaceBook () {

    const [color, setColor] = useState('white')
    
    const colorStyle = {
        backgroundColor: `${color}`
    }

    return (
        <div >
        <button onClick={(contact) => {
            contact.country === 'USA' ? setColor('blue') : setColor('white')
        }}>USA</button>
        <button onClick={() => setColor(color)}>England</button>
        <button onClick={() => setColor(color)}>Malaysia</button>
        <button onClick={() => setColor(color)}>Germany</button>
        <button onClick={() => setColor(color)}>Sweden</button>

        {Profiles.map ((contact) => {
            return (
                <div style={colorStyle}>
                    <div className="idCardStyle" >
                        <img src={contact.img} alt="profilePicture" />
                        <div className="idCardInfo" >
                        <p><b>First name: </b>{contact.firstName}</p>
                        <p><b>Last name: </b>{contact.lastName}</p>
                        <p><b>Country: </b>{contact.country}</p>
                        {contact.isStudent ? <span><b>Type:</b>Student</span> : <span><b>Type:</b>Teacher</span>} 
                        </div>
                    </div>    
                </div>
                )
            })}
        </div>
    )
}