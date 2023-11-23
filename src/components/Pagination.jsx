import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../App";

function Pagination({
  contentPerPage,
  totalData,
  currentNavPage,
  setCurrentNavPage,
}) {
  const totalPages = [];
  const previousBtnRef = useRef();
  const nextBtnRef = useRef();

  useEffect(() => {
    if (currentNavPage == 1) {
      if (previousBtnRef) {
        previousBtnRef.current.disabled = true;
      }
    } else {
      previousBtnRef.current.disabled = false;
    }

    if (currentNavPage == totalPages.length) {
      if (nextBtnRef) {
        nextBtnRef.current.disabled = true;
      }
    } else {
      nextBtnRef.current.disabled = false;
    }
  }, [currentNavPage]);

  for (let i = 1; i <= Math.ceil(totalData / contentPerPage); i++) {
    totalPages.push(i);
  }

  const handlePageChange = (pageNum, event) => {
  
    setCurrentNavPage(pageNum);
  };
  return (
    <div >
      <nav className="paginationNav">
        <ul className="pagination justify-content-end m-0">
          <li className="page-item">
            <button
              className="page-link p-2 previousBtn"
              aria-label="Previous"
              ref={previousBtnRef}
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
          {totalPages.map((pageNum) => {
            if (pageNum == currentNavPage) {
              return (
                <li className="page-item" key={pageNum}>
                  <button
                    className="page-link p-2 active"
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            } else {
              return (
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

          <li className="page-item">
            <button
              className="page-link p-2 nextBtn"
              aria-label="Next"
              ref={nextBtnRef}
              onClick={(event) => {
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
