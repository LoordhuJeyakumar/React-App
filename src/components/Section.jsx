//Import the ProductItem Component
import React from "react";
import ProductItem from "./ProductItem";



/* Function component that takes the following props:
 * productDetails: An array of product objects.
 * cartItems: An array of product IDs in the cart.
 * setCartItems: A function to set the cart items.
 * setCartProducts: A function to set the cart products.
 * cartProducts: An array of product objects in the cart.
 * isAddSuccess: A boolean value indicating whether the product was added to the cart successfully.
 * setIsAddSuccess: A function to set the `isAddSuccess` state.
 */
function Section({ productDetails, cartItems, setCartItems, setCartProducts,cartProducts,isAddSuccess,setIsAddSuccess}) {

  return (
    /* 
    The Section component renders a section of products. 
    It maps over the productDetails prop and renders a Product component for each product.
    */
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productDetails.map((product) => {
              return (
                
             

                <ProductItem 
                product={product}
                key={product.productId}
                cartItems={cartItems}
                setCartItems={setCartItems}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                isAddSuccess = {isAddSuccess}
                setIsAddSuccess = {setIsAddSuccess}
                />
               
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// Export the Section component so that it can be used in other components.
export default Section;
