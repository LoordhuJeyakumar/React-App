import React from "react";
import NavComponent from "./components/NavComponent";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";
import Cart from "./components/Cart";
import CartPanel from "./components/CartPanel";

function App(props) {
  const { productDetails } = props;

  return (
    <div>
      <NavComponent />
      <CartPanel />
      <Header />
      <Section productDetails={productDetails} />
      <Footer />
    </div>
  );
}

export default App;
