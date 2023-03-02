import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "https://webprojectmockup.com/custom/residual/public";

export const userLogin = (body, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${baseURL}/api/login`, body);
    if (data?.success) {
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify(data?.data));
      toast.success("User Login Successfully", {
        autoClose: 5000,
      });
      dispatch({
        type: "USER_LOGIN",
        payload: data?.data,
      });
    } else {
      toast.error(data?.message || "Something Went Wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
