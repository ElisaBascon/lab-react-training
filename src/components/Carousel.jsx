import React, { useState } from "react";

export default function Carousel({ images }) {
    const imageCarousel = Math.floor(Math.random() * images.length);
    const [click, setClick] = useState(imageCarousel);
    const [image, setImage] = useState(images[imageCarousel]);

    const handleLeft = () => {
        const newClick = click > 0 ? click -1 : images.length -1;
        setClick(newClick);
        return setImage(images[newClick]);
    };

    const handleRight = () => {
        const newClick = click < images.length -1 ? click + 1 : 0;
        setClick(newClick);
        return setImage(images[newClick]);
    };

    return (
        <div className="carousel">
            <button className="carouselButton" onClick={handleLeft}>← Left</button>
            <img  src={image} style={{ width:'150px'}}/>
            <button className="carouselButton" onClick={handleRight}>Right →</button>
        </div>
    )

}