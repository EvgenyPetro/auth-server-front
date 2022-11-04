import axios from "axios";
const BASE_URL = "http://localhost:9000/";

export const loginUser = async (data) =>
  axios.post(BASE_URL + "api/v1/login", data);

export const getAuthUser = async () =>
  axios.get(BASE_URL + "api/v1/userinfo", {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem('access_token')}`,
    },
  });
