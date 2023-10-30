import { useState } from "react";
import Product from "./Product.Jsx";

function Section({ productDetails, cartItems, setCartItems, setCartProducts,cartProducts,isAddSuccess,setIsAddSuccess}) {

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productDetails.map((product) => {
              return (
                
                <Product
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

export default Section;
