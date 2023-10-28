import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const productDetails = [
  {
    productId: 1,
    productName: "Fancy Product",
    productPrice: {
      startPrice: "$40.00",
      endPrice: "$80.00",
      oldPrice: null,
      currentPrice: null,
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "normal",
    productReview: false,
  },
  {
    productId: 2,
    productName: "Special Item",
    productPrice: {
      startPrice: null,
      endPrice: null,
      oldPrice: "$20.00",
      currentPrice: "$18.00",
      
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "sale",
    productReview: true,
  },
  {
    productId: 3,
    productName: "Sale Item",
    productPrice: {
      startPrice: null,
      endPrice: null,
      oldPrice: "$50.00",
      currentPrice: "$25.00",
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "sale",
    productReview: false,
  },
  {
    productId: 4,
    productName: "Popular Item",
    productPrice: {
      startPrice: null,
      endPrice: null,
      oldPrice: null,
      currentPrice: "$40.00",
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "normal",
    productReview: true,
  },
  {
    productId: 5,
    productName: "Sale Item",
    productPrice: {
      startPrice: null,
      endPrice: null,
      oldPrice: "$50.00",
      currentPrice: "$25.00",
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "sale",
    productReview: false,
  },
  {
    productId: 6,
    productName: "Fancy Product",
    productPrice: {
      startPrice: "$120.00",
      endPrice: "$280.00",
      oldPrice: null,
      currentPrice: null,
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "normal",
    productReview: false,
  },
  {
    productId: 7,
    productName: "Special Item",
    productPrice: {
      startPrice: null,
      endPrice: null,
      oldPrice: "$20.00",
      currentPrice: "$18.00",
      
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "sale",
    productReview: true,
  },
  {
    productId: 8,
    productName: "Popular Item",
    productPrice: {
      startPrice: null,
      endPrice: null,
      oldPrice: null,
      currentPrice: "$40.00",
    },
    productImg: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productStatus: "normal",
    productReview: true,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App productDetails = { productDetails }/>
  </React.StrictMode>,
)
