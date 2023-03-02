import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "./reducers/AuthReducers";

const reducer = {
  auth: Authreducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
