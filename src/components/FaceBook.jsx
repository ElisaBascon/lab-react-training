import React from "react";
import Profiles from '../data/berlin.json';

export default function FaceBook () {

    return (
        <div >
        {Profiles.map ((contact) => {
            return (
                <div>
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