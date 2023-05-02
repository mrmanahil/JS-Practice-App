import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FirstComp = () => {
  const cleanupFunction = () => console.log("Cleanup Function Called");
  useEffect(() => {
    console.log("Component mounted");

    // Return a cleanup function
    return () => {
      // This function will be called when the component is unmounted
      console.log("Component unmounted");
      cleanupFunction();
    };
  }, []);
  const navigate = useNavigate();
  return (
    <h1 className="text-center" onClick={() => navigate("/about")}>
      First Component
    </h1>
  );
};

export default FirstComp;
