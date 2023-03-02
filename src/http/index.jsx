import axios from "axios";

export default axios.create({
  baseURL: "https://webprojectmockup.com/custom/residual/public/api",
  headers: {
    "Content-type": "application/json",
  },
});
