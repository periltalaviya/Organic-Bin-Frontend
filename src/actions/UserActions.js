import UserServices from "../services/UserServices";

const UserActions = {
  userRegister: (user) => {
    let actionObject = {
      email: "",
      password: "",
      name: "",
      gender: "",
      dateOfBirth: "",
      contact: "",
      street: "",
      cityName: "",
      stateName: "",
      pincode: "",
      role: "",
    };

    let cityObject = {
      name: "",
    };
    let stateObject = {
      name: "",
    };

    let trimmedFirstName = user.firstName.trim();
    let firstName =
      trimmedFirstName.charAt(0).toUpperCase() +
      trimmedFirstName.slice(1).toLowerCase();

    let trimmedLastName = user.LastName.trim();
    let lastName =
      trimmedLastName.charAt(0).toUpperCase() +
      trimmedLastName.slice(1).toLowerCase();

    let name = firstName + lastName;
    let contact = "91" + user.contact;

    actionObject.email = user.email.trim();
    actionObject.password = user.password;
    actionObject.name = name;
    actionObject.gender = user.gender;
    actionObject.dateOfBirth = user.dateOfBirth;
    actionObject.contact = contact;
    actionObject.street = user.street;
    actionObject.cityName = user.cityName;
    actionObject.stateName = user.stateName;
    actionObject.pincode = user.pincode;
    actionObject.role = user.role;
  },
  getStateList: (onSuccess = () => {}, onError = () => {}) => {
    UserServices.getStates()
      .then((data) => {
        console.log(data);
        onSuccess(data);
      })
      .catch((error) => {
        console.log(error);
        onError(error);
      });
  },
};

export default UserActions;
