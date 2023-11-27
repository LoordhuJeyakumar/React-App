import React from "react";

/* Define a DataPerPage function component with props 
    -setContentPerPage function, 
    -and setCurrentNavPage from parent component */
function DataPerPage({ setContentPerPage, setCurrentNavPage }) {
  // Handle content per page change
  const handleDataPerPage = (event) => {
    // Reset current page to 1 when content per page changes
    setCurrentNavPage(1);
    // Set content per page to the selected value
    setContentPerPage(event.target.value);
  };
  return (
    <div>
      <label className="input-group-text" htmlFor="showContent">
        Show Content
      </label>
      {/* Display select dropdown to choose content per page */}
      <select
        name="filter"
        id="showContent"
        className="form-select"
        onChange={handleDataPerPage}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}

export default DataPerPage;
