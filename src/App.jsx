/* 
 Import React and useState hook.
 Import NavComponent, Header, Section, Footer, and CartPanel components.
 Import App.css CSS file.
*/

import React, { useState } from "react";
import NavComponent from "./components/NavComponent";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import CartPanel from "./components/CartPanel";
import "./App.css";

//Create a React component called App. It takes a props object as a parameter, which contains the productDetails prop.
function App(props) {
  //Destructures the productDetails prop from the props object.
  const { productDetails } = props;

  // Declare state variables for cartItems and cartProducts.
  //the useState hook to create a state variable called cartItems. The initial value of cartItems is an empty array.
  const [cartItems, setCartItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    /* 
    This App function returns a React element that represents the application's layout. The layout includes the following components:

        * NavComponent: This component renders a navigation bar.
        * CartPanel: This component renders a cart panel.
        * Header: This component renders the header of the application.
        * Section: This component renders a section of products.
        * Footer: This component renders the footer of the application.
        
     All of these components are passed the following props:
        * productDetails: An array of product objects.
        * cartItems: An array of product IDs in the cart.
        * setCartItems: A function to set the cart items.
        * cartProducts: An array of product objects in the cart.
        * setCartProducts: A function to set the cart products.
    */
    <div>
      <NavComponent
        productDetails={productDetails}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <CartPanel
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Header />
      <Section
        productDetails={productDetails}
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
