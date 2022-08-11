import React, { useState } from "react";

const LikeButton = () => {
    const [count, setCount] = useState(0);

    const setCounter = () => {
        setCount(count + 1);
    }

    return (
        <button className="likebutton" onClick={setCounter}>{count} likes</button>
    );
};

export default LikeButton;