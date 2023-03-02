import React, { createContext, useState } from "react";
import { JsonServices } from "./JsonServices";
export const JsonContext = createContext();

export const JsonProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchJson = async () => {
    JsonServices.getAll().then((response) => {
      setData(response.data);
    });
  };
  const values = {
    data,
    fetchJson,
  };
  return <JsonContext.Provider value={values}>{children}</JsonContext.Provider>;
};
