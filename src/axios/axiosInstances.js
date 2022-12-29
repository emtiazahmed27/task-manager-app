import axios from "axios";

const instances = axios.create({
  baseURL: "https://taskmanagerapp-pi.vercel.app/",
  headers: {
    // authorization: `bearer${localStorage.getItem("authToken")}`,
  },
});

export default instances;
