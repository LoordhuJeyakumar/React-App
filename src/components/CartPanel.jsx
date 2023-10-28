import React, { Component } from "react";

export default class CartPanel extends Component {



    
  render() {
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
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">Your Cart is empty</div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
