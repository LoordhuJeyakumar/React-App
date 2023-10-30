import React, { Component } from "react"; // Import the React library and the Component class.

// Create a React component class called Review.
class Review extends Component {
  // The constructor function is called when the component is first created.
  constructor(props) {
    // Call the parent class's constructor.
    super(props);
    /* 
    Initialize the component's state.
    The state object contains the component's data. 
    In this case, the component has a single property: `rating`. */
    this.state = {
      rating: 0,
    };
  }

  /* 
  This is a React event handler function. 
  It is called when the user hover or click the review stars.
  */
  fixRating = (event) => {
    // Update the component's state with the new rating value.
    this.setState({
      rating: event.target.value,
    });

    /* Get all of the child nodes of the div parent element. 
    These child nodes are the star buttons. */
    let ratingBtns = event.target.parentElement.childNodes;

    // Iterate over the star buttons and update their class names.
    ratingBtns.forEach((btn) => {
      /* 
      // If the star button's value is less than or equal to the current rating, 
      set the button's class name to `bi-star-fill`.
      */
      if (btn.value <= this.state.rating) {
        btn.className = "bi-star-fill rating btn border-0 p-0 m-0 text-warning";
      } else {
        // Otherwise, set the button's class name to `bi-star`.
        btn.className = "bi-star rating btn border-0 p-0 m-0 text-warning";
      }
    });
  };

  /* 
   This is a React function that returns a React element that contains a div of star buttons.
  */
  getRatings = () => {
    return (
      // Create a `div` element with the following attributes:
      <div
        className="d-flex justify-content-center small text-warning mb-2 "
        id="ratingBox"
      >
        {/* Create five `button` elements, one for each star. */}
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.fixRating}
          onClick={this.fixRating}
          value={1}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.fixRating}
          onClick={this.fixRating}
          value={2}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.fixRating}
          onClick={this.fixRating}
          value={3}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.fixRating}
          onClick={this.fixRating}
          value={4}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.fixRating}
          value={5}
          onClick={this.fixRating}
        ></button>
      </div>
    );
  };

  /* 
  // The render() method is responsible for rendering 
  the component's output to the screen.
  */
  render() {
    // Get the product prop.
    const { product } = this.props;

    return (
      // Render a container element to display the star rating.
      <div>
        <div
          className="d-flex justify-content-center small text-warning mb-2 "
          id="ratingBox"
        >
          {/* Render the star rating component if there is a productReview property ob props. */}
          {product.productReview ? this.getRatings() : ""}
        </div>
      </div>
    );
  }
}

// Export the Review component so that it can be used in other components.
export default Review;
