import { useForm } from "react-hook-form";
import React, { Component, useCallback, useContext, useEffect, useState } from "react";
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

function App() {
  // const first = () => console.log("First");
  // const cleanupFunction = () => console.log("Cleanup function called");

  // let array = [1,2,3,4,5]
  // expected output = [[1,2],[3,4],[5]]
  // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let result = array
  //   .slice(0, Math.ceil(array.length / 2))
  //   .map((_, i) => array.slice(i * 2, i * 2 + 2));

  // console.log(result); // [[1,2],[3,4],[5]]

  // React.useMemo(() => {
  //   console.log("i am running");
  // }, []);

  // const [test, setTest] = useState(false);
  // const id = "123";

  // React.useMemo(() => {
  //   console.log("i am running");
  // }, [id]);

  // console.log(test);

  // const [count, setCount] = useState(0);

  // const inc = () => setCount(count + 1);
  // const dec = () => setCount(count - 1);

  // for (let a = 1; a <= 100; a = a + 10) {
  //   document.write(a, "<br />");
  // }

  // let array = [1, 2, 3];
  // array.length = 0;
  // array.push(1);
  // console.log(array);

  // let array = ["first", "second"];
  // console.log(array);
  // console.log(typeof array);

  // let a = "Hello";
  // console.log(a);
  // a = 5;
  // console.log(a);
  // a = 6;
  // a = 8;
  // console.log(a);

  // const dispatch = useDispatch();
  // setInterval(() => {
  //   // console.log("TEST");
  //   // dispatch(fetchData());
  // }, 2000);
  // let data = useSelector((state) => state.customers.data);
  // console.log(data);

  // const array = ["F", "Se", "Thi", "Four"];
  // array.map((item) => {
  //   console.log(item.length);
  // });

  // const array = [1, 2, 3, 4, 5, 6];
  // array.reduce((a, b) => {
  //   console.log(a + b);
  // });
  // array.reduce((preVal, currVal, currIndex) => {
  //   console.log(preVal, "preVal");
  //   console.log(currVal, "currVal");
  //   console.log(currIndex, "currIndex");
  // });

  // var realArray = ["a", "b", "c"];
  // realArray.forEach((item) => {
  //   if (item.includes("a")) {
  //     let includeItem = item;
  //     console.log(includeItem);
  //   }
  // });

  //Array to String Conversion

  // var realArray = ["a", "b", "c"];
  // let convertedArray = realArray.toString();
  // console.log(convertedArray);

  // let value = "banana";
  // switch (value) {
  //   case "apple":
  //     return console.log("Hi Apple Is Run");
  //   case "banana":
  //     return console.log("Hi Banana Is Run");
  //   case "orange":
  //     return console.log("Hi Orange Is Run");
  //   default:
  //     return console.log("Hi grapes Is Run");
  // }

  // var a = 2;
  // return a === 1 ? alert("Hey, it is 1!") : 0;

  // var a = 0;
  // var str = "not a";
  // var b = "";
  // b = a === 0 ? ((a = 1), (str += " test")) : (a = 2);
  // console.log(b);

  // class Test extends Component {
  //   first = (param) => {
  //     return param + " This Is The First Function Return";
  //   };
  //   second = () => {
  //     return "This Is The Second Function Return";
  //   };
  // }

  // const test = new Test();
  // console.log(test.first("Hello"));

  // let test = (param) => {
  //   return param || "DEFAULT";
  // };
  // console.log(test(0));

  // var foo = function (val) {
  //   // if val evaluates to falsey, 'default' will be returned instead.
  //   return val || "default";
  // };

  // console.log(foo());

  // const obj = {
  //   first: "FIRST",
  //   second: "SECOND",
  //   third: "THIRD",
  // };
  // console.log(obj.val || "Nothing");

  // let x = "1";
  // let y = 2;
  // console.log(typeof x);
  // console.log(typeof y);
  // console.log(x.valueOf());

  // console.log("Hello World");

  // let date = new Date();
  // console.log(date.toDateString());

  // var unitlist = ["", "K", "M", "G"];
  // function formatnumber(number) {
  //   let sign = Math.sign(number);
  //   let unit = 0;

  //   while (Math.abs(number) > 1000) {
  //     unit = unit + 1;
  //     number = Math.floor(Math.abs(number) / 100) / 10;
  //   }
  //   console.log(sign * Math.abs(number) + unitlist[unit]);
  // }
  // console.log(formatnumber(10000));

  // console.log(numify(10000000000));

  // const [number, setNumber] = useState(null);
  // useEffect(() => {
  //   // Change the Number as per your choice
  //   setNumber(numify(1000000));
  // }, []);
  // console.log(number);

  // Convert Count To KViews

  //   function kFormatter(num) {
  //     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  // }
  // kFormatter(1000)

  // Replace String

  // var string = "Hello, World!";
  // console.log(string.replace("World", "My Friend"));

  // lastIndexOf Method

  // var string = "Hello, World!";
  // console.log(string.lastIndexOf("!"));
  // console.log(string.lastIndexOf("e"));

  // toString Method

  // var b10 = 12;
  // console.log(typeof b10.toString());

  // Slice Method

  // var s = "0123456789abcdefg";
  // console.log(s.slice(1, 4));

  // var aString = "my string";
  // var anInt = 5;
  // var anObj = {};
  // // typeof aString === "string"; // true
  // // typeof anInt === "string"; // false
  // console.log(typeof anObj === "null");

  // let string = "one, two, three, four, five";
  // let array = string.split(", ");
  // let str = array.join(", ");
  // console.log(str.split(",").join(","));

  // let string = "one, two, three, four, five";
  // console.log(string.split(", "));

  // var arr = ["bananas", "cranberries", "apples"];
  // console.log(arr.sort());

  // function add(a, b) {
  //   return a + b;
  // }
  // console.log(add(100000, parseInt("100000")));

  // function add(a, b) {
  //   return a + b;
  // }
  // console.log(add(100000, eval("100000")));

  // function add(a, b) {
  //   return a + b;
  // }
  // console.log(add(100000, Number("100000")));

  // const dispatch = useDispatch();
  // const data = {
  //   email: "superAdmin@admin.com",
  //   password: "12345678",
  // };

  // const handleLogin = () => {
  //   dispatch(login(data));
  // };

  // const store = useSelector((state) => state.auth);
  // console.log(store);

  // Convert Array Of String To String

  // let array = ["first", "second", "third", "fourth", "fifth"];
  // const [one, two, three, ...all] = array;
  // // array.map((item) => console.log(`${item}`));
  // array.map((item) => console.log(item));

  // var a = 5,
  //   b = --a,
  //   c = a;
  // console.log(a);
  // console.log(c);

  // for (var i = 42; i > 0; --i) {
  //   console.log(i);
  // }

  // Finding out the maximum value of an array

  // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 110];
  // console.log(Math.max(...arr));
  // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.log(Math.max.apply(Math, arr));
  // console.log(Math.min.apply(Math, arr));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // let data = useSelector((state) => state.customers.data);
  // // console.log(data);
  // const filteredData = data.filter((item) => item.name === "Leanne Graham");
  // console.log(filteredData);

  // const apiKey = "uU5NIJL2iNG-kfEtj";
  // const apiURL = "https://api.emailjs.com/api/v1.0/email/send" + apiKey;
  // const sendEmailValidationRequest = async (email) => {
  //   try {
  //     const response = await fetch(apiURL + "&email=" + email);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // RANDOM NO MAX AND MIN RANGE

  // let randomNo = (Math.random() * (10 - 1) + 1).toFixed();
  // console.log(randomNo);

  // for (let i = 0; i < 10; i++) console.log(i);

  // for (let i = 0; i < 42; i++) {
  //   console.log(i);
  // }

  // let a = 1;
  // let b = ++a;
  // let c = a;
  // console.log(a);

  // let a = 1;
  // let b = a++;
  // console.log(b);
  // let a = 1;
  // let b = ++a;
  // console.log(b);

  // let a = "6.66666666666";
  // console.log(parseInt(a).toFixed(5));

  // console.log(Math.floor(2.9));
  // console.log(Math.ceil(2.5));
  // console.log(Math.round(2.5));

  // console.log(typeof Error());

  // let student = {
  //   name: "Syed Manahil",
  //   // age: "25",
  //   // age: 25,
  //   age: parseInt("25"),
  // };
  // // console.log(student.uni);
  // console.log(typeof student.age);

  // let val;
  // console.log(val);

  // let a = "6565";
  // let converted = Number(a);
  // console.log(typeof converted);
  // console.log(typeof Number(a));

  // var a = null;

  // console.log(a === null);

  // console.log(typeof null);
  // console.log(typeof undefined);

  // var myArray = [];
  // myArray = ["This", "Is", "For", "Testing"];
  // console.log(myArray[0]);

  // let nullData = null;
  // console.log(nullData);

  // let data = "";
  // console.log(data);

  // var number1 = 5;
  // number1 = 3;
  // number1 = number1 + 5; // 3 + 5 = 8
  // number1 = number1 - 6; // 8 - 6 = 2
  // var number2 = number1 * 10;
  // console.log(number1);

  // const testing = () => {
  //   let test = prompt("Are you sure you want to delete this");
  //   if (test === "ok") {
  //     toast.success("Deleted");
  //   } else {
  //     toast.error("Failed");
  //   }
  // };

  // useEffect(() => {
  //   var age = prompt("How old are you?");
  //   console.log(age);
  // }, []);

  //  PERCENT S

  // var greet = "Hello",
  //   who = "World";
  // console.log("%s: %s!", greet, who);

  // const { data, fetchJson } = useContext(JsonContext);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchJson();
  //   // dispatch(fetchData());
  // }, []);
  // console.log(data, "Context");
  // const redux = useSelector((state) => state.customers.data);
  // console.log(redux, "REDUX");

  // const data = [1, 2, 3, 4, 5, 6];
  // const filteredData = data.filter((item) => item > 3);
  // const obj = { ...filteredData };
  // console.log(obj);
  // console.log(filteredData);
  // const object = Object.assign({}, filteredData);
  // console.log(object);
  // const json = JSON.stringify(object);
  // console.log(json);

  // const profile = {
  //   firstName: "Robin",
  //   lastName: "Wieruch",
  // };
  // const address = {
  //   country: "Germany",
  //   city: "Berlin",
  //   code: "10439",
  // };
  // const allData = {
  //   ...profile,
  //   age: "24",
  //   ...address,
  // };
  // console.log(allData);

  // var items = [1, 2, 3, 4];
  // for (let i = 0; i < items.length; i++) {
  //   console.log(items[i]);
  // }

  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }

  // let test = 12.1;
  // console.log(Math.ceil(test));

  // let test = Date.now();
  // console.log(test);

  //       B A T T E R Y       C H A R G I N G       O R      D I S C H A R G I N G

  // navigator.getBattery().then((batChar) => {
  //   if (batChar.charging) {
  //     console.log("BATTERY IS CHARGING");
  //   } else {
  //     console.log("BATTERY IS DISCHARGING");
  //   }
  // });

  //       B A T T E R Y       P E R C E N T

  // navigator.getBattery().then((batteryPerc) => {
  //   console.log(`YOUR BATTERY IS ${batteryPerc.level * 100 + "%"}`);
  // });

  // const obj1 = {},
  //   obj2 = {};
  // const weakmap = new WeakMap([[obj1, 7]]);
  // console.log(weakmap.get(obj1));

  // const o1 = { a: 1, b: 2 },
  //   o2 = {};
  // const weakmap = new WeakMap([
  //   [o1, true],
  //   [o2, o1],
  // ]);
  // console.log(weakmap.get);

  // let object = {};
  // console.log(object);

  // const a = "hello",
  //   b = "World";
  // console.log(a, b);

  // let a;
  // console.log(a);

  // class Services {
  //   data = () => {
  //     return "FIRST";
  //   };
  //   Seconddata = () => {
  //     return "Second";
  //   };
  // }
  // const services = new Services();
  // console.log(services.data());
  // console.log(services.Seconddata());

  // const usDateTimeFormatting = new Intl.DateTimeFormat("en-US");
  // const usDate = usDateTimeFormatting.format(new Date("2016-07-21"));
  // const usDate = usDateTimeFormatting.format(new Date());
  // console.log(usDate);

  // console.log([1, 2, 3].join());

  // console.log([1, 2, 3].map((n) => n + 1));
  // function a() {
  //   console.log(b()); // 2
  // }
  // function b() {
  //   console.log(1); // 3
  // }
  // a();

  // const target = { a: 1, b: 2 };
  // const source = { b: 4, c: 5 };

  // const returnedTarget = Object.assign(target, source);
  // console.log(returnedTarget);

  // var testOne = "good";
  // var testTwo = "very good";
  // var testThree = "excellent";
  // if (testOne && testTwo && testThree) {
  //   console.log("FINE");
  // } else {
  //   console.log("Not Fine");
  // }

  // const colorData = [
  //   {
  //     colorName: "red",
  //   },
  //   {
  //     colorName: "green",
  //   },
  //   {
  //     colorName: "blue",
  //   },
  //   {
  //     colorName: "yellow",
  //   },
  // ];
  // const [params, setParams] = useState();

  // const test = (param) => {
  //   switch (param) {
  //     case param:
  //       setParams(param);
  //     // param === "red";
  //     // console.log("aaaaaa", (param = "red"));
  //     // break;
  //     // case (param = "green"):
  //     //   // param === "green";
  //     //   console.log("green");
  //     // // break;
  //     // case (param = "blue"):
  //     //   // param === "blue";
  //     //   console.log("blue");
  //     // // break;
  //     // case 3:
  //     //   // param = "yellow";
  //     //   console.log("yellw");
  //     //   break;
  //     // default:
  //     //   return console.log("error");
  //   }
  // };
  // console.log(params);

  // var workerFn = function () {
  //   console.log("I was run");
  // };
  // workerFn();

  // class bar {
  //   first(param) {
  //     console.log(param);
  //   }
  // }
  // const test = new bar();
  // test.first("TEST");

  // const foo = (param) => console.log(param + 2);
  // foo(2);

  // let obj = {
  //   name: "Manahil",
  //   age: 24,
  //   semester: "Last",
  //   graduate: true,
  // };
  // const { name: firstName, age: old, semester, graduate: yes } = obj;
  // console.log(firstName, old, semester, yes);

  // const array = ["First", "Second", "Third", "Fourth"];
  // const [a, b, , d] = array;
  // console.log(a, b, d);

  // const [field, setField] = useState("");
  // let websocketHost =
  //   "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";
  // var ws = new WebSocket(websocketHost);
  // // console.log(ws);
  // // var buffer = new ArrayBuffer(5); // 5 byte buffer
  // // var bufferView = new DataView(buffer);
  // // bufferView.setFloat32(0, Math.PI);
  // // bufferView.setUint8(4, 127);
  // // ws.binaryType = "arraybuffer";
  // ws.onmessage = function (message) {
  //   console.log(message || "HELLO");
  //   // var view = new DataView(message.data);
  //   // console.log("Uint8:", view.getUint8(4), "Float32:", view.getFloat32(0));
  // };
  // // ws.onopen = function () {
  // //   ws.send(buffer);
  // // };

  // const handleSubmit = () => {
  //   ws.onmessage((message) => {
  //     console.log(message);
  //   });
  // ws.onopen = function () {
  //   //send is used to send the message to server
  //   ws.send(value);
  // };
  // };

  // sessionStorage.setItem("Hello", "TEST");
  // console.log(sessionStorage.getItem("Hello"));

  // localStorage.year = 2017;
  // console.log(typeof localStorage.year);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state.customers.data);

  // localStorage.JSON_DATA = JSON.stringify(data[0]);
  // const { email, website } = JSON.parse(localStorage.JSON_DATA);
  // console.log(email, website);

  // localStorage.Hello = 123;
  // const get = localStorage.Hello;
  // console.log(get);

  // localStorage.greet = "Hi";
  // const get = localStrorage.getItem("greet");
  // console.log(get);

  // let user = {
  //   name: "John Smith",
  //   id: 10,
  //   email: "johns@workcorp.com",
  // };
  // const { name: userName, id: userId } = user;
  // console.log(userName);
  // console.log(userId);

  // var a = 1;
  // var b = 3;
  // [a, b] = [b, a];
  // console.log(a);

  // var arr = [1, 2, { a: 3 }, 4];
  // let [a, b, { a: test }, d] = arr;
  // console.log(a, b, test, d);

  // var obj = {
  //   a: 1,
  //   b: [2, 3],
  // };
  // const {
  //   a: test,
  //   b: [testing, TESTING],
  // } = obj;
  // console.log(TESTING);

  // var arr = [1, 2, [3, 4], 5];
  // const [a, , b, , d] = arr;
  // console.log(b);
  // console.log(d);

  // var obj = {
  //   a: {
  //     c: 1,
  //     d: 3,
  //   },
  //   b: 2,
  // };
  // const {
  //   a: { c: x },
  //   b: test,
  // } = obj;
  // console.log(x);
  // console.log(test);

  // let array = ["First", "Second", "Third", "Fourth"];
  // const test = ([...param]) => {
  //   console.log(param);
  // };
  // test(array);

  // let person = {
  //   name: "Hello",
  //   age: 25,
  // };
  // const greeting = ({ name, age }) => {
  //   console.log(`${name} My Name Is Manahil I Am ${age} Years old`);
  // };
  // greeting(person);

  // let person = {
  //   name: "Hello",
  //   age: 25,
  // };
  // const { phone: phone = "1355665" } = person;
  // console.log({ ...person, phone });

  // let person = {
  //   name: "Bob",
  //   age: 25,
  // };
  // const { name: hello } = person;
  // console.log(hello);

  // let person = {
  //   name: "Bob",
  //   age: 25,
  // };
  // const { age, name } = person;
  // console.log(age, name);

  // const array = ["First", "Second", "Third", "Fourth", "Fifth"];
  // console.log(array.join());

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  // const state = useSelector((state) => state.customers.data);

  // let test = "Hello Earth From Mars";
  // console.log(test.split(" "));

  // const array = ["First", "Second", "Third"];
  // console.log(array.join(""));

  // const [a, b, c] = array;
  // console.log(a);

  // var x = 4;
  // let y = 7;

  // console.log(x);
  // console.log(y);

  // var x = 1;

  // const test = () => {
  //   x = 3;
  //   console.log(x);
  // };
  // test();

  // function makeCounter() {
  //   var counter = 0;
  //   return {
  //     value: function () {
  //       return counter;
  //     },
  //     increment: function () {
  //       counter++;
  //     },
  //   };
  // }
  // var a = makeCounter();
  // var b = makeCounter();
  // a.increment();
  // console.log(a.value());
  // console.log(b.value());

  // const foo = () => {
  //   var counter = 0;
  //   return {
  //     value: () => {
  //       return counter;
  //     },
  //     increment: () => {
  //       return counter++;
  //     },
  //   };
  // };
  // let a = foo();
  // console.log(a.increment());

  // };
  // let a = foo().value();
  // let b = foo().increment();
  // console.log(a, b);
  // console.log(a.value());
  // console.log(b.increment());

  // function foo() {
  //   var x = 4;
  //   function bar() {
  //     console.log(x);
  //   }
  //   return bar;
  // }
  // foo();
  // var barWithX = foo();
  // barWithX();

  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   credentials: "include",
  // }).then((res) => {
  //   res.json().then((json) => {
  //     console.log(json);
  //   });
  // });

  // fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
  //   res.json().then((json) => {
  //     console.log(json);
  //   });
  // });

  //         GET    THE    VALUE   OF   ARRAY    OF    STRING

  // const data = ["First", "Second", "Third", "Fourth", "Fifth"];
  // data.map((item) => {
  //   if (item === "Third") {
  //     console.log(item);
  //   }
  // });

  // const [field, setField] = useState("");

  // const handleSubmit = () => {
  //   console.log(field.split(" "));
  // };

  // const test = (params) => {
  // switch (params) {
  //   case `Hello`:
  //     return console.log("Hello");
  //   case `World`:
  //     console.log(params);
  //     return console.log("World");
  //   default:
  //     return console.log("OK");
  // }
  // };

  // useEffect(() => {
  //   test("World");
  // }, []);

  // const typeDefs = gql`
  //   type Query {
  //     greet: String
  //   }
  // `;

  // const resolvers = {
  //   Query: {
  //     greet: () => "Hello World",
  //   },
  // };

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  // });
  // server.listen().then(({ url }) => {
  //   console.log("Server Is Ready At " + url);
  // });

  // var data =
  //   "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACN" +
  //   "byblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHx" +
  //   "gljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
  // let chars = atob(data);
  // console.log(chars);
  // var array = new Uint8Array(chars.length);
  // console.log(array);

  // const [file, setFile] = useState();
  // const [previewImage, setPreviewImage] = useState();
  // console.log(file);
  // var reader = new FileReader();
  // console.log(reader);
  // function ArrayBufferToBinary(buffer) {
  //   // Convert an array buffer to a string bit-representation: 0 1 1 0 0 0...
  //   var dataView = new DataView(buffer);
  //   var response = "",
  //     offset = 8 / 8;
  //   for (var i = 0; i < dataView.byteLength; i += offset) {
  //     response += dataView.getInt8(i).toString(2);
  //   }
  //   return response;
  // }
  // reader.onload = (file) => {
  //   console.log(file);
  //   var data = event.target.result;
  //   console.log(ArrayBufferToBinary(data));
  // };
  // reader.readAsArrayBuffer(file);

  // var num = 1234567.89,
  //   formatted;
  // console.log(num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // let data = useSelector((state) => state.customers.data);
  // console.log(typeof data);

  // console.log(window.history);
  // console.log(navigator.appName);
  // console.log(navigator.language);
  // console.log(navigator.platform);
  // console.log(navigator.appVersion);
  // console.log(navigator.cookieEnabled);

  // var name = prompt("What's your name?", " Name...");
  // console.log("Hello, " + name);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state.customers.data);
  // console.log(data);

  // let name = "Manahil";
  // console.log(name != "Hello");

  // let a = +"36";
  // console.log(a);
  // console.log(typeof a);

  // var foo = 1;
  // delete foo;
  // console.log(foo);

  // let cars = [
  //   {
  //     color: "purple",
  //     type: "minivan",
  //     registration: new Date("2017-01-03"),
  //     capacity: 7,
  //   },
  //   {
  //     color: "red",
  //     type: "station wagon",
  //     registration: new Date("2018-03-03"),
  //     capacity: 5,
  //   },
  // ];

  // cars.map((item) => {
  // console.log(item);
  // console.log(cars.filter((item) => item.color !== "red"));
  // if (item.color === "red") console.log(item.color !== "red");
  // });
  // console.log(cars);

  // let obj = {
  //   name: "Manahil",
  //   age: 24,
  //   semester: "8th",
  // };
  // return delete obj.name, delete obj.semester;
  // console.log(obj);

  // console.log(typeof undefined);
  // console.log(typeof Null);
  // console.log(typeof Boolean);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // let data = useSelector((state) => state.customers.data);
  // delete data[(0, 1, 2, 3, 4, 5)];
  // console.log(data);
  // data.filter((item) => item.id > 5);
  // console.log(data);
  // data.filter((item) => console.log(item.id > 5));
  // console.log(data);
  // data.map(
  //   (item) => delete(item item.id > 5 )
  //   // (delete item.username === "Delphine" + delete item.username) ===
  //   // "Moriah.Stanton"
  // );
  // console.log(data);

  // let obj = {
  //   name: "Manahil",
  //   age: 24,
  // };
  // delete obj.name;
  // console.log(obj);

  // let t = Math.floor(new Date().getTime() / 1000);
  // console.log(t);

  // const map = new Map();
  // const map = new Map([
  //   [1, 2],
  //   [3, 4],
  // ]);
  // console.log(map.clear());
  // console.log(map);

  // const newSymbol = Symbol();
  // const anotherSymbol = Symbol("label");
  // // console.log(newSymbol);
  // console.log(anotherSymbol);

  // var ColorsEnum = { WHITE: 0, GRAY: 1, BLACK: 2 };
  // Object.freeze(ColorsEnum);
  // // Define the variable and assign a value
  // var color = ColorsEnum.BLACK;
  // // console.log(color);
  // if (color == ColorsEnum.BLACK) {
  //   console.log(color); // This will print "2"
  //   var ce = ColorsEnum;
  //   for (var name in ce) {
  //     if (ce[name] == ce.BLACK) console.log(name); // This will print "BLACK"
  //   }
  // }

  // var obj = {
  //   name: "Manahil",
  // };
  // Object.freeze(obj);
  // obj.name = "Noor";
  // console.log(obj);

  // const TestEnum = Object.freeze({
  //   One: 1,
  //   Two: 2,
  //   Three: 3,
  // });
  // var x = TestEnum.Two;
  // switch (x) {
  //   case TestEnum.One:
  //     console.log("111");
  //     break;
  //   case TestEnum.Two:
  //     console.log("222");
  // }

  //         J  S  O  N

  // var userJson = JSON.stringify({
  //   name: "John",
  //   car: new Car("red", "fast"),
  // });
  // console.log(userJson);

  // function replacer(key, value) {
  //   // Filtering out properties
  //   // console.log(key, value);
  //   if (typeof value === "string") {
  //     return;
  //   }
  //   // console.log(value);
  //   console.log(typeof value);
  // }
  // replacer("Hello", 123);

  // var jsonString = '[{"name":"John","score":51},{"name":"Jack","score":17}]';
  // // console.log(jsonString);
  // // console.log(JSON.parse(jsonString));
  // var data = JSON.parse(jsonString, function reviver(key, value) {
  //   return key === "name"
  //     ? console.log(value.toUpperCase(), "FIRST")
  //     : console.log(value, "SECOND");
  // });

  // fetch("https://dummyjson.com/products/1").then((res) => console.log(res));

  // const skin = { color: "blue" };
  // const skin = { color: "blue" };
  // const skin = { color: "blue" };
  // console.log(JSON.stringify(skin));

  // let str = "String";
  // console.log(JSON.stringify(str));

  // let obj = {
  //   a: "Value 1",
  //   b: "Value 2",
  // };
  // console.log(JSON.parse(obj));

  //        C   O   O   K   I   E   S

  // document.cookie = "name=John Doe";
  // // console.log(document.cookie);
  // function getCookie(name) {
  //   var cname = name + "=";
  //   var decodedCookie = decodeURIComponent(document.cookie);
  //   var ca = decodedCookie.split(";");
  //   for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) == " ") {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(cname) == 0) {
  //       return c.substring(cname.length, c.length);
  //     }
  //   }
  //   return "";
  // }
  // var user = getCookie("name");
  // function deleteCookie(name) {
  //   var d = new Date();
  //   d.setTime(d.getTime() - 60 * 60 * 1000);
  //   var expires = "expires=" + d.toGMTString();
  //   document.cookie = name + "=;" + expires + ";path=/";
  // }
  // let data = deleteCookie("name");
  // console.log(user);
  // function setCookie(cname, cvalue, exdays) {
  //   const d = new Date();
  //   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  //   let expires = "expires="+d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }
  // setCookie()

  // COOKIE_EXPIRES = new Date(Date.now() + 60000).toUTCString();
  // var COOKIE_NAME = "Example Cookie"; /* The cookie's name. */
  // var COOKIE_VALUE = "Hello, world!"; /* The cookie's value. */
  // var COOKIE_PATH = "/foo/bar";
  // var COOKIE_EXPIRES;
  // let any = (document.cookie +=
  //   COOKIE_NAME +
  //   "=" +
  //   COOKIE_VALUE +
  //   ";  expires =" +
  //   COOKIE_EXPIRES +
  //   "; path=" +
  //   COOKIE_PATH);
  // console.log(any);
  // console.log((COOKIE_NAME += COOKIE_VALUE));
  // document.cookie +=
  // console.log(COOKIE_NAME);

  // let check = new Date(Date.now() + 60000);
  // console.log(check);

  // alert(navigator.cookieEnabled);

  // if (navigator.cookieEnabled === false) {
  //   alert("Error: cookies not enabled!");
  // } else {
  //   alert("OK ENABLED");
  // }

  // console.log("string".match(/[i-n]+/));
  // console.log("string".match(/(r)[i-n]+/));

  // var re = /([0-9]+)[a-z]+/;
  // if (re.test("hello123")) {
  //   console.log("Yeah");
  // } else {
  //   console.log("Oh Not Found");
  // }

  // var re = /[a-z]+/;
  // if (re.test(32)) {
  //   console.log("Yes");
  // } else {
  //   console.log("No");
  // }
  // console.log(re.test(123));

  // if (re.test("foo")) {
  //   console.log("Match exists.");
  // }

  // var re = new RegExp(".*");
  // var re = new RegExp(".*", "gmi");
  // console.log(re);

  // var myObject = {
  //   foo: {
  //     bar: "data",
  //   },
  // };
  // console.dir(myObject);

  // console.clear();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state.customers.data);
  // console.table(data, ["address", "company"]);

  // console.error("Hello World");

  // console.log("%s has %d points", "Sam", 100);

  // console.log(new Date(0));

  // let data = { key1: "val", key2: ["one", "two"], key3: { a: 1, b: 2 } };
  // console.log(Object.keys(data));
  // console.log(Object.values(data));

  // console.log([0, 3, 32, "a string"].map((item) => item > 100));

  // var obj = { test: 1 };
  // console.log(["string"], 1, obj, window);

  // setTimeout(() => {
  //   console.log("HELLO");
  // }, 1000);

  // setTimeout(console.log("HELLO"), 1000);

  // function waitFunc() {
  //   console.log("This will be logged every 2 seconds");
  // }
  // var interval = setInterval(waitFunc, 2000);
  // setTimeout(() => {
  //   clearInterval(interval);
  // }, 10000);

  // setTimeout(function () {
  //   clearInterval(interval);
  // }, 10000);

  // function waitFunc() {
  //   console.log("This will be logged every 5 seconds");
  // }
  // setInterval(waitFunc, 2000);

  // function repeatingFunc() {
  //   console.log("It's been 5 seconds. Execute the function again.");
  //   setTimeout(repeatingFunc, 5000);
  // }
  // setTimeout(repeatingFunc, 1000);

  // function Vec(x = 0, y = 0) {
  //   this.x = x;
  //   this.y = y;
  //   // the new keyword implicitly implies the return type
  //   // as this and thus is chainable by default.
  // }
  // const vecs = new Vec();
  // console.log(vecs);

  // let obj = Object.create({ foo: "foo" });
  // let objTwo = Object.setPrototypeOf(obj, { bar: "bar" });
  // // console.log(obj.foo);
  // console.log(objTwo.bar);

  // let objInheritingObject = {};
  // let objInheritingNull = Object.create({
  //   name: "HELLO",
  //   where: "WORLD",
  // });
  // console.log(objInheritingNull);
  // console.log(objInheritingObject);

  // function Foo(id, name) {
  //   this.id = id;
  //   this.name = name;
  // }
  // var foo = new Foo(1, "foo");
  // console.log(foo.name);
  // return foo.name;

  // let expected = true;

  // function onSuccess() {
  //   console.log("Value was expected");
  // }
  // function onFailure() {
  //   console.log("Value was unexpected/exceptional");
  // }
  // function compare(actual, success, failure) {
  //   if (actual === expected) {
  //     success();
  //   } else {
  //     failure();
  //   }
  // }
  // function compareAsync(actual, success, failure) {
  //   setTimeout(() => {
  //     compare(actual, success, failure);
  //   }, 3000);
  // }
  // // compareAsync(true, onSuccess, onFailure);
  // compareAsync(false, onSuccess, onFailure);

  // const compare = (actual, success, failure) => {
  //   if (actual === expected) {
  //     success();
  //   } else {
  //     failure();
  //   }
  // };
  // compare(true, onSuccess, onFailure);
  // compare(false, onSuccess, onFailure);

  // [1, 2, 3, 4, 5].forEach((item) => console.log(item));

  // [1, 2, 3].map(function double(x) {
  //   console.log(2 * x);
  // });

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  // const data = useSelector((state) => state?.customers?.data);
  // data?.map((item) => {
  //   // console.log(item);
  //   // item.userInfo = {
  //   //   name: item?.name,
  //   //   companyName: item?.company?.name,
  //   //   email: item?.email,
  //   // };
  //   console.log(item);
  // });

  // const doingSomething = (done) => {
  //   console.log("Doing Something");
  //   done(doingSomethingElse);
  // };

  // const done = async (doingSomethingElse) => {

  //   // await setTimeout(() => {}, 2000);
  //   // // const res = await setTimeout(() => {
  //   // //   console.log("Done");
  //   // //   // console.log("Waiting");
  //   // // }, 2000);
  //   // doingSomethingElse();
  // };

  // const doingSomethingElse = () => {
  //   console.log("Doing Something Else");
  // };

  // doingSomething(done);

  // class Something {
  //   constructor(data) {
  //     this.data = data;
  //   }
  //   doSomething(text) {
  //     return {
  //       response: {
  //         data: this.data,
  //         // data: this.data,
  //         text,
  //       },
  //     };
  //   }
  // }
  // const something = new Something("Hello World");
  // const { response } = something.doSomething("This is a text, ");
  // const { text, data } = response;
  // console.log(text.trim(), data.trim());

  // class Queue {
  //   constructor() {
  //     const list = [];
  //     this.enqueue = function (type) {
  //       list.push(type);
  //       return type;
  //     };
  //     this.dequeue = function (...num) {
  //       // console.log(num);
  //       return list.shift(num);
  //     };
  //   }
  // }
  // const classes = new Queue();
  // console.log(classes.enqueue(10));
  // console.log(classes.dequeue(3, 2, 1), "SHIFT");

  // class practiceClass {
  //   dummyFunc(params) {
  //     return "Hello " + params;
  //   }
  //   dummyFunc2(params) {
  //     return params + " World ";
  //   }
  // }
  // const access = new practiceClass();
  // const response = access.dummyFunc("From Javascript");
  // // console.log(response);
  // console.log(access.dummyFunc2("Welcome To Javascript"));

  // class SuperClass {
  //   constructor() {
  //     this.logger = console.log;
  //   }
  //   log() {
  //     this.logger(`Hello ${this.name}`);
  //   }
  // }
  // class SubClass extends SuperClass {
  //   constructor() {
  //     super();
  //     this.name = "subclass";
  //   }
  // }

  // const subClass = new SubClass().log();

  // class MyClass {
  //   constructor(option) {
  //     console.log(`Creating instance using ${option} option.`);
  //     this.option = option;
  //   }
  // }
  // const foo = new MyClass("speedy");

  // let obj = { a: 0 };
  // const pure = (input) => {
  //   // Does not modify obj
  //   let output = input.a + 1;
  //   return output;
  // };

  // pure(obj);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  // const data = useSelector((state) => state.customers.data);
  // // console.log(data);
  // data.map((item) => {
  //   item.userInfo = {
  //     name: item.username,
  //     email: item.email,
  //     phone: item.phone,
  //   };
  //   console.log(data);
  // });

  // function iAmCallbackFunction() {
  //   console.log("callback has been invoked");
  // }
  // function iAmJustFunction(callbackFn) {
  //   // do some stuff ...
  //   // invoke the callback function.
  //   console.log("First");
  //   callbackFn();
  // }
  // // invoke your higher-order function with a callback function.
  // iAmJustFunction(iAmCallbackFunction);

  // var functionVariable;
  // hoistedFunction(); // works, because the function is "hoisted" to the top of its scope
  // functionVariable(); // error: undefined is not a function.
  // function hoistedFunction() {}
  // functionVariable = function () {};

  // var hash = getHashingFunction("sha1");
  // // ...
  // hash("Fred");
  // // return the function corresponding to the given algorithmName
  // function getHashingFunction(algorithmName) {
  //   // return a reference to an anonymous function
  //   if (algorithmName === "sha1")
  //     return function (value) {
  //       console.log(value);
  //     };
  //   // return a reference to a declared function
  //   else if (algorithmName === "md5") return md5;
  // }
  // function md5(value) {
  //   // ...
  // }

  // var a = getValue;
  // var b = a; // b is now a reference to getValue.
  // var c = console.log(b()); // b is invoked, so c now holds the value returned by getValue (41)
  // function getValue() {
  //   return 41;
  // }

  // Example 2
  // var hashAlgorithm = "sha1";
  // var hash;
  // if (hashAlgorithm === "sha1") hash = sha1Hash;
  // else if (hashAlgorithm === "md5") hash = md5Hash;
  // hash("Fred");
  // function md5Hash(value) {
  //   console.log(value);
  // }
  // function sha1Hash(value) {
  //   console.log(value);
  // }

  // var hashAlgorithm = "sha1";
  // var hash;
  // if (hashAlgorithm === "sha1")
  //   hash = function (value) {
  //     console.log(value);
  //   };
  // else if (hashAlgorithm === "md5")
  //   hash = function (value) {
  //     console.log(value);
  //   };
  // hash("Fred");

  // var name = "Cameron";
  // var spouse;
  // if (name === "Taylor") spouse = { name: "Jordan" };
  // else if (name === "Cameron") spouse = { name: "Casey" };
  // var spouseName = spouse.name;
  // console.log(spouseName);

  // var name = "bob",
  //   age = 18;
  // return "Hi, my name is " + name + ". " + "I'm " + age + " years old.";

  // let data = ["879", "sydif", "dsb", "asfi", "aafig"];

  // const func = (all) => {
  //   console.log(...all);
  // };
  // func(data);

  // var obj = {
  //   a: 2,
  //   b: 3,
  // };

  // var a = 2;
  // function myfunc(arg) {
  //   return (obj.a = 5);
  //   arg++;
  //   // console.log(arg);
  // }
  // obj.a = 200;
  // console.log(obj.a);
  // console.log((a = myfunc(a)));
  // console.log(obj.a);

  // function myfunc(arg) {
  //   arg++;
  //   return arg;
  // }
  // console.log(myfunc(1));

  // var num = 6;
  // const func = (arg) => {
  //   arg = 5;
  //   console.log(num);
  //   console.log(arg);
  //   return arg;
  //   // return (arg.firstNum = 5);
  // };
  // func(num);

  // console.log((object.firstNum = 5));
  // console.log(object.firstNum);

  //  const variable cannot be Changed
  // const obj = { a: 2 };
  // const a = 2;
  // function myfunc(arg) {
  //   return (arg.a = 5); // Note the assignment is to the parameter variable itself
  // }
  // function myfunct(a) {
  //   return (a = 5); // Note the assignment is to the parameter variable itself
  // }
  // console.log(myfunc(obj));
  // console.log(myfunct(a));
  // console.log(a);
  // console.log(obj.a);

  // var obj = { a: 2 };
  // function myfunc(arg) {
  //   return (arg = { a: 5 }); // Note the assignment is to the parameter variable itself
  // }
  // console.log(myfunc(obj));
  // console.log(obj.a);

  // let object = {
  //   firstFunc: () => {
  //     console.log("First Function");
  //   },
  //   secFunction: (param) => {
  //     console.log("Second Function " + param);
  //   },
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     object.secFunction("Is Called");
  //   }, 3000);
  // }, []);

  // let func = function (param) {
  //   return "Anonymous Function " + param;
  // };
  // console.log(func("param"));

  // var foo = function () {
  //   /*...*/
  // };
  // foo();

  // const logArguments = (...args) => console.log(args);
  // const list = [1, 2, 3];
  // logArguments("a", "b", "c", ...list);

  // var sumTwoNumbers = (a, b) => {
  //   return a + b;
  // };
  // console.log(sumTwoNumbers(1, 3));
  // sum(1, 3);

  // const names = ["bob", "alejandro", "zandra", "anna", "bob"];
  // const uniqueNames = new Set(names);
  // // console.log(uniqueNames);

  // for (const i of uniqueNames) {
  //   console.log(i);
  // }

  // const obj = [
  //   {
  //     name: "Manahil",
  //     age: 18,
  //   },
  // ];
  // for (let chr of obj) {
  //   console.log(chr.name);
  // }

  // const iterable = [0, 1, 2];
  // for (let i of iterable) {
  //   console.log(i);
  // }

  // for (var i = 1000; i >= 0; i--) {
  //   console.log(i);
  // }

  // for (var i = 0; i < 100; i += 2 /* Can also be: i = i + 2 */) {
  //   console.log(i);
  // }

  // useEffect(() => {
  // var array = ["a", "b", "c"];
  // for (var i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  // }
  // }, []);

  // for (var i = 0; i < 100; i++) {
  //   console.log(i);
  // }

  // var a,
  //   b,
  //   c = 2,
  //   d;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // (globalA = "1"), (globalB = "2");
  // let x,
  //   y = 5;
  // var person = "John Doe",
  //   foo,
  //   age = 14,
  //   date = new Date();
  // console.log(foo, age);

  // const obj = {
  //   one: 1,
  //   two: 2,
  //   three: 3,
  // };
  // console.log(Object.entries(obj));

  // var x = { a: 10, b: 3 };
  // console.log(Object.keys(x));
  // console.log(Object.getOwnPropertyNames(x));

  // var obj = {
  //   a: "hello",
  //   b: "this is",
  //   c: "javascript!",
  // };
  // console.log(Object.keys(obj).map((item) => obj[item]));

  // let functionObject = {
  //   firstFunc: () => {
  //     setTimeout(() => {
  //       console.log("I am here after 2 seconds");
  //     }, 2000);
  //   },
  //   secondFunc: () => {
  //     setTimeout(() => {
  //       console.log("I am here after 5 seconds");
  //     }, 5000);
  //   },
  // };
  // useEffect(() => {
  //   functionObject.firstFunc();
  //   functionObject.secondFunc();
  // }, []);

  // let prevData = {
  //   fName: "Syed",
  //   lName: "Manahil",
  //   age: 24,
  //   email: "manahil.tanwir@oip.com.pk",
  // };
  // let newData = {
  //   companyName: "OIP",
  //   department: "Custom",
  //   language: "React JS",
  //   javascript: true,
  // };
  // console.log({ ...prevData, ...newData });

  // var existing = { a: 1, b: { c: 2 } };
  // let clone = JSON.parse(JSON.stringify(existing));
  // existing.b.c = 3;
  // console.log(clone, "clone clone clone");
  // console.log(existing, "existing existing existing");

  // const existing = { a: 1, b: 2, c: 3 };
  // let clone = Object.assign(existing);
  // clone = {
  //   name: "Manahil",
  //   age: 24,
  // };
  // console.log(existing, "existing existing existing");
  // console.log(clone, "clone clone clone");

  // var array = [1, 2, 3, 4, 5, 6, 7];
  // let object = {
  //   name: "Manahil",
  //   age: 24,
  // };
  // array.splice(7, 0, object);
  // console.log(array);

  // var array = [3, 4, 5, 6];
  // array.unshift(1, 2);
  // console.log(array);

  // const array = [
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   [11, 22, 33, [346, 463, 346, 235]],
  //   [55, 66, 77, 88],
  //   [10, 20, 30, 40],
  //   [10, 20, 30, "54"],
  // ];
  // let string = String(array).split(",").map(Number);
  // console.log(typeof string);

  // console.log(typeof string);
  // console.log(string);

  // let array = [1, 2, 3, 4, 5];
  // var minimum = Math.max(...array) + 1;
  // console.log(minimum);

  // const array = [
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   [11, 22, 33],
  //   [55, 66, 77, 88],
  //   [10, 20, 30, 40],
  //   ["ABC", "DEF", "GHI", "JKL"],
  // ];
  // const firstFunc = (array) => {
  //   return { ...array };
  // };
  // console.log(firstFunc(array));

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state.customers.data);
  // // console.log(data);
  // let obj = {
  //   address: {
  //     city: "Gwenborough",
  //   },
  //   geo: { lat: "-37.3159", lng: "81.1496" },
  //   street: "Kulas Light",
  //   suite: "Apt. 556",
  //   zipcode: "92998-3874",
  //   company: {
  //     bs: "harness real-time e-markets",
  //     catchPhrase: "Multi-layered client-server neural-net",
  //     name: "Romaguera-Crona",
  //   },
  //   email: "Sincere@april.biz",
  //   id: Math.max(...data.map((item) => item.id + 1)),
  //   name: "Leanne Graham",
  //   phone: "1-770-736-8031 x56442",
  //   username: "Bret",
  //   website: "hildegard.org",
  // };
  // let objTwo = {
  //   address: {
  //     city: "Karachi",
  //   },
  //   geo: { lat: 37, lng: 81 },
  //   street: "Korangi",
  //   suite: 556,
  //   zipcode: 92998,
  //   company: {
  //     bs: "harness real-time e-markets",
  //     catchPhrase: "Multi-layered client-server neural-net",
  //     name: "Romaguera-Crona",
  //   },
  //   email: "Sincere@april.biz",
  //   id: Math.max(...data.map((item) => item.id + 2)),
  //   name: "Leanne Graham",
  //   phone: "1-770-736-8031 x56442",
  //   username: "Bret",
  //   website: "hildegard.org",
  // };
  // useEffect(() => {
  //   data.splice(10, 0, obj, objTwo);
  //   console.log(data);
  // }, [data]);

  // let data = {
  //   one: {
  //     two: 3,
  //     four: [5, 6, 7],
  //   },
  //   eight: {
  //     nine: {
  //       ten: 11,
  //     },
  //   },
  // };
  // console.log(Object.keys(data).toString());

  // console.log([1, 800, 555, 1234].join("/"));

  // let object = {
  //   hello: "Hello",
  //   world: "            World",
  // };
  // let values = Object.values(object).map((item) => item.trim());
  // console.log(typeof values);
  // console.log(values);
  // let data = Object.assign({}, values);
  // console.log(data);

  // console.log(["Hello", " ", "world"].join(""));

  // const cars = [1, 2, 3.4, 457, 325, 236, 46, 45745, 785, 473];
  // console.log(Math.min(...cars));
  // console.log(Math.max(...cars));

  // var array = [1, 2, 3, 4, 5];
  // array = [];
  // console.log(array);

  // var array = [1, 2, 3, 4, 5];
  // array = [1, 2, 3, 4, 5];
  // array.length = 2;
  // console.log(array);

  // var array = [1, 2, 3, 4, 5];
  // console.log(array.length); // 5
  // delete array[2];
  // console.log(array);

  //   var array = [1, 2, 3, 4];
  // array.splice(2);
  // console.log(array);

  // var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // array.splice(
  //   6 /* from which index */,
  //   2 /* how many item you want to remove */
  // );
  // console.log(array);

  // var array = [1, 2, 3];
  // array.pop();
  // console.log(array);

  // var array = [1, 2, 3, 4];
  // array.push({ name: "Hello" });
  // console.log(array);

  // function get1DArray(dArr) {
  //   console.log(...dArr);
  //   //concatenate each element of the input into a 1D array, and return the output
  //   //what would be the best way to implement this function?
  // }

  // var arrToConvert = [
  //   [0, 0, 1],
  //   [2, 3, 3],
  //   [4, 4, 5],
  // ];

  // get1DArray(arrToConvert); //print the converted array
  // arr1d = [].concat(...arr2d);

  // var arr1 = ["a", "b"];
  // var arr2 = ["e", "f"];
  // var arrConc = arr1.concat("c", "d", arr2);
  // console.log(arrConc);

  // var array = ["a", "b"];
  // var arrConc = array.concat("c", "d");
  // console.log(arrConc);

  // var array1 = ["a", "b"],
  //   array2 = ["c", "d"],
  //   array3 = ["e", "f"],
  //   array4 = ["g", "h"];
  // // var arrConc = array1.concat(array2, array3, array4);
  // var arrConc = [...array1, ...array2, ...array3, ...array4];
  // console.log(arrConc);

  // let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // let [firstVal, secVal, thirdVal, fourthVal, ...lastVal] = array;
  // console.log(lastVal, firstVal);

  // console.log(["s", "t", "a", "o", "v", "r", "o"].sort());

  // var date1 = new Date();
  // console.log(date1.toJSON());

  // var checkoutDate = new Date(); // Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
  // checkoutDate.setDate(checkoutDate.getDate());
  // console.log(checkoutDate);

  // console.log(new Date().getTime());

  // var milliseconds = new Date().getMilliseconds();
  // console.log(milliseconds);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state.customers.data);
  // data.map((item) => {
  //   item.userInfo = {
  //     name: item.name,
  //     email: item.email,
  //     companyName: item.company.name,
  //   };
  //   console.log(item);
  // });

  // var year = new Date().getFullYear();
  // console.log(year);

  // let obj = {
  //   firstFunc: (param) => {
  //     console.log(param);
  //   },
  //   secondFunc: (param) => {
  //     console.log(param);
  //   },
  //   thirdFunc: (param) => {
  //     console.log(param);
  //   },
  // };

  // var x = { a: 10, __proto__: { b: 10 } },
  //   props;
  // props = Object.keys(x);
  // console.log(typeof x.__proto__);

  // var x = { a: 10, b: 3 },
  //   props;
  // props = Object.keys(x);
  // console.log(props);

  // var obj = { foo: "foo", first: "First", sec: "Second" };
  // console.log(Object.keys(obj));
  // console.log(Object.values(obj));

  // var obj = { foo: "foo", first: "First", sec: "Second" };
  // var array = Object.keys(obj).map((item) => {
  //   return item;
  // });
  // console.log(typeof array);

  // var obj = {
  //   foo: "foo",
  //   bar: function () {
  //     return "bar";
  //   },
  // };
  // console.log(obj.bar());

  // let multipleFunctions = {
  //   firstFunc: function (firstParam, secondParam) {
  //     return `${firstParam} FIRST ${secondParam}`;
  //   },
  //   secondFunction: () => {
  //     return "THIS IS THE SECOND FUNCTION!";
  //   },
  //   thirdFunction: () => {
  //     return "THIS IS THE THIRD FUNCTION!";
  //   },
  // };
  // console.log(
  //   multipleFunctions.firstFunc("THIS IS THE", "FUNCTION!"),
  //   multipleFunctions.secondFunction()
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state?.customers?.data);
  // // console.log(data);
  // data.map((item) => {
  //   // console.log(item);
  //   item.userInfo = {
  //     name: item.name,
  //     email: item.email,
  //     phone: "321pillay",
  //     address: "D189",
  //     companyName: item.company.name,
  //   };
  //   console.log(item);
  // });

  // var anArray = ["zero.", "one."];
  // anArray.foo = "it works!";
  // console.log(anArray.foo);

  // var anObject = {
  //   foo: "bar",
  //   length: "interesting",
  //   0: "zero!",
  //   1: "one!",
  // };
  // var anArray = ["zero.", "one."];
  // console.log(anArray[1], anObject[0]);
  // console.log(anArray.length, anObject.length);
  // console.log(anArray.foo, anObject.foo);
  // console.log(anArray[0], anObject[0]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state.customers.data);
  // // console.log(data);
  // data.map((item) => {
  //   var user = {
  //     user: item.name,
  //   };
  //   Object.assign(item, { user });
  //   console.log(data[0]);
  // });

  // var user = {
  //   firstName: "John",
  // };
  // Object.assign(user, { lastName: "Doe", age: 39 });
  // console.log(user);

  // var obj = { 0: "a", 1: "b", 2: "c" };
  // Object.keys(obj).map(function (key) {
  //   console.log(key);
  // });
  // Object.keys(obj).map((item) => console.log(item));

  // let data = [
  //   { name: "alice", id: 111 },
  //   { name: "alice", id: 222 },
  // ];
  // const existing = { a: 1, b: 2, c: 3 };
  // let clone = Object.assign(data);
  // console.log(clone);

  // const existing = { a: 1, b: 2, c: 3 };
  // const clone = Object.assign({}, existing);
  // console.log(clone.a, clone.b, clone.c);

  // var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // console.log(arr.slice(4));

  // let data = [
  //   { name: "alice", id: 111 },
  //   { name: "alice", id: 222 }
  //  ];
  //  console.log();

  // var array = [1, 2, 3];
  // console.log(array.push(4, 5, 6));

  // var arrL1 = [1, 2, [3, 4]];
  // function flattenES6(arr) {
  //   console.log([].concat(...arr));
  // }
  // flattenES6(arrL1);

  // var array = [1, 2, 3, 4, 5];
  // console.log(array.length); // 5
  // delete array[2];
  // console.log(array); // [1, 2, undefined, 4, 5]
  // console.log(array.length);

  // var array = [1, 2, 3, 4];
  // console.log(array.splice(2));

  // var array = [1, 2, 3, 4];
  // console.log(array.splice(1, 2));

  // var array = [1, 2, 3];
  // console.log(array.pop());

  // var array = [1, 2, 3, 4];
  // console.log(array.shift());

  // var strArray = "StackOverflow".split("");
  // console.log(strArray.map((item) => item === "o"));
  // let buttons = [
  //   {
  //     btn: "first",
  //     id: 1,
  //   },
  //   {
  //     btn: "second",
  //     id: 2,
  //   },
  //   {
  //     btn: "first",
  //     id: 3,
  //   },
  //   {
  //     btn: "third",
  //     id: 4,
  //   },
  //   {
  //     btn: "fourth",
  //     id: 5,
  //   },
  //   {
  //     btn: "fifth",
  //     id: 6,
  //   },
  // ];

  // let people = [{ name: "bob" }, { name: "john" }];

  // people.find((item) => console.log(item.name));

  // [1, 2, 3, 4, 5].filter((item) => console.log(item >= 2));

  // function myFunction(a, b, ...rest) {
  //   console.log(rest);
  // }
  // myFunction(0, 1, 2, 3, 4, 5, 6);

  // let arr = [
  //   {
  //     name: "Usman",
  //     userName: "UsmanAli",
  //     email: "usman.ali@oip.com.pk",
  //   },
  //   {
  //     name: "Any",
  //     userName: "any",
  //     email: "any.ali@oip.com.pk",
  //   },
  //   {
  //     name: "One",
  //     userName: "one",
  //     email: "one.ali@oip.com.pk",
  //   },
  //   {
  //     name: "Two",
  //     userName: "two",
  //     email: "two.ali@oip.com.pk",
  //   },
  // ];

  // arr.map((item) => {
  //   item.info = {
  //     hello: "World",
  //     code: "First",
  //     last: "Last Code",
  //   };
  //   console.log(item);
  // });

  // let data = {
  // userDara: {
  //   name: "Usman",
  //   userName: "UsmanAli",
  //   email: "usman.ali@oip.com.pk",
  // },
  // };
  // console.log(...arr.map((item) => item.name));
  // let test = { ...arr, ...data };
  // console.log(test);
  // console.log(arr.map((item) => item.name));

  // let arr = [..."123456"];
  // console.log(arr.map((item) => parseInt(item)));

  // let arr = ["123456"];
  // console.log(arr.map((item) => item));

  // let arr = [1, 2, 3, ...[..."456"]];
  // console.log(arr.map((item) => parseInt(item)));

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  // const data = useSelector((state) => state?.customers?.data);
  // // console.log(data);
  // data.map((item) => {
  //   item.userInfo = {
  //   userDara: {
  //     name: item.name,
  //     userName: item.username,
  //     email: item.email,
  //   },
  // };
  //   console.log(item);
  // });

  // let array = [10, 30, 49, 68, 70];
  // let [firstVal, secVal, ...allVal] = array;
  // console.log(allVal);

  // let array = [10, 30, 49, 68, 70];
  // let [firstVal, secVal, thirdVal, fourthVal, fifthVal] = array;
  // console.log(secVal, thirdVal);

  // var numbers = [5, 32, 43, 4];
  // console.log(numbers.filter((item) => item >= 5));

  // var array = [
  //   {
  //     key: "one",
  //     value: 1,
  //   },
  //   {
  //     key: "two",
  //     value: 2,
  //   },
  //   {
  //     key: "three",
  //     value: 3,
  //   },
  // ];
  // array.reduce(function (obj, current) {
  //   obj[current.key] = current.value;
  //   console.log(obj);
  // }, {});

  // const arrayLike = {
  //   0: "Value 0",
  //   1: "Value 1",
  //   length: 2,
  // };

  // var realArray = Object.values(arrayLike);
  // console.log(realArray);

  // function func() {
  //   return arguments;
  // }
  // console.log(func(1, 2, 3));

  // var arrayLike = {
  //   0: "a",
  //   1: "b",
  //   2: "c",
  //   length: 3,
  // };

  // console.log(arrayLike);

  // var x = 11;
  // x == 10 && alert("x is 10");

  // const AnimalSays = {
  //   dog() {
  //     return "woof";
  //   },
  //   cat() {
  //     return "meow";
  //   },
  //   lion() {
  //     return "roar";
  //   },
  //   // ... other animals
  //   default() {
  //     return "moo";
  //   },
  // };

  // function makeAnimalSpeak(animal) {
  //   // Match the animal by type
  //   // console.log(animal);
  //   // console.log(AnimalSays[animal]);
  //   const speak = AnimalSays[animal] || AnimalSays.default;
  //   console.log(animal + " says " + speak());
  // }
  // console.log(makeAnimalSpeak("lion"));

  // const AnimalSays = {
  //   dog() {
  //     return "woof";
  //   },
  //   cat() {
  //     return "meow";
  //   },
  //   lion() {
  //     return "roar";
  //   },
  //   // ... other animals
  //   default() {
  //     return "moo";
  //   },
  // };
  // console.log(AnimalSays.default());

  // let i = 3;
  // if (i < 1) {
  //   console.log("i is smaller than 1");
  // } else {
  //   if (i < 2) {
  //     console.log("i is smaller than 2");
  //   } else {
  //     console.log("none of the previous conditions was true");
  //   }
  // }

  // let i = 0;
  // if (i < 1) {
  //   console.log("i is smaller than 1");
  // } else {
  //   console.log("i was not smaller than 1");
  // }

  // var x = "c";
  // switch (x) {
  //   case "a":
  //   case "b":
  //   case "c":
  //     console.log("Either a, b, or c was selected.");
  //     break;
  //   case "d":
  //     console.log("Only d was selected.");
  //     break;
  //   default:
  //     console.log("No case was matched.");
  //     break; // precautionary break if case order changes
  // }

  // function john() {
  //   return "Ja" + "ne";
  // }
  // const name = john();
  // console.log(name);
  // function jacob() {
  //   return "Jacob";
  // }
  // switch (name) {
  //   case john(): // Compare name with the return value of john() (name == "John")
  //     console.log('I will run if name === "John"');
  //     break;
  //   case "Ja" + "ne": // Concatenate the strings together then compare (name == "Jane")
  //     console.log('I will run if name === "Jane"');
  //     break;
  //   case john() + " " + jacob() + " Jingleheimer Schmidt":
  //     console.log("His name is equal to name too!");
  //     break;
  // }

  // var animal = "Lion";
  // switch (animal) {
  //   case "Dog":
  //     console.log('I will not run since animal !== "Dog"');
  //     break;
  //   case "Cat":
  //     console.log('I will not run since animal !== "Cat"');
  //     break;
  //   default:
  //     console.log("I will run since animal does not match any other case");
  // }

  // var value = "HELLO_WORLD";
  // switch (value) {
  //   case "HELLO_WORLD":
  //     console.log("I will always run");
  //     break;
  //   case 2:
  //     console.log("I will never run");
  //     break;
  // }

  // var value = 2;
  // switch (value) {
  //   case 1:
  //     console.log("I will always run");
  //     break;
  //   case 2:
  //     console.log("I will never run");
  //     break;
  // }

  // var animal = "kitty";
  // animal === "kitty" ? console.log("meow") : console.log("woof");

  // var animal = "kitty";
  // for (var i = 0; i < 5; ++i) {
  //   return animal === "kitty" ? console.log(i) : null;
  // }

  // var a = 1;
  // return a === 1 ? alert("Hey, it is 1!") : 0;

  // var a = 0;
  // var str = "not a";
  // var b = "";
  // b = a === 0 ? ((a = 1), (str += " test")) : (a = 2);
  // console.log(b, a);

  // let str = "not a";
  // console.log((str += " test"));

  // var a = 0;
  // var str = "not a";
  // var b = "";
  // b = a === 0 ? ((a = 1), (str += " test")) : (a = 2);
  // console.log(b);

  // var animal = "kitty";
  // var result = "";
  // if (animal === "kitty") {
  //   result = "cute";
  // } else {
  //   result = "still nice";
  // }
  // console.log(result);

  // var animal = "kitty";
  // var result = animal === "kitty" ? "cute" : "still nice";
  // console.log(result);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  // const data = useSelector((state) => state?.customers?.data);
  // // console.log(data);
  // const userData = data.map((item) => {
  //   item.userInfo = {
  //     name: item.name,
  //     email: item.email,
  //     phone: item.phone,
  //   };
  //   console.log(data.map((item) => item.userInfo));
  // });

  // console.log(userInfo);

  // var foo = function (val) {
  //   // if val evaluates to falsey, 'default' will be returned instead.
  //   return val || "default";
  // };
  // console.log(foo("burger"));

  // var date1 = new Date();
  // var date2 = new Date();
  // console.log(date1 === date2);

  // var date1 = new Date();
  // console.log(date1.toJSON());

  // var checkoutDate = new Date(); // Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
  // checkoutDate.setDate(checkoutDate.getDate() + 1);
  // console.log(checkoutDate);

  // var month = new Date().getMonth();
  // console.log(month);

  // var year = new Date().getFullYear();
  // console.log(year);

  // console.log(new Date().getTime());

  // console.log(Date.now());

  // var today = new Date().toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  // });
  // console.log(today);

  // var date = new Date();
  // date.setUTCFullYear(2000, 0, 31);
  // date.setUTCHours(12, 0, 0, 0);
  // console.log(date);

  // function formatDate(dayOfWeek, day, month, year) {
  //   var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   var months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
  // }
  // var birthday = new Date(2000, 0, 1);
  // console.log(
  //   formatDate(
  //     birthday.getDay(),
  //     birthday.getDate(),
  //     birthday.getMonth(),
  //     birthday.getFullYear()
  //   )
  // );

  // var options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // var date1 = new Date();
  // console.log(date1.toLocaleDateString([], options));

  // KAAM KI CHEEEZZZZZZZZZZZZZZZZZZZZZZZZ

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);

  // const data = useSelector((state) => state?.customers?.data);
  // let mappedData = data?.map((item) => {
  //   let userInfo = {
  //     name: { userName: item?.name },
  //     email: { userEmail: item?.email },
  //   };
  //   item.userInfo = userInfo;
  //   console.log(item);
  // });

  // KAAM KI CHEEEZZZZZZZZZZZZZZZZZZZZZZZZ

  // var date1 = new Date().toTimeString();
  // console.log(date1);

  // var date1 = new Date().toString();
  // console.log(date1);

  // var utc = new Date(Date.UTC(2022, 0));
  // console.log(utc);

  // var zero = new Date(2012, 0);
  // console.log(zero);

  // var ms = new Date(2012);
  // console.log(ms);

  // let data = new Date(0).toISOString();
  // console.log(data);

  // let data = new Date().toString();
  // console.log(data);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const data = useSelector((state) => state?.customers?.data);
  // console.log(data);

  // var string = "Hello, World!";
  // console.log(string.includes("o"));

  // let obj = [
  //   {
  //     name: "Manahil",
  //     lastName: "Tanwir",
  //     id: 1,
  //     company: "OIP",
  //   },
  //   {
  //     name: "Ahsan",
  //     lastName: "Faheem",
  //     id: 2,
  //     company: "OIP",
  //   },
  //   {
  //     name: "Usman",
  //     lastName: "Ali",
  //     id: 3,
  //     company: "OIP",
  //   },
  // ];
  // let id = obj[0].id;
  // console.log(obj.map((item) => item.id === id));
  // console.log(obj.findIndex());

  // var number = "0123456789";
  // console.log(number.indexOf(8));

  // var b10 = 12;
  // var b16 = b10.toString(16);
  // console.log(parseInt(b16, 16));

  // var b10 = 12;
  // var b16 = b10.toString(16);
  // console.log(b16);

  // var s = "0123456789abcdefg";
  // console.log(s.slice(4, 10));

  // var str = "one, two, three, four, five";
  // console.log(str.split(", "));

  // let str = "          HEllo World!                 ";
  // console.log(str.trimEnd());
  // console.log(str.trimStart());

  // var string = "              Hello, World!             -";
  // console.log(string.trimStart());

  // var string = "Hello, World!";
  // console.log(string[4]); // "o"

  // var string = "Hello, World!";
  // console.log(string.charAt(2));

  // var arr = ["bananas", "cranberries", "apples", "zebra", "Zebra"];
  // arr.sort();
  // console.log(arr);

  // let str = "Hello This Is Syed Manahil From OIP";
  // // let str2 = " TESTING ";
  // let object = {
  //   hello: "hello",
  //   world: "world",
  // };
  // let split = str.split(" ");
  // let join = split.join(JSON.stringify(object.world));
  // console.log(join);

  // let object = str.split("  ");
  // console.log(object + " " + typeof object);

  // const str = "The quick brown fox jumps over the lazy dog.";

  // let splittedData = str.split(` `);
  // console.log(splittedData[(0, 5)], " " + typeof splittedData);

  // function check(str) {
  //   return str.split("").reverse().join();
  // }
  // console.log(check("string"));

  // let a = "string";
  // let b = a.split("").reverse().join("");
  // // a = b;

  // console.log(a === b ? "OK" : "Not Ok");

  // var number = String(32);
  // var boolean = true;
  // var str = "string";
  // var c = number + boolean + str;
  // console.log(c + " " + typeof c);

  // var string = "string";
  // var number = 32;
  // var boolean = true;
  // let c = string + number + boolean;
  // console.log(c + " " + typeof c);

  // var booleanString = String(true);
  // console.log(booleanString, " " + typeof booleanString);

  // let func = (value) => {
  //   switch (value) {
  //     case 1:
  //       console.log('I will only run if value === 1');
  //     // Here, the code "falls through" and will run the code under case 2
  //     case 2:
  //       console.log('I will run if value === 1 or value === 2');
  //       break;
  //     case 3:
  //       console.log('I will only run if value === 3');
  //       break;
  //   }
  // }
  // let value = 1
  // func(value)
  // function abc(cb) {
  //   cb()
  //   console.log("first")
  //   setTimeout(() => {
  //     console.log("waitimg...")
  //   })
  // }

  // function callme() {
  //   console.log("second")
  // }

  // abc(callme);

  // var animal = 'kitty';
  // return (animal === 'kitty') ? <h1>'meow'</h1> : <h1>'woof'</h1>;

  // var a = 1;
  // a === 1 ? console.log("YES IT IS ONE") : console.log("NO IT'S NOT")
  // if (a === 1) {
  //   console.log("YEAH!!")
  // } else {
  //   console.log("NOPE!")
  // }

  // console.log(a === 1 ? alert('Hey, it is 1!') : 0);

  // var a = 0;
  // var str = 'not a';
  // var b = '';
  // b = a === 0 ? console.log(a = 1, str += ' test') : console.log(a = 2);

  // let a = 2
  // a--
  // console.log(a);

  // let b = 0
  // b = + 1
  // let a = {
  //   matchOne: 1,
  //   matchTwo: "Pak Vs Zim"
  // }

  // console.log(b)

  // console.log(0 == "");

  // var animal = 'kitty';
  // var result = '';
  // if (animal === 'kitty') {
  //   result = 'cute';
  // } else {
  //   result = 'still nice';
  // }
  // console.log(result)

  // var animal = 'kitty';
  // var result = (animal === 'kitty') ? 'cute' : 'still nice';
  // console.log(result);

  // class Cat {
  //   firstFun = (firstParam) => {
  //     return firstParam
  //   }
  //   secondFun = (secondParam) => {
  //     return secondParam
  //   }
  // }
  // const catData = new Cat();
  // const firstReturn = catData.firstFun("FIRST_FUNCTION_PARAMETER")
  // console.log(firstReturn)
  // const secondReturn = catData.secondFun("SECOND_FUNCTION_PARAMETER")
  // console.log(secondReturn)

  // const [jsonData, setJsonData] = useState([])

  // const getJsonData = async () => {
  //   const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //   setJsonData(data)
  //   // data?.map((item) => {
  //   //   // console.log(item);
  //   //   item.title = item.userId
  //   //   console.log(item.title)
  //   // })
  // }

  // useEffect(() => {
  //   getJsonData()
  // }, [])

  // jsonData?.map((item) => {
  //   // console.log(item.title)
  //   let data = item.title = item.userId
  //   console.log(data);
  // });

  // const indexFind = (id) => {
  // buttons.findIndex((item) => console.log(item.id === 3));
  // buttons.map((item) => {
  //  if (item.id === id){
  //   console.log(item);
  //  }
  // });
  // buttons.findIndex((item) => {
  //   // console.log(item.id === id);
  //   if (item.id === id) {
  //     console.log(item.btn);
  //   }
  // });
  // buttons.map((item, index) => {
  //   console.log(item.id === index);
  // if (item.id === id) {
  //   console.log(index);
  // }
  // });
  // };

  // const imageChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState,
  //   formState: { errors, touchedFields },
  // } = useForm();
  // const data = [
  //   {
  //     name: "HTML",
  //   },
  //   {
  //     name: "CSS",
  //   },
  //   {
  //     name: "JAVASCRIPT",
  //   },
  //   {
  //     name: "REACT JS",
  //   },
  //   {
  //     name: "REACT_NATIVE",
  //   },
  // ];
  // const test = (body) => {
  //   const propertyNames = Object.values(body);
  //   console.log(propertyNames);
  // };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, []);
  // const store = useSelector((state) => state?.customers?.data);
  // const test = (apiData) => {
  //   return apiData?.map((item) => {
  //     return (
  //       <div>
  //         <h1 className="text-center">{item?.name}</h1>
  //       </div>
  //     );
  //   });
  // };

  return (
    <>
      {/* <LiveVideoSdk /> */}
      {/* <PhoneWithCountryCodeIcon /> */}
      {/* <Routing /> */}
      {/* <Calendar /> */}
      {/* {test(store)} */}
      {/* <WithOutControllingBrowser /> */}
      <WithControlling_Browser />
      {/* <SocketExample /> */}
      {/* <button onClick={() => handleLogin()}>Submit</button> */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      {/* <JoinScreen /> */}
      {/* <InstagramEmbed
          url="https://www.instagram.com"
          postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
          width={325}
          height={570}
          linkText="hello"
        /> */}
      {/* </div> */}
      {/* <Test test={"123"}>Learning JavaScript</Test> */}
      {/* <Button onClick={() => inc()}>+</Button>
      <Button onClick={() => dec()}>-</Button> */}
      {/* <h1 onClick={() => testing()}>TEst</h1> */}
      {/* <MultiSelect /> */}
      {/* <SingleSelect /> */}
      {/* <label htmlFor="Color">Color</label> */}
      {/* {colorData?.map((item) => {
        return (
          <h1 className="text-center" onClick={() => test(item.colorName)}>
            {item.colorName}
          </h1>
        );
      })} */}
      {/* <div class="new">
        <form onSubmit={handleSubmit(test)}>
          {data.map((item) => {
            return (
              <>
                <input
                  style={{ color: "black" }}
                  type={"checkbox"}
                  className="form__field"
                  {...register(item.name)}
                  value={item.name}
                />
                <label for="html">{item.name}</label>
              </>
            );
          })}
          <video
            // ref={mediaEl}
            autoPlay
            playsInline
            muted
            style={{ width: `400px` }}
          /> */}
      {/* <input
            style={{ color: "black" }}
            type={"checkbox"}
            className="form__field"
            {...register("css")}
            value="CSS"
          />
          <label for="html">CSS</label>
          <input
            style={{ color: "black" }}
            type={"checkbox"}
            className="form__field"
            {...register("Java-script")}
            value="Java-script"
          />
          <label for="html">Java-script</label> */}
      {/* {formState.errors.html && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>
          <div class="form-group">
            <input type="checkbox" {...register("css", { required: true })} />
            <label for="html">CSS</label>
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              {...register("java-script", { required: true })}
            />
            <label for="html">JAVASCRIPT</label>
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              {...register("react-js", { required: true })}
            />
            <label for="html">REACT JS</label>
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              {...register("REACT_NATIVE", { required: true })}
            />
            <label for="html">REACT_NATIVE</label>
          </div> */}
      {/* <input type="submit" />
        </form>
      </div> */}
      {/* <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => setField(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleSubmit()}>
        Test
      </Button> */}
      {/* <h1 className="text-center"></h1> */}
      {/* <FormControl fullWidth sx={{ m: 1, border: "1px solid white" }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          style={{ border: "1px solid white" }}
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl> */}
      {/* <input
        type="text"
        name=""
        id=""
        onChange={(e) => setField(e.target.value)}
        value={field}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button> */}
      {/* <div className="d-flex">
        <input
          type="radio"
          name=""
          id=""
          value="First"
          onChange={(e) => console.log(e.target.value)}
        />
        <label htmlFor="">First</label>
      </div> */}
      {/* <input
        type="file"
        accept="image/*"
        required
        name=""
        id=""
        onChange={imageChange}
      />
      <img
        src={
          file ||
          "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
        }
        alt=""
        srcset=""
      /> */}
      {/* {buttons.map((item) => {
        return (
          <button class="btn" onClick={() => indexFind(item.id)}>
            <i class="fa fa-home"></i>
            {item.btn}
          </button>
        );
      })} */}

      {/* {data.map((item) => {
        return (
          <>
            <h1 className="text-center">{item.email.repeat(3)}</h1>
          </>
        );
      })} */}
      {/* {data?.map((item) => {
        let replacedItem = item?.name?.replace(item.name, "UPDATED NAME");
        console.log(item?.name, "NAME");
        console.log(replacedItem, "REPLACED");
        return (
          <>
            <h1 className="text-center">Hello</h1>
          </>
        );
      })} */}
    </>
  );
  // <table class="table">
  //   <thead>
  //     <tr>
  //       <th scope="col">Company</th>
  //       <th scope="col">Email</th>
  //       <th scope="col">Phone</th>
  //       <th scope="col">Name</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {state?.map((item) => {
  //       return (
  //         <tr key={item?.id}>
  //           <th scope="row">{item?.company?.name}</th>
  //           <td>{item?.email}</td>
  //           <td>{item?.phone}</td>
  //           <td onClick={() => deleteItem(item?.id)}>{item?.name}</td>
  //         </tr>
  //       );
  //     })}
  //   </tbody>
  // </table>
}

export default App;
