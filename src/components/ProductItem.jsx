import React from "react";
import Review from "./Review";

//defines a function called Product, which takes five props: product, cartItems, setCartItems, cartProducts, setCartProducts,
function ProductItem({
  product,
  cartItems,
  setCartItems,
  cartProducts,
  setCartProducts,
}) {
  /* 
  This function takes the 
  start price, end price, old price, and current price of a product 
  as input and returns a formatted string representing the product's price.

  */
  const getProductPrice = (startPrice, endPrice, oldPrice, currentPrice) => {
    // If the product has a start price and an end price, return the range of prices in the format `${startPrice} - ${endPrice}`.
    if (startPrice && endPrice) {
      return `${startPrice} - ${endPrice}`;

      // If there is an old price, then the price is the current price with a strikethrough through the old price.
    } else if (oldPrice) {
      return (
        <div>
          <span className="text-muted text-decoration-line-through">
            {oldPrice}
          </span>
          {" " + currentPrice}
        </div>
      );

      // Otherwise, the price is simply the current price.
    } else {
      return currentPrice;
    }
  };

  // Function to check if a product is in the cart.
  const isProductInCart = (id) => {
    // Check if the product ID is included in the cartItems array.
    return cartItems.includes(id);
  };

  // Function to add a product to the cart.
  const handleAddToCart = () => {
    // Check if the product is already in the cart.
    // The product is not in the cart.
    if (!isProductInCart(product.productId)) {
      // Set the product's addToCart property to true.
      product.addToCart = true;

      // Add the product's ID to the cartItems array.
      setCartItems([...cartItems, product.productId]);

      // Add the product to the cartProducts array.
      setCartProducts([...cartProducts, product]);
    }
  };

  // Function to return a button based on the start price, end price, and product ID.
  const getButton = (startPrice, endPrice, productId) => {
    // If the product has a start price and an end price, return a button that says "View options".
    if (startPrice && endPrice) {
      return (
        <div className="text-center">
          <button className="btn btn-outline-dark mt-auto" hidden={false}>
            View options
          </button>
        </div>
      );

      // Otherwise, return a button that says "Add to cart".
    } else {
      return (
        <div className="text-center ">
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={handleAddToCart}
            value={productId}
            disabled={isProductInCart(productId)}
          >
            Add to cart
          </button>
        </div>
      );
    }
  };

  //create a object that have style property
  const displayNoneStyle = {
    display: "none",
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Sale badge */}

        {/* If product property  productStatus have value "sale* it will show sale badge*/}
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
            {/* Add  Review component*/}
            {<Review product={product} />}
            {/* Product price */}

            {/* Get product price based on productPrice property */}
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
          {/* get buttons based on productPrice */}
          {getButton(
            product.productPrice.startPrice,
            product.productPrice.endPrice,
            product.productId
          )}

          {/* this will show  Successfully added to the cart*/}
          <div
            className="alert text-center text-light bg-success m-2 mb-0 p-0"
            role="alert"
            /* based on product proberty addToCart it will show or hide the message */
            style={product.addToCart ? {} : displayNoneStyle}
          >
            Successfully added to the cart{" "}
            <i className="bi bi-cart-check-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Product component so that it can be used in other components.
export default ProductItem;
