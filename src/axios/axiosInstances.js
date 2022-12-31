import axios from "axios";

const instances = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    // authorization: `bearer${localStorage.getItem("authToken")}`,
  },
});

export default instances;
