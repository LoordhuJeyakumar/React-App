const initialState = {
  fullName: "",
  addressDetails: {
    address: "",
    city: "",
    stateName: "",
    pincode: "",
  },
  parentPhone: "",
  doa: "",
  dob: "",
  parentEmail: "",
  parentName: "",
  currentClass: 0,
  isOnline: "",
  StudentAddTimeStamp: 0,
  studentImage: "",
};

function studentReducerFn(state, action) {
  switch (action.type) {
    case "inputChange": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "addressChange": {
      return {
        ...state,
        addressDetails: {
          ...state.addressDetails,
          [action.payLoad.name]: action.payLoad.value,
        },
      };
    }
    case "classChange": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "dobChange": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "creationDateAndImage": {
      return {
        ...state,
        doa: action.payLoad.doa,
        StudentAddTimeStamp: action.payLoad.StudentAddTimeStamp,
        studentImage: action.payLoad.studentImage,
      };
    }
    case "isOnline": {
      return {
        ...state,
        isOnline: action.payLoad.isOnline,
      };
    }
    case "update": {
      return action.payLoad;
    }
    case "init": {
      return initialState;
    }
    default: {
      return initialState;
    }
  }
}
export { initialState, studentReducerFn };
