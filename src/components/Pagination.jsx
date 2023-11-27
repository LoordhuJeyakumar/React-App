import React, { useEffect, useRef } from "react";

// This component renders a pagination bar with page numbers and previous/next buttons
/* 
This is a function component that takes four props: 
      -contentPerPage,  The number of items to display per page
      -totalData, The total number of items
      -currentNavPage, The current page number
      -and setCurrentNavPage, A State function to update the current page number

*/
function Pagination({
  contentPerPage,
  totalData,
  currentNavPage,
  setCurrentNavPage,
}) {
  // Create an array to store the page numbers
  const totalPages = [];

  // Ref elements for the previous and next buttons
  const previousBtnRef = useRef();
  const nextBtnRef = useRef();

  // Use an useEffect hook to update the button states based on the current page number
  useEffect(() => {
    // Disable the previous button if on the first page
    if (currentNavPage == 1) {
      if (previousBtnRef) {
        previousBtnRef.current.disabled = true;
      }
    } else {
      previousBtnRef.current.disabled = false;
    }

    // Disable the next button if on the last page
    if (currentNavPage == totalPages.length) {
      if (nextBtnRef) {
        nextBtnRef.current.disabled = true;
      }
    } else {
      nextBtnRef.current.disabled = false;
    }
  }, [currentNavPage]);

  // Generate the page numbers
  for (let i = 1; i <= Math.ceil(totalData / contentPerPage); i++) {
    totalPages.push(i);
  }

  // Handle page number clicks
  const handlePageChange = (pageNum) => {
    setCurrentNavPage(pageNum);
  };
  return (
    <div>
      {/* Render the pagination bar */}
      <nav className="paginationNav">
        <ul className="pagination justify-content-end m-0">
          {/* Previous button */}
          <li className="page-item">
            <button
              className="page-link p-2 previousBtn"
              aria-label="Previous"
              ref={previousBtnRef}
              // This is an event handler that decrements the currentNavPage state when the previous button is clicked
              onClick={(event) => {
                if (currentNavPage <= 1) {
                  event.target.disabled = true;
                } else {
                  event.target.disabled = false;
                  setCurrentNavPage(currentNavPage - 1);
                }
              }}
            >
              Previous
            </button>
          </li>
          {/* Page number links */}
          {totalPages.map((pageNum) => {
            if (pageNum == currentNavPage) {
              // Active page number
              return (
                <li className="page-item" key={pageNum}>
                  <button
                    className="page-link p-2 activeBtn"
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            } else {
              return (
                // Regular page number
                <li className="page-item" key={pageNum}>
                  <button
                    className="page-link p-2"
                    onClick={(event) => handlePageChange(pageNum, event)}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            }
          })}

          {/* Next button */}
          <li className="page-item">
            <button
              className="page-link p-2 nextBtn"
              aria-label="Next"
              ref={nextBtnRef}
              // This is an event handler that increments the currentNavPage state when the next button is clicked
              onClick={() => {
                if (currentNavPage < totalPages.length) {
                  setCurrentNavPage(currentNavPage + 1);
                }
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
