import React, { Fragment } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web_Push_Notifications from "../Web_Push_Notifications";

const FirstComp = () => {
  // const cleanupFunction = () => console.log("Cleanup Function Called");
  // useEffect(() => {
  //   console.log("Component mounted");

  //   // Return a cleanup function
  //   return () => {
  //     // This function will be called when the component is unmounted
  //     console.log("Component unmounted");
  //     cleanupFunction();
  //   };
  // }, []);
  const navigate = useNavigate();
  return (
    <Fragment>
      <h1 className="text-center" onClick={() => navigate("/about")}>
        First Component
      </h1>
      <Web_Push_Notifications />
    </Fragment>
  );
};

export default FirstComp;
