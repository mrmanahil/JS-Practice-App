import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../redux/Actions/actions";

const Login = () => {
  const navigate = useNavigate();

  const data = {
    email: "superAdmin@admin.com",
    password: "12345678",
  };
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(userLogin(data, navigate));
  };

  return (
    <>
      <h1>Login Screen</h1>
      <button onClick={() => handleLogin()}>Submit</button>
    </>
  );
};

export default Login;
