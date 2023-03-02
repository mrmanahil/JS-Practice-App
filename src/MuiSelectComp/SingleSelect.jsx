import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/Actions/customer.action";

const SingleSelect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = useSelector((State) => State.customers.data);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      getOptionLabel={(option) => option?.name}
      onChange={(e, item) => console.log(item)}
    />
  );
};

export default SingleSelect;
