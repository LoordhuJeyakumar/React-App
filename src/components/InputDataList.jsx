import React, { useContext } from "react";
import { DataContext } from "../App";

function InputDataList({ setNameFilter }) {
  // Retrieve data from the DataContext

  const apiData = useContext(DataContext);

  // Function to filter users based on the input value
  const handleFilterName = (event) => {
    // Extract the user ID from the input value
    let userId = Number(event.target.value.slice(0, 2));

    // Filter the data array to find users matching the ID
    let nameFilterArr = apiData.data.filter((each) => {
      return each.id == userId; // Check if the user ID matches
    });

    // Update the setNameFilter function with the filtered data
    setNameFilter(nameFilterArr);
  };

  return (
    <div>
      <label htmlFor="searchUsers" className="input-group-text">
        Search User
      </label>

      <input
        onChange={handleFilterName} // Trigger the handleFilterName function on input change
        type="text"
        list="usersList" // Link the input to the datalist
        className="form-control"
        id="searchUsers"
      />

      <datalist id="usersList">
        {apiData.data.map((eachData) => {
          // Map through the data array to create options
          return (
            <option
              key={eachData.id} // Set a unique key for each option
              value={`${eachData.id} - ${eachData.first_name} ${eachData.last_name}`} // Display user ID and name
            ></option>
          );
        })}
      </datalist>
    </div>
  );
}

export default InputDataList;
