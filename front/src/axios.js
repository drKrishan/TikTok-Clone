import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev-tiktok-mern-backend.herokuapp.com/",
});

export default instance;
