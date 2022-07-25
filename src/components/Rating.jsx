import React from "react";

export default function Rating (props) {
    const stars = Math.round(props.children)
    if (stars === 0) {
        return "☆☆☆☆☆";
      } else if (stars === 1) {
        return "★☆☆☆☆";
      } else if (stars === 2) {
        return "★★☆☆☆";
      } else if (stars === 3) {
        return "★★★☆☆";
      } else if (stars === 4) {
        return "★★★★☆";  
      } else {
        return "★★★★★";       
      };


    return (
        <div>
            <h2>{stars}</h2>
        </div>
    )
}
