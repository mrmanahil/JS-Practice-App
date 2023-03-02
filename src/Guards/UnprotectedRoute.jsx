import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const UnprotectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user || user === "undefined") {
      setIsLoggedIn(false);
      return navigate("/dashboard");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUser();
  }, [isLoggedIn]);
  return <>{isLoggedIn ? props.children : null}</>;
};
export default UnprotectedRoute;
