import React, { Component } from "react";

// Create a React class component called Cart.
class Cart extends Component {
  // The constructor function is called when the component is first created.
  constructor(props) {
    // Call the parent class's constructor.
    super(props);
  }

  // The render() method is responsible for returning the React element that will be rendered to the screen.
  render() {
    // Get the cartItem prop.
    const { cartItem } = this.props;

    return (
      <div>
        <form className="d-flex">
          <button
            className="btn btn-outline-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cartItem.length}
            </span>
          </button>
        </form>
      </div>
    );
  }
}

export default Cart;
