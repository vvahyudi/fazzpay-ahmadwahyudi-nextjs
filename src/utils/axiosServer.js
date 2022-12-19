/* eslint-disable no-undef */
import axios from "axios";

const axiosApiInstances = axios.create({
    baseURL: process.env.URL_BACKED
});
export default axiosApiInstances;
