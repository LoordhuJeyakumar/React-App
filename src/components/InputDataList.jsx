import React, { useContext } from "react";
import { DataContext } from "../App";

function InputDataList({ setNameFilter }) {
  const apiData = useContext(DataContext);

  const handleFilterName = (event) => {
    let userId = Number(event.target.value.slice(0, 2));
    let nameFilterArr = apiData.data.filter((each) => {
      return each.id == userId;
    });

    setNameFilter(nameFilterArr);
  };

  return (
    <div>
      <label htmlFor="searchUsers" className="input-group-text">
        Search User
      </label>

      <input
        onChange={handleFilterName}
        type="text"
        list="usersList"
        className="form-control"
        id="searchUsers"
      />

      <datalist id="usersList">
        {apiData.data.map((eachData) => {
          return (
            <option
              key={eachData.id}
              value={`${eachData.id} - ${eachData.first_name} ${eachData.last_name}`}
            ></option>
          );
        })}
      </datalist>
    </div>
  );
}

export default InputDataList;
