import axios from "axios";

/**
 * An object of the AxiosInstance class containing settings that should be applied to all requests coming from the application
 */
export const axiosInstance = axios.create({
  timeout: 5000,
})