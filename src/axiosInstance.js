import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/";

const AxiosInstance = () => {
  const client = axios.create({
    baseURL: baseURL,
  });

  return client;
};

export default AxiosInstance;
