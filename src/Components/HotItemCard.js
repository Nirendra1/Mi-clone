import React from "react";
import "../Styles/HotItemCard.css"
const HotItemCard = ({ index, image, price, name, link, url }) => {

    return (
        <>




<div className="HotItemCard">
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
            
        </div>
        
            {/* <div className="HotItemCard">

                <a href={link} ><img src={image} alt="" />
                    <img src={url} />
                </a>
                <p>{name}</p>
                <span>{price}</span>

            </div> */}
        </>
    )
}
export default HotItemCard;