import React from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <h1>Dashboard Page</h1>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export default Dashboard;
