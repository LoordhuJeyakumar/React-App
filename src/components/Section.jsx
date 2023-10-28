import React from "react";
import Product from "./Product.Jsx";
import Cart from "./Cart";

function Section(props) {
  const { productDetails } = props;
  

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productDetails.map((product) => {
             return <Product product={product} key={product.productId}/>;
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Section;
