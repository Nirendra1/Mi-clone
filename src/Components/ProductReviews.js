import React from "react";
import ProductReviewsCard from "./ProductReviewCard";
import "../Styles/productReviews.css";
const ProductReviews = ({ productReviews }) => {
    return (
        <>
            <div className="productReviews">
                {productReviews && productReviews.map((item, index) => (
                    <ProductReviewsCard price={item.price} name={item.name} image={item.image} review={item.review} link={item.url} index={index} key={item.image} />

                ))}
            </div>
        </>
    )
}
export default ProductReviews;
