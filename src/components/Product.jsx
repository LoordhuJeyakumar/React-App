import React from "react";
import Review from "./Review";

function Product({
  product,
  cartItems,
  setCartItems,
  cartProducts,
  setCartProducts,
}) {
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
  const isProductInCart = (id, event) => {
    return cartItems.includes(id);
  };

  const isProductInCartDisable = (id, btnEvent) => {
    if (cartItems.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddToCart = (btnEvent) => {
    if (!isProductInCart(product.productId, btnEvent)) {
      product.addToCart = true;
      setCartItems([...cartItems, product.productId]);
      setCartProducts([...cartProducts, product]);
    }
  };

  const getButton = (startPrice, endPrice, productId) => {
    if (startPrice && endPrice) {
      return (
        <div className="text-center">
          <button className="btn btn-outline-dark mt-auto" hidden={false}>
            View options
          </button>
        </div>
      );
    } else {
      return (
        <div className="text-center ">
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={handleAddToCart}
            value={productId}
            disabled={isProductInCartDisable(productId)}
          >
            Add to cart
          </button>
        </div>
      );
    }
  };

  const displayNoneStyle = {
    display: "none",
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
          alt={product.productName}
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
        <div className=" d-flex flex-column align-items-center justify-content-evenly card-footer p-4 pt-0 border-top-0 bg-transparent">
          {/* <button className="btn btn-outline-dark mt-auto" >Remove From Cart</button> */}
          {getButton(
            product.productPrice.startPrice,
            product.productPrice.endPrice,
            product.productId
          )}
          <div
            className="alert text-center text-light bg-success m-2 mb-0 p-0"
            role="alert"
            style={product.addToCart ? {} : displayNoneStyle}
          >
            Successfully added to the cart <i className="bi bi-cart-check-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
