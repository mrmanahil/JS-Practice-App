import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Route";
import FirstComponent from "../Layout/FirstComp";
import SecondComponent from "../Layout/SecondComponent";

const Routing = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <Layout>
                <FirstComponent />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <SecondComponent />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <FirstComponent />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
