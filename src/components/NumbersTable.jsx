import React, { useState } from "react";

export default function NumbersTable ({limit}) {
    const newArr = []

    for (let i = 1; i <= limit; i++) newArr.push(i)

    return (
        <div className="numbersTable" >
        {newArr.map (elem => {
            return (
                elem % 2 === 0 ? <div className="redNumber" key={elem}>{elem}</div> : <div key={elem}>{elem}</div>
            )
        })}
        </div>
    )
}