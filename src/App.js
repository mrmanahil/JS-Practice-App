import React, {
  Component,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./redux/Actions/actions";
import ReusableInput from "./ReusableComp/ReusableInput/ReusableInput";
import axios from "axios";
import { fetchData } from "./redux/Actions/customer.action";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import "./index.css";
import SingleSelect from "./MuiSelectComp/SingleSelect";
import MultiSelect from "./MuiSelectComp/MultiSelect";
import Test from "./Test";
import { JsonContext } from "./Context/JsonContext";
import { toast } from "react-toastify";
import Routing from "./Navigations/Routing";
import { login } from "./reduxtoolkit/reducers/AuthReducers";
import { numify } from "numify";
import { InstagramEmbed } from "react-social-media-embed";
import SocketExample from "./socketExample";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import WithOutControllingBrowser from "./Subtitles_On_Video/WithOutControllingBrowser";
import WithControlling_Browser from "./Subtitles_On_Video/WithControlling_Browser";
import Calendar from "./Calender";
import PhoneWithCountryCodeIcon from "./PhoneWithCountryIconInput";
import LiveVideoSdk from "./LiveVideoSdk";
import http from "./http";
import UseFieldArray from "./UseFieldArray";
import DoubleClickToOpenInputToUpdate from "./DoubleClickToOpenInputToUpdate";
import ReactDraggable from "./Draggable";
import JavaScript from "./JavaScript";
import Video from "./Video";
import ReactIdleTimer from "./React_Idle_Timer";
import WebPushNotification from "./Web_Push_Notifications";

function App() {
  return (
    <>
      <JavaScript />
    </>
  );
}

export default App;
