import React, { useState } from "react";

const ProductCard = () => {
    const [dets,showDets] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image">
        <img style={{height:'250px',objectFit:'cover'}} src="https://i.pinimg.com/1200x/ed/7e/2e/ed7e2ee81f3938b925b21625a79145ef.jpg" alt="Product" />
      </div>

      <div className="product-info">
        <h2 className="product-title">Product Name</h2>

        <button onClick={()=>showDets(prev => !prev)} className="product-btn">
          {!dets ? "View Details":"Hide Details"}
        </button>

     {dets &&
        <div className="product-details">
          <p className="product-price">₹999</p>
          <p className="product-description">
            This is a short product description.
          </p>
          <p className="product-category">
            Category: Electronics
          </p>
        </div>
       }
      </div>
    </div>
  );
};

export default ProductCard;
