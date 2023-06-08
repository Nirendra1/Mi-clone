import React from "react";
import "../Styles/ProductReviewCard.css";
const ProductReviewsCard = ({ index, price, name, review,link,url,image}) => {
    return (
        <>
            <div className="ProductReviewCard">
                {/* <div className="pro"> */}
              <a href={link}><img src={image} alt="" />
              <img src={url}/>
              </a>
                <div className="pro">
                <d5>{review}</d5>
                </div>
                <div className="promax">
                <span>{name}</span>
                <b>{price}</b>
            
            </div>
    
        </div>
            
      </>
    )
}
export default ProductReviewsCard;