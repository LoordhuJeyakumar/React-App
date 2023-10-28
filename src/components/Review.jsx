import React, { Component } from "react";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }
  changeColor = (event) => {
    this.setState({
        rating : event.target.value
    })

    let ratingBtns = event.target.parentElement.childNodes;
    ratingBtns.forEach(btn=>{
        if(btn.value<=this.state.rating){
            btn.className = "bi-star-fill rating btn border-0 p-0 m-0 text-warning"
        }else{
            btn.className = "bi-star rating btn border-0 p-0 m-0 text-warning"
        }
       
    })
   
  };
  fixRating = (event)=>{

    this.setState({
        rating : event.target.value
    })

    let ratingBtns = event.target.parentElement.childNodes;
    ratingBtns.forEach(btn=>{
        if(btn.value<=this.state.rating){
            btn.className = "bi-star-fill rating btn border-0 p-0 m-0 text-warning"
        }else{
            btn.className = "bi-star rating btn border-0 p-0 m-0 text-warning"
        }
       
    })
    
  }

  getRatings = () => {

    return (
      <div
        className="d-flex justify-content-center small text-warning mb-2 "
        id="ratingBox"
      >
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.changeColor}
          onClick={this.fixRating}
          value={1}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.changeColor}
          onClick={this.fixRating}
          value={2}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.changeColor}
          onClick={this.fixRating}
          value={3}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.changeColor}
          onClick={this.fixRating}
          value={4}
        ></button>
        <button
          className="bi-star rating btn border-0 p-0 m-0 text-warning"
          onMouseOver={this.changeColor}
          value={5}
          onClick={this.fixRating}
        ></button>
        {/*  <span className="bi-star-fill rating" onMouseOver={changeColor} ></span>
          <div className="bi-star rating " onMouseOver={changeColor} ></div>
          <div className="bi-star rating" onMouseOver={changeColor} ></div>
          <div className="bi-star rating" onMouseOver={changeColor} ></div>
          <div className="bi-star rating" onMouseOver={changeColor} ></div> */}
      </div>
    );
  };
  

  render() {
    const { product } = this.props;

    return (
      <div>
        <div
          className="d-flex justify-content-center small text-warning mb-2 "
          id="ratingBox"
        >
          {product.productReview ? this.getRatings() : ""}
        </div>
      </div>
    );
  }
}

export default Review;
