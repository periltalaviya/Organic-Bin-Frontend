import AxiosInstance from "../axiosInstance";

const UserServices = {
  userRegister: (user) => {},
  getStates: () => {
    return AxiosInstance().get(`static/state/get/all`);
  },
};

export default UserServices;
