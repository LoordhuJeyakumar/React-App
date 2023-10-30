// Import the React library.
import React from "react";

// Create a React function component called Header.
function Header() {
  return (
    // Render the Header.
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
// Export the Header component so that it can be used in other components.
export default Header;
