const initialStateTeacher = {
  fullName: "",
  addressDetails: {
    address: "",
    city: "",
    stateName: "",
    pincode: "",
  },
  phone: "",
  doj: "",
  dob: "",
  email: "",
  qualification: "",
  coreSubject: "",
  teachingSubjects: [],
  salary: "",
  isClassTeacher: false,
  assignedClass: '',
  isOnline: true,
  TeacherAddTimeStamp: "",
  TeacherImage: "",
};

function teacherReducerFn(state, action) {
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
    case "teachingSubjects": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "isClassTeacher": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
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
    case "dojChange": {
      return {
        ...state,
        [action.payLoad.name]: action.payLoad.value,
      };
    }
    case "creationDateAndImage": {
      return {
        ...state,
        doa: action.payLoad.doa,
        TeacherAddTimeStamp: action.payLoad.TeacherAddTimeStamp,
        TeacherImage: action.payLoad.TeacherImage,
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
      return initialStateTeacher;
    }
    default: {
      return initialStateTeacher;
    }
  }
}
export { initialStateTeacher, teacherReducerFn };
