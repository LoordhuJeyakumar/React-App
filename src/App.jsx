import React from "react";
import PriceCard from "./components/PriceCard";

function App(props) {
  // Destructure the cardData prop from the props object
  const { cardData } = props;

  // Render the PriceCard component with the cardData prop
  return (
    <div>
      <h1>Price Card</h1>
      <PriceCard cardDetails={cardData} />
    </div>
  );
}

export default App;
