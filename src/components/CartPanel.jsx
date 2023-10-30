// Import React and Component from the React library
import React, { Component } from "react";

// Create and Export the CartPanel class component
export default class CartPanel extends Component {
  // Create a constructor function to initialize the component state
  constructor(props) {
    super(props);
  }

  // This function returns the price of the product, considering its start and end prices, old price, and current price.
  getProductPrice = (startPrice, endPrice, oldPrice, currentPrice) => {
    // If there is a start price and end price, then the price is a range.
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

  // This function renders the cart panel.
  render() {
    // Get the cart items and cart products from the state.
    const { cartItems, setCartItems, cartProducts, setCartProducts } =
      this.props;

    // This function handles removing a product from the cart.
    function handleRemoveFromCart(event) {
      // Iterate over the cart items
      cartProducts.map((cartItem, index) => {
        //and find the item that matches the event target value
        if (cartItem.productId == event.target.value) {
          // Remove the item from the cart
          cartProducts.splice(index, 1);
          cartItem.addToCart = false;
          cartItems.splice(index, 1);

          // Set the cartItems state to the updated cart
          setCartItems([...cartItems]);
          setCartProducts([...cartProducts]);
        }
      });
    }

    return (
      <div>
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Cart Items</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="col mb-5">
              {/* if cartItems length 0 shows Your Cart is empty */}
              {cartItems.length === 0 ? (
                <div className="text-center text-danger fs-3">
                  Your Cart is empty
                </div>
              ) : (
                /* else get all products from the cart and return the product details into the panel */
                cartProducts.map((item) => {
                  return (
                    <div className="card h-100 border-0" key={item.productId}>
                      <div className="card-body p-0 mb-3 border  border-2 ">
                        {/* <!-- Sale badge--> */}
                        {item.productStatus == "sale" ? (
                          <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                          >
                            Sale
                          </div>
                        ) : (
                          ""
                        )}
                        {/* <!-- Product image--> */}
                        <img
                          className="card-img-top"
                          src={item.productImg}
                          alt={item.productName}
                        />
                        {/*  <!-- Product details--> */}
                        <div className="card-body p-2">
                          <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{item.productName}</h5>
                            {this.getProductPrice(
                              item.productPrice.startPrice,
                              item.productPrice.endPrice,
                              item.productPrice.oldPrice,
                              item.productPrice.currentPrice
                            )}
                          </div>
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button
                                className="btn btn-outline-danger mt-auto"
                                value={item.productId}
                                onClick={handleRemoveFromCart}
                              >
                                Remove from Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
