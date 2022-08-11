import React from "react";
import WhitGlasses from "../assets/images/maxence.png"
import NoGlasses from "../assets/images/maxence-glasses.png"


function ClickablePicture({ active, handleChangeActive }) {
    
    return (
    <>
      <div>
        {active ? (
          <img
            className="glasses"
            src={WhitGlasses}
            alt="glasses"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="glasses"
            src={NoGlasses}
            alt="no glasses"
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    </>

    );
}

export default ClickablePicture;