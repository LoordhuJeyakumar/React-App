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
  userCreationTimeStamp:0
};

function reducer(state, action) {
  switch (action.type) {
    case "inputChange":
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    case "selctState": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "gender": {
      return {
        ...state,
        gender: action.payLoad.value,
      };
    }
    case "creationDate": {
      return {
        ...state,
        userCreationDate: action.payLoad.userCreationDate,
        userCreationTime: action.payLoad.userCreationTime,
      };
    }
    case "dob": {
      let dob = Date.parse(action.payLoad.value);
      let dt = new Date(dob).toISOString().slice(0, 10);

      return {
        ...state,
        [action.payLoad.name]: dt,
      };
    }
    case "userType": {
  
      return {
        ...state,
        admin: action.payLoad.value,
      };
    }
    case "userStatus": {
      let res = {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };

      return res;
    }
    case "init": {
      return initialState;
    }
    case "updateUser": {
      let res = {
        ...state,
        ...action.payLoad,
      };
  
      return res;
    }
    default: {
      return initialState;
    }
  }
}

export { initialState, reducer };
