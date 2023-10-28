import React from "react";
import Review from "./Review";
import Cart from "./Cart";

function Product(props) {
  const { product } = props;

  const getProductPrice = (startPrice, endPrice, oldPrice, currentPrice) => {
    if (startPrice && endPrice) {
      return `${startPrice} - ${endPrice}`;
    } else if (oldPrice) {
      return (
        <div>
          <span className="text-muted text-decoration-line-through">
            {oldPrice}
          </span>
          {" " + currentPrice}
        </div>
      );
    } else {
      return currentPrice;
    }
  };

  const handleAddToCart = (event) => {
    
    event.target.disabled = true;
    console.log(event);
    
   
  
  };

  const getButton = (startPrice, endPrice) => {
    if (startPrice && endPrice) {
      return (
        <div className="text-center">
          <button className="btn btn-outline-dark mt-auto" hidden={false}>View options</button>
        </div>
      );
    } else {
      return (
        <div className="text-center ">
          <button disabled={false} hidden={false} className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      );
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Sale badge */}
        {product.productStatus == "sale" ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}

        {/* Product image */}
        <img
          className="card-img-top"
          src={product.productImg}
          alt="Product Image"
        />
        {/* Product details */}
        <div className="card-body p-4">
          <div className="text-center">
            {/*Product name */}
            <h5 className="fw-bolder">{product.productName}</h5>
            {/* Product reviews */}
            {/* {product.productReview ? getRatings() : ""} */}
            {<Review product={product} />}
            {/* Product price */}
            {(() => {
              return getProductPrice(
                product.productPrice.startPrice,
                product.productPrice.endPrice,
                product.productPrice.oldPrice,
                product.productPrice.currentPrice
              );
            })()}
          </div>
        </div>
        {/*  Product actions */}
        <div className=" d-flex justify-content-evenly card-footer p-4 pt-0 border-top-0 bg-transparent">
        {/* <button className="btn btn-outline-dark mt-auto" >Remove From Cart</button> */}
          {getButton(
            product.productPrice.startPrice,
            product.productPrice.endPrice
          )}
          
        </div>
      </div>
      
    </div>
  );
}

export default Product;
