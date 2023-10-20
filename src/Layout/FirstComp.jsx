import React, { Fragment } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web_Push_Notifications from "../Web_Push_Notifications";
import csvtojson from "csvtojson";

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

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const csvText = e.target.result;
      const jsonArray = await csvtojson().fromString(csvText);

      // console.log(jsonArray); // Output the array of objects to the console
      jsonArray.map((item) => console.log(item));
    };

    reader.readAsText(file);
  };

  return (
    <Fragment>
      <h1 className="text-center" onClick={() => navigate("/about")}>
        First Component
      </h1>
      <Web_Push_Notifications />
      <input type="file" onChange={handleFileInputChange} />
    </Fragment>
  );
};

export default FirstComp;
