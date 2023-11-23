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
};

function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return {
        /* gender: "",
        dob: "",
        admin: false,
        userStatus: false,
        state: "", */
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    case "dob": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "userType": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "userStatus": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "init":{
      return initialState
    }
    default: {
      return initialState;
    }
  }
}

export { initialState, reducer };
