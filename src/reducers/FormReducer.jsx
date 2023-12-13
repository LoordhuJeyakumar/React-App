// Defines the initial state for the user data form
let initialState = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  phone: "",
  dob: "",
  qualification: "",
  city: "",
  address: "",
  admin: false,
  userStatus: true,
  state: "",
  pincode: "",
  userCreationDate: "",
  userCreationTime: "",
  userCreationTimeStamp: 0,
};

// Reducer function to handle state updates based on actions
function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      // Updates the corresponding form field with the provided value
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    case "selctState": {
      // Updates the 'state name' field with the selected state
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "gender": {
      // Updates the 'gender' field with the selected gender
      return {
        ...state,
        gender: action.payLoad.value,
      };
    }
    case "creationDate": {
      // Updates the user creation date, time, and timestamp
      return {
        ...state,
        userCreationDate: action.payLoad.userCreationDate,
        userCreationTime: action.payLoad.userCreationTime,
        userCreationTimeStamp: action.payLoad.userCreationTimeStamp,
      };
    }
    case "dob": {
      // Parses the date of birth string and updates the 'dob' field
      let dob = Date.parse(action.payLoad.value);
      let dt = new Date(dob).toISOString().slice(0, 10);

      return {
        ...state,
        [action.payLoad.name]: dt,
      };
    }
    case "userType": {
      // Updates the 'admin' field based on the selected user type
      return {
        ...state,
        admin: action.payLoad.value,
      };
    }
    case "userStatus": {
      // Updates the 'userStatus' field based on the selected user status
      let res = {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };

      return res;
    }
    case "init": {
      // Resets the state to the initial state
      return initialState;
    }
    case "updateUser": {
      // Updates the state with the provided user data
      let res = {
        ...state,
        ...action.payLoad,
      };

      return res;
    }
    default: {
      // Return the initial state if no matching action is found
      return initialState;
    }
  }
}

// Exports the 'initialState' and 'reducer' functions
export { initialState, reducer };
