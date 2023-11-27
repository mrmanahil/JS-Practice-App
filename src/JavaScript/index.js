import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/Actions/customer.action";

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(fetchData());
// }, []);
// let data = useSelector((state) => state?.customers?.data[0]);

const Page = () => {
  // let objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // console.log(objOne.name?.Page);

  // const arrayOne = [1, 2, 3, 2, 21, 2, 2, 31, 1, 7];

  // for (const key in objOne) {
  //   console.log(key);
  // }

  // for (const key of objOne) {
  //   console.log(key);
  //   // console.log(objOne);
  // }

  // let num1 = 50;
  // let num2 = 60;

  // [num1, num2] = [num2, num1];

  // console.log(num1, num2);

  //  let temp = num1;
  //   num1 = num2;
  //   num2 = temp;
  //   console.log(num1);
  //   console.log(num2);

  // const arrayOne = [1, 2, 3, 2, 21, 2, 2, 31, 1, 7];
  // const arrayTwo = [32, 4, 34, 342, 1, 1, 2, 3, 4];

  // let myArr = [];

  // let i = 0;

  // arrayOne.map((item, index) => {
  //   let isDuplicate = false;
  //   myArr.map((ele, idx) => {
  //     if (item === ele) {
  //       isDuplicate = true;
  //     }
  //   });
  //   if (!isDuplicate) {
  //     myArr[myArr.length] = item;
  //   }
  // });

  // console.log(myArr);

  // do {
  //   let isDuplicate = false;
  //   for (let j = 0; j < myArr.length; j++) {
  //     if (arrayOne[i] === myArr[j]) {
  //       isDuplicate = true;
  //     }
  //   }
  //   if (!isDuplicate) {
  //     myArr[myArr.length] = arrayOne[i];
  //   }
  //   i++;
  // } while (i < arrayOne.length);

  // console.log(myArr);

  // let greatestEle = myArr[0];
  // let index = 0;
  // for (let j = 0; j < myArr.length; j++) {
  //   if (myArr[j] > greatestEle) {
  //     greatestEle = myArr[j];
  //     index = j;
  //   }
  // }

  // console.log(index);
  // console.log(greatestEle);

  // while (i < arrayOne.length) {
  //   if (!myArr.includes(arrayOne[i])) {
  //     // myArr.push(arrayOne[i]);
  //     myArr[myArr.length] = arrayOne[i];
  //   }
  //   // let isDuplicate = false;
  //   // for (let j = 0; j < myArr.length; j++) {
  //   //   if (arrayOne[i] === myArr[j]) {
  //   //     isDuplicate = true;
  //   //   }
  //   // }
  //   // if (!isDuplicate) {
  //   //   myArr[myArr.length] = arrayOne[i];
  //   // }
  //   i++;
  // }

  // console.log(myArr);

  // arrayOne.forEach((item, index) => {
  //   let isDuplicate = false;
  //   for (let i = 0; i < myArr.length; i++) {
  //     if (item === myArr[i]) {
  //       isDuplicate = true;
  //     }
  //   }
  //   if (!isDuplicate) {
  //     myArr[myArr.length] = item;
  //   }
  // });

  // console.log(myArr);

  // let greatestEle = myArr[0];
  // let index = 0;
  // for (let i = 0; i < myArr.length; i++) {
  //   if (myArr[i] > greatestEle) {
  //     greatestEle = myArr[i];
  //     index = i;
  //   }
  // }

  // console.log(greatestEle);
  // console.log(index);

  // for (let i = 0; i < concatedArr.length; i++) {
  //   if (!myArr.includes(concatedArr[i])) {
  //     // myArr.push(concatedArr[i]);
  //     myArr[myArr.length] = concatedArr[i];
  //   }
  // }
  // console.log(myArr);

  // let index = 0;
  // let greatestEle = concatedArr[0];

  // for (let i = 0; i < concatedArr.length; i++) {
  //   if (concatedArr[i] > greatestEle) {
  //     greatestEle = concatedArr[i];
  //   }
  //   let isDuplicate = false;
  //   for (let j = 0; j < myArr.length; j++) {
  //     if (concatedArr[i] === myArr[j]) {
  //       isDuplicate = true;
  //     }
  //   }
  //   if (!isDuplicate) {
  //     myArr[myArr.length] = concatedArr[i];
  //   }
  // }

  // console.log(greatestEle);
  // console.log(myArr);

  // let isThrottle = true;

  // function throttleFunc() {
  //   if (isThrottle) {
  //     console.log("OK");
  //     isThrottle = false;
  //     setTimeout(() => {
  //       isThrottle = true;
  //     }, 2000);
  //   }
  // }

  // function debounceFunc() {
  //   let timer;
  //   return (text, delay) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       if (text === "") return;
  //       console.log(text);
  //     }, delay);
  //   };
  // }

  // const debouncedGetData = debounceFunc();

  // for (let i = 1; i < 11; i++) {
  //   console.log(`2 x ${i} = ${i * 2}`);
  // }

  // let firstNum = 0;
  // let secondNum = 1;
  // let sum = 0;

  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // let objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // let objTwo = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(city) {
  //   console.log(`${this.firstName} ${this.lastName} from ${city}`);
  // }

  // const returnedFuncOne = printFullName.bind(objOne);
  // returnedFuncOne("Karachi");
  // const returnedFuncTwo = printFullName.bind(objTwo, "Hyderabad");
  // returnedFuncTwo();

  // printFullName.apply(objOne, ["Karachi"]);
  // printFullName.apply(objTwo, ["Hyderabad"]);

  // printFullName.call(objOne, "Karachi");
  // printFullName.call(objTwo, "Hyderabad");

  // function curryingFunc(a) {
  //   return (b) => {
  //     return (c) => {
  //       console.log(a + b + c);
  //     };
  //   };
  // }

  // let returnedFunc = curryingFunc(1);
  // let returnedFuncOne = returnedFunc(2);
  // returnedFuncOne(3);

  // let currentDate = new Date();

  // let lastMonthsDate = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() - 1,
  //   currentDate.getDate(),
  //   currentDate.getHours(),
  //   currentDate.getMinutes(),
  //   currentDate.getSeconds(),
  //   currentDate.getMilliseconds()
  // );

  // console.log(currentDate);
  // console.log(lastMonthsDate);

  // let currentDate = new Date();

  // let noOfMilliSecondsInAWeek = currentDate.getTime() - 7 * 24 * 60 * 60 * 1000;

  // let lastWeeksDate = new Date(noOfMilliSecondsInAWeek);

  // console.log(currentDate);
  // console.log(lastWeeksDate);

  // let arrOne = [1, 2, 8, 4, 4, 5, 6, 7, 8];
  // let arrTwo = [8, 7, 6, 5];

  // let concatedArr = [...arrOne, ...arrTwo];

  // let concatedArr = [];
  // let arrWithoutDuplicates = [];

  // for (let i = 0; i < arrOne.length; i++) {
  //   concatedArr[concatedArr.length] = arrOne[i];
  // }

  // for (let i = 0; i < arrTwo.length; i++) {
  //   concatedArr[concatedArr.length] = arrTwo[i];
  // }

  // console.log("The Concatination Of Two Array Is", concatedArr);

  // function checkGreatestEle() {
  //   let greatestEle = concatedArr[0];
  //   let index = 0;
  //   for (let i = 0; i < concatedArr.length; i++) {
  //     if (concatedArr[i] > greatestEle) {
  //       greatestEle = concatedArr[i];
  //       index = i;
  //     }
  //   }
  //   console.log("The Greatest Element In An Array Is ", greatestEle);
  //   console.log("The Index Of The Greatest Element In An Array Is ", index);
  // }

  // checkGreatestEle();

  // function checkLowestEle() {
  //   let lowestEle = concatedArr[0];
  //   let index = 0;
  //   for (let i = 0; i < concatedArr.length; i++) {
  //     if (concatedArr[i] < lowestEle) {
  //       lowestEle = concatedArr[i];
  //       index = i;
  //     }
  //   }
  //   console.log("The Lowest Element In An Array Is ", lowestEle);
  //   console.log("The Index Of The Lowest Element In An Array Is ", index);
  // }

  // checkLowestEle();

  // function removeDuplicatesFromAnArray() {
  //   let sum = 0;
  //   for (let i = 0; i < concatedArr.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < arrWithoutDuplicates.length; j++) {
  //       if (concatedArr[i] === arrWithoutDuplicates[j]) {
  //         isDuplicate = true;
  //       }
  //     }
  //     if (!isDuplicate) {
  //       arrWithoutDuplicates[arrWithoutDuplicates.length] = concatedArr[i];
  //     }
  //   }
  //   for (let k = 0; k < arrWithoutDuplicates.length; k++) {
  //     sum += arrWithoutDuplicates[k];
  //   }
  //   console.log("Array WithOut Duplicates ", arrWithoutDuplicates);
  //   console.log("The Sum Of All The Elements Of The Array Is :", sum);
  // }

  // removeDuplicatesFromAnArray();

  // console.log(concatedArr);

  // function checkPalindrome(param) {
  //   const reverseString = param.toString().split("").reverse().join("");
  //   if (param.toString() === reverseString) {
  //     console.log("Palindrome");
  //   } else {
  //     console.log("Not a Palindrome");
  //   }
  // }

  // checkPalindrome(123);

  // let arrOne = [1, 2, 8, 4, 4, 5, 6, 7];
  // let arrTwo = [8, 7, 6, 5];

  // let concatedArr = [...arrOne, ...arrTwo];

  // let myNewArr = [];
  // console.log(concatedArr);

  // let concatedArr = [];

  // for (let i = 0; i < arrOne.length; i++) {
  //   concatedArr[concatedArr.length] = arrOne[i];
  // }

  // for (let i = 0; i < arrTwo.length; i++) {
  //   concatedArr[concatedArr.length] = arrTwo[i];
  // }

  // console.log(concatedArr);

  // let concatedArr = [];
  // let myNewArr = [];

  // function concatedArrIntoOne(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     concatedArr[concatedArr.length] = arr[i];
  //   }
  // }

  // concatedArrIntoOne(arrOne);
  // concatedArrIntoOne(arrTwo);

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < concatedArr.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < myNewArr.length; j++) {
  //       if (concatedArr[i] === myNewArr[j]) {
  //         isDuplicate = true;
  //       }
  //     }
  //     if (!isDuplicate) {
  //       myNewArr[myNewArr.length] = concatedArr[i];
  //     }
  //   }
  //   console.log(concatedArr);
  //   console.log(myNewArr.sort());
  // }

  // removeDuplicatesFromAnArray();

  // console.log(concatedArr);

  // let myArr = [];
  // let filteredArray = [];

  // for (let i = 0; i < arrOne.length; i++) {
  //   myArr[myArr.length] = arrOne[i];
  // }

  // for (let i = 0; i < arrTwo.length; i++) {
  //   myArr[myArr.length] = arrTwo[i];
  // }

  // function removeDuplicatesFromAnArray(){
  //   for (let i = 0; i < myArr.length; i++) {
  //     let isDuplicate = false
  //     for (let j = 0; j < filteredArray.length; j++) {
  //       if(myArr[i] === filteredArray[j]){
  //         isDuplicate = true
  //       }
  //     }
  //     if(!isDuplicate){
  //       filteredArray[filteredArray.length] = myArr[i]
  //     }
  //   }
  //   console.log(filteredArray);
  // }

  // function removeDuplicatesFromAnArray() {
  //   myArr.map((item, index) => {
  //     let isDuplicate = false;
  //     filteredArray.map((ele, i) => {
  //       if (myArr[index] === filteredArray[i]) {
  //         isDuplicate = true;
  //       }
  //     });
  //     if (!isDuplicate) {
  //       filteredArray[filteredArray.length] = myArr[index];
  //     }
  //   });
  //   console.log(filteredArray);
  // }

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < myArr.length; i++) {
  //     if (myArr.indexOf(myArr[i]) === i) {
  //       filteredArray.push(myArr[i]);
  //     }
  //   }
  //   console.log(filteredArray);
  // }

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < myArr.length; i++) {
  //     if (!filteredArray.includes(myArr[i])) {
  //       filteredArray.push(myArr[i]);
  //     }
  //   }
  //   console.log(filteredArray);
  // }

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < myArr.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < filteredArray.length; j++) {
  //       if (myArr[i] === filteredArray[j]) {
  //         isDuplicate = true;
  //         break;
  //       }
  //     }
  //     if (!isDuplicate) {
  //       filteredArray[filteredArray.length] = myArr[i];
  //     }
  //     console.log(filteredArray);
  //   }
  // }

  // removeDuplicatesFromAnArray();

  // let arr = [1, 2, 3, 3, 333, 4, 5, 6, 7, 5, 43];

  // console.log(Math.max(...arr));

  // function findIndexOfGreaterEle() {
  //   let index = 0;
  //   let sum = 0;
  //   let greatestEle = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > greatestEle) {
  //       greatestEle = arr[i];
  //       index = i;
  //     }
  //     sum += arr[i];
  //   }
  //   console.log(greatestEle);
  //   console.log(index);
  //   console.log(sum);
  // }

  // findIndexOfGreaterEle();

  // function checkLowestEle() {
  //   let lowestEle = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < lowestEle) {
  //       lowestEle = arr[i];
  //     }
  //   }
  //   console.log(lowestEle);
  // }

  // checkLowestEle();

  // function checkGreatestEle() {
  //   let greatestEle = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > greatestEle) {
  //       greatestEle = arr[i];
  //     }
  //   }
  //   console.log(greatestEle);
  // }

  // checkGreatestEle();

  // function myDebounceFunc() {
  //   let timer;
  //   return function (text, delay) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       console.log(text);
  //     }, delay);
  //   };
  // }

  // const debouncedGetData = myDebounceFunc();

  // let isThrottle = true;

  // const throttleFunc = () => {
  //   if (isThrottle) {
  //     console.log("OK");
  //     isThrottle = false;
  //     setTimeout(() => {
  //       isThrottle = true;
  //     }, 3000);
  //   }
  // };

  // function myFunc(arr) {
  //   let newObj = Object.fromEntries(arr);
  //   console.log(newObj);
  // }

  // myFunc([
  //   ["a", 1],
  //   ["b", 2],
  //   ["c", 3],
  //   ["d", 4],
  // ]);

  // function myFunc(arr) {
  //   const obj = Object.fromEntries(arr);
  //   console.log(obj);
  // }

  // myFunc([
  //   ["a", 1],
  //   ["b", 2],
  //   ["c", 3],
  //   ["d", 4],
  // ]);

  // let obj = {
  //   a: 1,
  //   b: null,
  //   c: undefined,
  //   d: "hello",
  // };

  // const newObj = Object.fromEntries(
  //   Object.entries(obj).filter(
  //     ([_, index]) => index != null || index != undefined
  //   )
  // );
  // console.log(newObj);

  // for(const key in obj){
  //   let item = obj[key]
  //   if(item === null || item === undefined){
  //     delete obj[key]
  //   }
  // }

  // console.log(obj);

  // for (const i in obj) {
  //   if (obj[i] === null || obj[i] === undefined) {
  //     delete obj[i];
  //   }
  // }

  // let newObj = Object.fromEntries(
  //   Object.entries(obj).filter(
  //     ([_, index]) => index != undefined || index != null
  //   )
  // );
  // console.log(newObj);

  // console.log(b);

  // let num = 5 + "5" - 5;
  // console.log(num);
  // console.log(typeof num);

  // let isThrottle = true;

  // function throttleFunc() {
  //   if (isThrottle) {
  //     console.log("OK");
  //     isThrottle = false;
  //     setTimeout(() => {
  //       isThrottle = true;
  //     }, 2000);
  //   }
  // }

  // function debounceFunction() {
  //   let timer;
  //   return function (text, delay) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       console.log(text);
  //     }, delay);
  //   };
  // }

  // const debouncedGetData = debounceFunction();

  // function debouceFunction() {
  //   let timer;
  //   return (text, delay) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       if (text === "") return;
  //       console.log(text);
  //     }, delay);
  //   };
  // }

  // const debouncedGetData = debouceFunction();

  // function getData(text) {
  //   console.log(text);
  // }

  // function debouceFunction() {
  //   let timer;
  //   return (text, delay) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => getData(text), delay);
  //   };
  // }

  // const debouncedGetData = debouceFunction();

  // let a = [1, 1, 2, 2, 34, 4, 54, 5, 6, 76, 7, 7];

  // let arr = [];

  // a.filter((eleOne, firstIndex) => {
  //   let isDuplicate = false;
  //   arr.filter((eleTwo, secondIndex) => {
  //     if (a[firstIndex] === arr[secondIndex]) {
  //       isDuplicate = true;
  //     }
  //   });
  //   if (!isDuplicate) {
  //     arr[arr.length] = a[firstIndex];
  //   }
  // });

  // console.log(arr);

  // a.map((item, firstIndex) => {
  //   let isDuplicate = false;
  //   arr.map((item, index) => {
  //     if (a[firstIndex] === arr[index]) {
  //       isDuplicate = true;
  //     }
  //   });
  //   if (!isDuplicate) {
  //     arr[arr.length] = a[firstIndex];
  //   }
  // });

  // console.log(arr);

  // let b = a.filter((item) => {
  //   if (!arr.includes(item)) {
  //     arr.push(item);
  //   }
  // });

  // console.log(arr);

  // a.map((item) => {
  //   if (!arr.includes(item)) {
  //     return arr.push(item);
  //   }
  // });

  // console.log(arr);

  // a.map((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     return arr.push(item);
  //   }
  // });

  // console.log(arr);
  // console.log(b);

  // (function () {
  //   for (let i = 0; i < a.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < a.length; j++) {
  //       if (a[i] === arr[j]) {
  //         isDuplicate = true;
  //       }
  //     }
  //     if (!isDuplicate) {
  //       arr[arr.length] = a[i];
  //     }
  //   }
  //   console.log(arr);
  // })();

  // let b = a.map((item) => {
  //   if (!arr.includes(item)) {
  //     // arr.push(item);
  //     arr[arr.length] = item;
  //   }
  // });
  // // .filter((ele) => ele != undefined);
  // console.log(arr);

  // let b = a
  //   .map((item, index) => {
  //     if (a.indexOf(item) === index) {
  //       return item;
  //     }
  //   })
  //   .filter((ele) => ele != undefined);

  // console.log(b);

  // a.forEach((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     // arr.push(item);
  //     arr[arr.length] = item;
  //   }
  // });

  // do {
  //   if (!arr.includes(a[i])) {
  //     // arr.push(a[i]);
  //     arr[arr.length] = a[i];
  //   }
  //   i++;
  // } while (i < a.length);

  // while (i < a.length) {
  //   if (a.indexOf(a[i]) === i) {
  //     arr[arr.length] = a[i];
  //   }
  //   i++;
  // }

  // while (i < a.length) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  //   i++;
  // }

  // for (const i in a) {
  //   if (a.indexOf(a[i]) == i) {
  //     arr.push(a[i]);
  //   }
  // }

  // console.log(arr);

  // for (const i in a) {
  //   if (!arr.includes(a[i])) {
  //     // arr.push(a[i]);
  //     arr[arr.length] = a[i];
  //   }
  // }
  // console.log(arr);

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < a.length; i++) {
  //     if (!arr.includes(a[i])) {
  //       arr[arr.length] = a[i];
  //     }
  //   }
  //   console.log(arr);
  // }

  // removeDuplicatesFromAnArray();

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < a.length; i++) {
  //     if (a.indexOf(a[i]) === i) {
  //       // arr.push(a[i]);
  //       // arr[arr.length] = a[i];
  //     }
  //   }
  //   console.log(arr);
  // }

  // removeDuplicatesFromAnArray();

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < a.length; i++) {
  //     if (!arr.includes(a[i])) {
  //       arr.push(a[i]);
  //     }
  //   }
  // }

  // removeDuplicatesFromAnArray();
  // console.log(arr);

  // console.log([...new Set(a)]);

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < a.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (a[i] === arr[j]) {
  //         isDuplicate = true;
  //       }
  //     }
  //     if (!isDuplicate) {
  //       arr[arr.length] = a[i];
  //     }
  //   }
  //   console.log(arr);
  // }

  // removeDuplicatesFromAnArray();

  // function removeDuplicatesFromAnArray() {
  //   for (let i = 0; i < a.length; i++) {
  //     let isDuplicate = false;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (a[i] === arr[j]) {
  //         isDuplicate = true;
  //         break;
  //       }
  //     }
  //     if (!isDuplicate) {
  //       arr[arr.length] = a[i];
  //     }
  //   }
  //   console.log(arr);
  // }

  // removeDuplicatesFromAnArray();

  // (function printTableOfTwo() {
  //   for (let i = 1; i <= 10; i++) {
  //     console.log(`2 x ${i} = ${i * 2}`);
  //   }
  // })();

  // let firstNum = 2;
  // let SecondNum = 1;
  // let sum = 0;

  // function testFibonacciSeries() {
  //   for (let i = 0; i < 5; i++) {
  //     sum = firstNum + SecondNum;
  //     firstNum = SecondNum;
  //     SecondNum = sum;
  //     console.log(sum);
  //   }
  // }

  // testFibonacciSeries();

  // const objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // const objTwo = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(city, state) {
  //   console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
  // }

  // const returnedFunc = printFullName.bind(objOne);
  // const returnedFuncTwo = printFullName.bind(objTwo, "Hyderabad", "Sindh");
  // returnedFunc("Karachi", "Sindh");
  // returnedFuncTwo();

  // printFullName.apply(objOne, ["Karachi", "Sindh"]);
  // printFullName.apply(objTwo, ["Hyderabad", "Sindh"]);

  // printFullName.call(objOne, "Karachi", "Sindh");
  // printFullName.call(objTwo, "Hyderabad", "Sindh");

  // objOne.printFullName();

  // objOne.printFullName.call(objTwo);

  // function functionClosures(a) {
  //   return (b) => {
  //     return (c) => {
  //       console.log(a + b + c);
  //     };
  //   };
  // }

  // const returnedFuncOne = functionClosures(20);
  // const returnedFuncTwo = returnedFuncOne(20);
  // returnedFuncTwo(60);

  // function higherOrderFunc(a) {
  //   return (b) => {
  //     console.log(a + b);
  //   };
  // }

  // const returnedFunc = higherOrderFunc(50);
  // returnedFunc(50);

  // function curryingWithBind(a, b) {
  //   console.log(a + b);
  // }

  // const returnedFunc = curryingWithBind.bind(this);
  // returnedFunc(10, 10);

  // function curryingFunc(a) {
  //   return (b) => {
  //     return (c) => {
  //       console.log(`${a} ${b} ${c}`);
  //     };
  //   };
  // }

  // const returnedFuncOne = curryingFunc("Syed");
  // const returnedFuncTwo = returnedFuncOne("Manahil");
  // returnedFuncTwo("Tanwir");

  // let array = [200, 100, 50, 40, 30, 20, 1000];

  // (function () {
  //   let checkLowestEle = array[0];
  //   let checkLowestEleIndex = 0;
  //   let sub = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] < checkLowestEle) {
  //       checkLowestEle = array[i];
  //       checkLowestEleIndex = i;
  //     }
  //     sub -= array[i];
  //   }
  //   console.log(checkLowestEle);
  //   console.log(checkLowestEleIndex);
  //   console.log(sub);
  // })();

  // function checkPalindrome(param) {
  //   const reverseString = param.toString().split("").reverse().join("");
  //   if (param.toString() === reverseString) {
  //     console.log("It Is Palindrome");
  //   } else {
  //     console.log("It Is Not Palindrome");
  //   }
  // }

  // checkPalindrome("madam");

  // let array = [200, 100, 50, 40, 30, 20, 1000, 0];

  // function checkGreatestEle() {
  //   let indexOfGreatestEle = 0;
  //   let greatestEle = 0;
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > greatestEle) {
  //       greatestEle = array[i];
  //       indexOfGreatestEle = i;
  //     }
  //     sum += array[i];
  //   }
  //   console.log(indexOfGreatestEle);
  //   console.log(greatestEle);
  //   console.log(sum);
  // }

  // checkGreatestEle();

  // let currentDate = new Date();

  // let lastMonthsDate = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth() - 1,
  //   currentDate.getDate(),
  //   currentDate.getHours(),
  //   currentDate.getMinutes(),
  //   currentDate.getSeconds(),
  //   currentDate.getMilliseconds()
  // );

  // console.log(currentDate);
  // console.log(lastMonthsDate);

  // let currentDate = new Date();

  // let noOfMilliSecondsInAWeek = currentDate.getTime() - 7 * 24 * 60 * 60 * 1000;

  // let lastWeeksDate = new Date(noOfMilliSecondsInAWeek);

  // console.log(currentDate);
  // console.log(lastWeeksDate);

  // Calculating Last Week Date From Now

  // let todaysDate = new Date();

  // let noOfMilliSecondsInAWeek = todaysDate.getTime() - 7 * 24 * 60 * 60 * 1000;

  // let lastWeeksDate = new Date(noOfMilliSecondsInAWeek);

  // console.log(todaysDate);

  // console.log(lastWeeksDate);

  // Calculating Last Month Date From Now

  // let todaysDate = new Date();
  // let noOfMilliSecondsInAMonth =
  //   todaysDate.getTime() - 30 * 24 * 60 * 60 * 1000;
  // let lastMonthsDate = new Date(
  //   todaysDate.getFullYear(),
  //   todaysDate.getMonth() - 1,
  //   todaysDate.getDate(),
  //   todaysDate.getHours(),
  //   todaysDate.getMinutes(),
  //   todaysDate.getSeconds(),
  //   todaysDate.getMilliseconds()
  // );
  // console.log(todaysDate);
  // console.log(lastMonthsDate);

  // Calculating Last Week Date From Now

  // let todaysDate = new Date();
  // let noOfMilliSecondsInAWeek = todaysDate.getTime() - 7 * 24 * 60 * 60 * 1000;
  // let lastWeeksDate = new Date(noOfMilliSecondsInAWeek);
  // console.log(todaysDate);
  // console.log(lastWeeksDate);

  // let array = [200, 100, 50, 40, 30, 20, 10, 0];

  // function checkLowestEle() {
  //   let lowestEle = array[0];
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] < lowestEle) {
  //       lowestEle = array[i];
  //     }
  //     sum = sum + array[i];
  //   }
  //   const index = array.indexOf(lowestEle);
  //   console.log("The sum of the given numbers are: ", sum);
  //   console.log("The lowest Element of the given array is: ", lowestEle);
  //   console.log("The index of the lowest number is: ", index);
  // }

  // checkLowestEle();

  //   Check Greatest Element In The Array, Also Find the Index Of The Highest Element, Also Sum Up All The Values In The Given Array

  // let array = [200, 100, 50, 40, 30, 20, 10, 0];

  // function checkGreatestEle() {
  //   let greatestEle = array[0];
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > greatestEle) {
  //       greatestEle = array[i];
  //     }
  //     sum = sum + array[i];
  //   }
  //   const index = array.indexOf(greatestEle);
  //   console.log("The sum of the given numbers are: ", sum);
  //   console.log("The greatest Element of the given array is: ", greatestEle);
  //   console.log("The index of the highest number is: ", index);
  // }

  // checkGreatestEle();

  // let firstObj = "";
  // let secondObj = "";

  // if (firstObj === secondObj) {
  //   console.log("OK");
  // } else console.log("Not Ok");

  // const a = [1, 9, 2, 2, 4, 4, 660, 7, 9];

  // function checkGreatestEle() {
  //   let greatestEle = a[0];
  //   let sum = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] > greatestEle) {
  //       greatestEle = a[i];
  //     }
  //     sum = sum + a[i];
  //   }
  //   let index = a.indexOf(greatestEle);
  //   console.log("The sum of the given numbers are: ", sum);
  //   console.log("The index of the highest number is: ", index);
  //   console.log("The greatest Element of the given array is: ", greatestEle);
  // }

  // checkGreatestEle();

  // console.log(Math.max(...a));

  // let greatestEle = a[0];

  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] > greatestEle) {
  //     greatestEle = a[i];
  //   }
  // }
  // console.log(greatestEle);

  // function checkGreatestEle() {
  //   let greatestEle = a[0];
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i] > greatestEle) {
  //       greatestEle = a[i];
  //     }
  //   }
  //   console.log(greatestEle);
  // }

  // checkGreatestEle();

  // console.log([...new Set(a)]);

  // const checkPalindrome = (param) => {
  //   const reverseString = param.toString().split("").reverse().join("");
  //   if (param.toString() === reverseString) {
  //     console.log("this is palindrome");
  //   } else {
  //     console.log("this isn't palindrome");
  //   }
  // };

  // checkPalindrome("lol");

  // class test {
  //   constructor(name) {
  //     this.empName = name;
  //     console.log("Called Immediately " + name);
  //   }

  //   name(name) {
  //     console.log("Static Methid ", this.empName + name);
  //   }
  // }

  // class myName extends test {
  //   constructor(name) {
  //     super(name);
  //     console.log("Called Immediately " + name);
  //   }
  // }

  // const a = new myName("Hello");
  // a.name("World");

  // const a = new test();

  // let n = "name";

  // let objOne = {
  //   [n]: "Manahil",
  // };

  // console.log(objOne);

  // {
  //   var a = "OK";
  // }

  // console.log(a);

  // const obj = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  //   print() {
  //     const printTwo = () => {
  //       console.log(this);
  //     };
  //     printTwo();
  //   },
  //   // print() {
  //   //   const printTwo = () => {
  //   //     console.log(this);
  //   //   };
  //   //   printTwo();
  //   // },
  // };

  // obj.print();

  // function debounce(fn, delay) {
  //   let timer;
  //   return (() => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => fn(), delay);
  //   })();
  // }

  // // usage
  // function someFn() {
  //   console.log("Hi");
  // }

  // debounce(someFn, 2000);
  // function sum(a) {
  //   return (b) => {
  //     return (c) => {
  //       return (d) => {
  //         console.log(a + b + c + d);
  //       };
  //     };
  //   };
  // }

  // const firstFun = sum(2);
  // const secondFunc = firstFun(2);
  // const thirdFunc = secondFunc(2);
  // thirdFunc(2);

  // function sum(a) {
  //   return (b) => {
  //     console.log(b + a);
  //   };
  // }

  // sum(2)(10);

  // let firstNum = "10";
  // let secondNum = 20;
  // console.log(firstNum * secondNum);

  // function palindromeFunc(param) {
  //   const reverseString = param.toString().split("").reverse().join("");
  //   if (reverseString === param.toString()) {
  //     console.log("Yes it is palindrome");
  //   } else {
  //     console.log("No it's not palindrome");
  //   }
  // }

  // palindromeFunc("madam");

  // function sum(a) {
  //   return function (b) {
  //     return function (c) {
  //       return function (d) {
  //         console.log(a + b + c + d);
  //       };
  //     };
  //   };
  // }

  // const firstFun = sum(2);
  // const secondFunc = firstFun(2);
  // const thirdFunc = secondFunc(2);
  // thirdFunc(2);

  // const objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // const objTwo = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(city, state) {
  //   console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
  // }

  // const returnedFuncOne = printFullName.bind(objOne);
  // const returnedFuncTwo = printFullName.bind(objTwo, "HYDERABAD", "PAKISTAN");
  // returnedFuncOne("PAKISTAN", "KARACHI");

  // printFullName.apply(objOne, ["KARACHI", "PAKISTAN"]);
  // printFullName.apply(objTwo, ["HYDERABAD", "PAKISTAN"]);

  // printFullName.call(objOne, "Karachi", "Hyderabad");
  // printFullName.call(objTwo, "Hyderabad", "Karachi");

  // function sum(a) {
  //   return function (b) {
  //     return function (c) {
  //       return function (d) {
  //         return function (e) {
  //           console.log(a + b + c + d + e);
  //         };
  //       };
  //     };
  //   };
  // }

  // const firstFun = sum(1);
  // const secondFunc = firstFun(1);
  // const thirdFunc = secondFunc(1);
  // const fourthFunc = thirdFunc(1);
  // fourthFunc(10);

  // sum(1)(2)(3)(4)(5);

  // function sum(num) {
  //   console.log(num + 1);
  // }

  // sum(1);
  // sum(10);
  // sum(100);

  // function sum(a) {
  //   return function (b) {
  //     console.log(a + b);
  //   };
  // }

  // const returnedFunc = sum(2);
  // returnedFunc(3);

  // function add(a) {
  //   return function (b) {
  //     return a + b;
  //   };
  // }

  // console.log(add(3)(4));

  // (function () {
  //   console.log("OK");
  // })();

  // function sum(a) {
  //   return function (b) {
  //     console.log(b + a);
  //   };
  // }

  // const a = sum(10);
  // a(20);

  // function sum(a, b) {
  //   console.log(a + b);
  // }

  // const a = sum.bind(this);
  // a(1, 5);

  // function sum(a, b, c) {
  //   console.log(a + b + c);
  // }

  // const a = sum.bind(this);

  // a(2, 3, 4);

  //         Function currying

  // function sum(a) {
  //   return function (b) {
  //     console.log(a + b);
  //   };
  // }

  // const returnedFunc = sum(2);
  // returnedFunc(10);

  //                              Example Of (Higher Order Function, Function Currying And Function With Closures As Well)

  // function sum(a) {
  //   return function (b) {
  //     console.log(a * b);
  //   };
  // }

  // const returnedFunc = sum(2);
  // returnedFunc(3);

  // FUnctionn Currying with bind method

  // function sum(a, b) {
  //   console.log(a, b);
  // }

  // const returnedFunc = sum.bind(this, 5);
  // returnedFunc(2);

  //                                                       Higher order function

  // function sum(a, b) {
  //   return (c, d) => {
  //     console.log(a + b + c + d);
  //   };
  // }

  // const returnedFunc = sum(1, 2);

  // returnedFunc(3, 4);

  // function sum(a, b, c) {
  //   console.log(a + b + c);
  // }

  // const resultFunc = sum.bind(this, 6, 7, 8);
  // resultFunc();

  // function sum(a) {
  //   return function (b) {
  //     console.log(a + b);
  //   };
  // }

  // const returnedFunc = sum(2);
  // returnedFunc(5);

  // const objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // const objTwo = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(city = "Karachi", state = "Sindh") {
  //   console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
  // }

  // const returnedFunc = printFullName.bind(objOne);
  // returnedFunc("TeST");

  // printFullName.apply(objTwo, ["Karachi", "Sindh"]);

  // printFullName.call(objOne, "Karachi", "Sindh");
  // printFullName.call(objTwo, "Hyderabad", "Sindh");

  // objOne.printFullName.call(objOne);

  // function test(param) {
  //   console.log(`${this.firstName} ${this.lastName} `);
  // }

  // const obj = {
  //   firstName: "SYed",
  //   lastName: "Manahil",
  // };

  // const callbackFunc = test.bind(obj);
  // callbackFunc();

  // (function () {
  //   console.log("ok");
  // })();

  // let a = "5" - "3";
  // console.log(a);

  // let a = "5" + 2;
  // console.log(a);

  // let a = 1 + null;
  // console.log(a);

  //                                                        Coercion

  // let a = 123 + "";
  // console.log(a);
  // console.log(typeof a);

  // var a = 2;

  // var a = 1;
  // console.log(a);

  // const obj = {
  //   firstNAme: "Syed",
  //   lastNAme: "Manahil",
  // };

  // obj.firstNAme = "Maaz";
  // console.log(obj);

  // for (let i = 0; i < 2; i++) {
  //   var a = 2;
  // }

  // console.log(a);

  // if (true) {
  //   var x = "OK";
  // }

  // function name() {
  //   var x = "Hello";
  // }

  // console.log(x);

  // function test() {
  //   a = "World";
  //   var a;
  //   console.log(a);
  // }

  // test();

  // console.log(a);

  // x = 4;
  // console.log(x);

  //                                                               Hoisting In JavaScript

  // x = "2";
  // console.log(x);

  // let x;

  // console.log(x);

  // var x = 7;

  // myName();

  // var myName = () => {
  //   console.log("Syed Manahil");
  // };

  // var d = {};
  // ["zebra", "horse"].forEach(function (k) {
  //   d[k] = undefined;
  // });

  // function sum(a, b) {
  //   if (arguments.length === 2) {
  //     return a + b;
  //   }
  //   return function (c) {
  //     return a + c;
  //   };
  // }

  // console.log(sum(2, 3));
  // console.log(sum(2)(3));

  // function sum(a, b) {
  //   let plus;
  //   if (arguments.length === 2) {
  //     plus = arguments[0] + arguments[1];
  //     return plus;
  //   } else {
  //     return function (b) {
  //       return a + b;
  //     };
  //   }
  // }

  // console.log(sum(2, 3));
  // console.log(sum(2)(3));

  //                                                            Palindrome Function

  // const palindromeFunc = (arg) => {
  //   const reverseString = arg.toString().split("").reverse().join("")
  //   return arg.toString() === reverseString
  // }
  // console.log(palindromeFunc(121));

  // let palindromeFunc = (param) => {
  //   let reverseString = param.toString().split("").reverse().join('')
  //   return param.toString() === reverseString
  // }

  // console.log(palindromeFunc("tot"));

  // (function () {
  //   console.log(1);
  //   setTimeout(function () { console.log(2) }, 1000);
  //   setTimeout(function () { console.log(3) }, 0);
  //   console.log(4);
  // })();

  // let a = 0.1 + 0.2
  // let b = a.toFixed(1) == 0.3

  // console.log(a)
  // console.log(b)

  // function foo1() {
  //   return {
  //     bar: "hello"
  //   };
  // }

  // function foo2() {
  //   return
  //   {
  //     bar: "hello"
  //   };
  // }

  // const a = foo2()
  // console.log(a)

  // (function () {
  //   var a = b = 3;
  // })();

  // console.log("a defined? " + (typeof a !== "undefined"));
  // // console.log("b defined? " + (typeof b !== "undefined"));

  //                                                               Function Currying With Closures

  // function multiply(a) {
  //   return function (b) {
  //     console.log(a * b);
  //   };
  // }

  // const returnedFunc = multiply(10);
  // returnedFunc(3);

  //                                                                 Function Currying

  // function sum(a, b) {
  //   return (c, d) => {
  //     console.log(a + b + c + d);
  //   };
  // }

  // const returnedFunc = sum(1, 2);
  // returnedFunc(3, 4);

  //                                                                                 `fibonacci`

  // let array = [];

  // function fibonacciFunc(param) {
  //   let firstNum = 0;

  //   let secondNum = 1;

  //   let sum;

  //   for (let i = 0; i < param; i++) {
  //     sum = firstNum + secondNum;
  //     firstNum = secondNum;
  //     secondNum = sum;
  //     array.push(sum);
  //     console.log(array);
  //   }
  // }

  // fibonacciFunc(5);

  // for (let i = 1; i <= 10; i++) {
  //   console.log(`3 x ${i} = ${i * 3}`);
  // }

  // let a = [1, 1, 2, 2, 34, 4, 54, 5, 6, 76, 7, 7];

  // let b = [];

  // a.filter((item, index) => {
  //   if (!b.includes(item)) {
  //     b.push(item);
  //   }
  // });

  // var b = a.filter((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     return item;
  //   }
  // });

  // console.log(b);

  // a.map((item) => {
  //   if (!b.includes(item)) {
  //     b.push(item);
  //   }
  // });

  // console.log(b);

  // let b = a
  //   .map((item, index) => {
  //     if (a.indexOf(item) === index) {
  //       return item;
  //     }
  //   })
  //   .filter((ele) => ele !== undefined);
  // console.log(b);

  // let i = 0;

  // while (i < a.length) {
  //   if (a.indexOf(a[i]) === i) {
  //     b.push(a[i]);
  //   }
  //   i++;
  // }

  // console.log(b);

  // while (i < a.length) {
  //   if (!b.includes(a[i])) {
  //     b.push(a[i]);
  //   }
  //   i++;
  // }
  // console.log(b);

  // do {
  //   if (!b.includes(a[i])) {
  //     b.push(a[i]);
  //   }
  //   i++;
  // } while (i < a.length);
  // console.log(b);

  // do {
  //   if (a.indexOf(a[i]) === i) {
  //     b.push(a[i]);
  //   }
  //   i++;
  // } while (i < a.length);
  // console.log(b);

  // a.forEach((item, index) => {
  //   if (!b.includes(item)) {
  //     b.push(item);
  //   }
  // });

  // console.log(b);

  // a.forEach((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     b.push(item);
  //   }
  // });

  // console.log(b);

  // for (let i = 0; i < a.length; i++) {
  //   if (!b.includes(a[i])) {
  //     b.push(a[i]);
  //   }
  // }
  // console.log(b);

  // for (let i = 0; i < a.length; i++) {
  //   if (a.indexOf(a[i]) === i) {
  //     b.push(a[i]);
  //   }
  // }

  // console.log(b);

  //                                                                  Bind,    Call,    Apply    Method

  // let object = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // let secondObj = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(...arg) {
  //   console.log(`${this.firstName} ${this.lastName} from ${arg}`);
  // }

  // lets use Call Method

  // printFullName.call(object, "Karachi", " Sindh");

  // lets use the apply method

  // printFullName.apply(secondObj, ["Hyderabad", " Sindh"]);

  // lets use the bind method

  // const returnedFunc = printFullName.bind(object);
  // returnedFunc("Karachi", " Sindh");

  // object.printFullName.call(secondObj);

  // let objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // let objTwo = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(...args) {
  //   console.log(`${this.firstName} ${this.lastName} ${args}`);
  // }

  // const firstObjFunction = printFullName.bind(objOne, "First", "OBJ");
  // const secondObjFunction = printFullName.bind(objTwo, "Second", "OBJ");

  // firstObjFunction();
  // secondObjFunction();

  // printFullName.apply(objOne, ["Hello", "world"]);
  // printFullName.apply(objTwo, ["Testing", "apply method"]);

  // printFullName.call(objOne);
  // printFullName.call(objTwo);

  // let objOne = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // let objTwo = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(...arg) {
  //   console.log(`${this.firstName} ${this.lastName} from ${arg}`);
  // }

  // printFullName.call(objOne, "Karachi", " Pakistan");
  // printFullName.call(objOne, "Hyderabad", " Pakistan");
  // printFullName.apply(objOne, ["Karachi", " Pakistan"]);
  // printFullName.apply(objTwo, ["Hyderabad", " Pakistan"]);

  ///                                           Function Borrowing And Reference of this keyword

  //                        The First Argument Will Always Be The Reference Of This Keyword Later Arg WIll be The Parameters Of The Method

  // let name = {
  //   firstName: "Maaz",
  //   lastName: "Khan",
  // };

  // function printFullName(homeTown) {
  //   console.log(`${this.firstName} ${this.lastName} from ${homeTown}`);
  // }

  // printFullName.call(name, "Hyderabad");

  // let name2 = {
  //   firstName: "Syed",
  //   lastName: "Manahil",
  // };

  // printFullName.call(name2, "Karachi");

  // let firstNum = 10;
  // let secondNum = 11;
  // let sum;

  // let array = [1, 1, 1, 1, 1, 1];

  // let b = array.map(() => {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   return sum;
  // });

  // console.log(b);

  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // const array = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7889, 9, 9, 9, 9, 10];

  // let arr = [];

  // let b = array.filter((item) => {
  //   if (!arr.includes(item)) {
  //     arr.push(item);
  //     return item;
  //   }
  // });
  // console.log(b);

  // let b = array.filter((item, indexx) => {
  //   if (array.indexOf(item) === indexx) {
  //     return item;
  //   }
  // });
  // console.log(b);

  // let b = array
  //   .map((item) => {
  //     if (!arr.includes(item)) {
  //       arr.push(item);
  //       return item;
  //     }
  //   })
  //   .filter((ele) => ele != undefined);
  // console.log(b);
  // console.log(arr);

  // let b = array
  //   .map((item, index) => {
  //     if (array.indexOf(item) === index) {
  //       return item;
  //     }
  //   })
  //   .filter((ele) => ele !== undefined);

  // console.log(b);

  // for (const item of array) {
  //   if (!arr.includes(item)) {
  //     arr.push(item);
  //   }
  // }

  // console.log(arr);

  // let i = 0;

  // while (i < array.length) {
  //   if (!arr.includes(array[i])) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // }

  // console.log(arr);

  // while (i < array.length) {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // }

  // console.log(arr);

  // do {
  //   if (!arr.includes(array[i])) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // } while (i < array.length);

  // console.log(arr);

  // do {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // } while (i < array.length);

  // console.log(arr);

  // array.forEach((item, index) => {
  //   if (!arr.includes(item)) {
  //     arr.push(item);
  //   }
  // });

  // console.log(arr);

  // array.forEach((item, index) => {
  //   if (array.indexOf(array[index]) === index) {
  //     arr.push(array[index]);
  //   }
  // });

  // console.log(arr);

  // for (let i = 0; i < array.length; i++) {
  //   if (!arr.includes(array[i])) {
  //     arr.push(array[i]);
  //   }
  // }
  // console.log(arr);

  // for (let i = 0; i < array.length; i++) {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  // }

  // console.log(arr);

  // class Car {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //     console.log(this, "this in car");
  //   }
  //   accelerate() {
  //     console.log(`My Car Owner Is ${this.name} And His Age Is ${this.age}`);
  //   }
  // }

  // class Bikes extends Car {
  //   constructor(name, carsCount) {
  //     super(name, carsCount);
  //     this.name = name;
  //     this.carsCount = carsCount;
  //     console.log(this, "this in Bikes Class");
  //   }
  // }

  // // const myClass = new Car('Manahil', 23)
  // const myBikes = new Bikes("CD 70", 2);
  // myBikes.accelerate();

  // class Animal {
  //   constructor(name) {
  //     this.name = name;
  //   }

  //   speak() {
  //     console.log(`${this.name} makes a sound.`);
  //   }
  // }

  // class Dog extends Animal {
  //   constructor(name, breed) {
  //     super(name);
  //     this.breed = breed;
  //   }

  //   bark() {
  //     console.log(`${this.name} barks. And its breed is ${this.breed}`);
  //   }
  // }

  // const myDog = new Dog("Buddy", "Golden Retriever");
  // myDog.speak();
  // myDog.bark();

  // const obj = {
  //   name: "Manahil",
  //   age: 23,
  //   degree: "BS-CS",
  // };

  // for (const key in obj) {
  //   if (key === "age") {
  //     return;
  //     // console.log(`${key} : ${obj[key]}`);
  //   }
  //   console.log(key);
  //   // console.log(obj[key]);
  //   // console.log(Object.values(obj));
  // }

  // let array = [1, 2, 3, 4, 5];

  // let firstNum = 0;
  // let secondNum = 1;
  // let sum = 0;

  // array.forEach((element) => {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // });

  // for (const key in array) {
  // sum = firstNum + secondNum;
  // firstNum = secondNum;
  // secondNum = sum;
  // console.log(sum);
  // }

  // while (sum < array.length) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  //   sum++;
  // }

  // do {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  //   sum++;
  // } while (sum < array.length);

  // for (const key in array) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // array.forEach((element) => {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // });

  // array.filter(() => {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // });

  // array.map((item, index) => {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // });

  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // let array = [1, 1, 1, 2, 3, 4, 45, 5, 6, 45, 4];

  // let arr = [];

  // let b = array.filter((item, index) => {
  //   if (array.indexOf(item) === index) {
  //     return item;
  //   }
  // });

  // console.log(b);

  // array.filter((item) => {
  //   if (!arr.includes(item)) {
  //     arr.push(item);
  //   }
  // });

  // console.log(arr);

  // let b = array
  //   .map((item, index) => {
  //     if (array.indexOf(item) === index) {
  //       return item;
  //     }
  //   })
  //   .filter((ele) => ele != undefined);
  // console.log(b);

  // array.map((item, index) => {
  //   if (!arr.includes(item)) {
  //     arr.push(item);
  //   }
  // });
  // console.log(arr);

  // for (const item of array) {
  //   if (arr.indexOf(item) === -1) {
  //     arr.push(item);
  //   }
  // }

  // console.log(arr);

  // let i = 0;

  // while (i < array.length) {
  //   if (!arr.includes(array[i])) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // }

  // console.log(arr);

  // while (i < array.length) {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // }

  // console.log(arr);

  // while (i < array.length) {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // }
  // console.log(arr);

  // do {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // } while (i < array.length);
  // console.log(arr);

  // do {
  //   if (!arr.includes(array[i])) {
  //     arr.push(array[i]);
  //   }
  //   i++;
  // } while (i < array.length);

  // console.log(arr);

  // let b = array.filter((ele) => {
  //   if (!arr.includes(ele)) {
  //     return arr.push(ele);
  //   }
  // });
  // console.log(b);

  // array = array.filter((ele, index) => {
  //   if (array.indexOf(ele) === index) {
  //     return ele;
  //   }
  // });
  // console.log(array);

  // array.map((item) => {
  //   if (!arr.includes(item)) {
  //     return arr.push(item);
  //   }
  // });
  // console.log(arr.filter((ele) => ele != undefined));

  // array = array
  //   .map((item, index) => {
  //     if (array.indexOf(item) === index) {
  //       return item;
  //     }
  //   })
  //   .filter((ele) => ele !== undefined);
  // console.log(array);

  // array.forEach((element) => {
  //   if (!arr.includes(element)) {
  //     arr.push(element);
  //   }
  //   // if (!arr.includes(element) === index) {
  //   //   arr.push(element);
  //   // }
  // });

  // console.log(arr);

  // array.forEach((item, index) => {
  //   if (array.indexOf(item) === index) {
  //     arr.push(item);
  //   }
  // });

  // console.log(arr);

  // for (let i = 0; i < array.length; i++) {
  //   if (!arr.includes(array[i])) {
  //     arr.push(array[i]);
  //   }
  // }
  // console.log(arr);

  // for (let i = 0; i < array.length; i++) {
  //   if (array.indexOf(array[i]) === i) {
  //     arr.push(array[i]);
  //   }
  // }

  // console.log(arr);

  // function User(name, isLoggedIn) {
  //   this.userName = name;
  //   this.isLoggedIn = isLoggedIn;
  //   return this;
  // }

  // const func = new User("Manahil", true);
  // const funcTwo = new User("Sahil", false);
  // console.log(func);
  // const func = User("Manahil",true)

  // const arrowFunc = (name, age) => {
  //   return { name, age };
  //   // console.log(name, age);
  //   // this.userName = name;
  //   // console.log(this);
  // };

  // function normalFunc(name, age) {
  //   return { name, age };
  //   // console.log(name, age);
  //   // this.userName = name;
  //   // console.log(this);
  // }

  // const arrFunc = arrowFunc("Manahil", 23);
  // const arrFuncTwo = arrowFunc("Sahil", 17);
  // // const normFunc = normalFunc("Sahil", 17);
  // console.log(arrFuncTwo);

  // let obj = {
  //   name: "Manahil",
  //   age: 23,
  // };

  // console.log(obj);

  // class Car {
  //   constructor(make, model) {
  //     this.make = make;
  //     this.model = model;
  //     this.speed = 0;
  //   }

  //   accelerate() {
  //     this.speed += 10;
  //   }

  //   brake() {
  //     this.speed -= 5;
  //   }
  // }

  // const myCar = new Car("Toyota", "Camry");
  // myCar.accelerate();
  // console.log(myCar); // Output: 10
  // myCar.brake();
  // console.log(myCar); // Output: 10

  // try {
  //   blabla;
  // } catch ({ name, message, stack }) {
  //   console.log(name);
  //   console.log(message);
  //   console.log(stack);
  // }

  // setTimeout(() => {
  //   try {
  //     blabla;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, 6000);

  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");
  // console.log("OK");

  // a = 10;
  // console.log(a);
  // var a;

  // const generatorArrFunc = function* () {
  //   yield "First Val";
  //   yield "Second Val";
  //   yield "Third Val";
  // };

  // const instance = generatorArrFunc();
  // const { value: firstVal } = instance.next();
  // const { value: secondVal } = instance.next();
  // const { value: thirdVal } = instance.next();
  // console.log(firstVal, secondVal, thirdVal);

  //                                                                               For Passing Arguments

  // function* generatorNormalFunc() {
  //   const argOne = yield;
  //   const argTwo = yield;
  //   const argThree = yield;
  //   console.log(argOne, argTwo, argThree);
  // }

  // const instance = generatorNormalFunc();
  // instance.next();
  // instance.next("First Arg");
  // instance.next("Second Arg");
  // instance.next("Three Arg");

  // const generatorArrFunc = function* () {
  //   const argOne = yield;
  //   const argTwo = yield;
  //   const argThree = yield;
  //   console.log(argOne, argTwo, argThree);
  // };

  // const instance = generatorArrFunc();
  // instance.next();
  // instance.next("First Console.log()");
  // instance.next("Second Console.log()");
  // instance.next("Third Console.log()");

  // function* normalFunc() {
  //   const argument = yield console.log("First");
  //   console.log(argument);
  // }

  // let a = normalFunc("OK");
  // a.next();
  // a.next("OK");

  // let b = 5000;
  // setTimeout(() => {
  //   if (b === 5000) {
  //     a.next();
  //     a.next();
  //   }
  // }, 5000);

  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // for (let i = 1; i <= 10; i++) {
  //   console.log(`2 x ${i} = ${i * 2}`);
  // }

  // arr.map((item) => {
  //   console.log(`2 x ${item} = ${item * 2}`);
  // });

  // function one() {
  //   console.log(arguments);
  // }

  // const two = (...args) => {
  //   console.log(args);
  // };

  // one("Hello", "World");
  // two("Hello", "World");

  // let obj = [
  //   {
  //     name: "Manahil",
  //   },
  //   {
  //     age: 23,
  //   },
  // ];
  // // let obj = {
  // //   name: "Manahil",
  // //   age: 23,
  // //   degree: "CS",
  // // };

  // for (const key in obj) {
  //   console.log(key, "key");
  //   console.log(obj[key]);
  // }

  // console.log(obj[age]);

  // let a = 20;
  // console.log(a.toString(), String(a));

  // let a = Symbol("Test");
  // let b = Symbol("Test");
  // console.log(a === b);

  // let array = [1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6];

  // let myArr = [];

  // array.forEach((item, index) => {
  //   if (!myArr.includes(item)) {
  //     myArr.push(item);
  //   }
  // });

  // console.log(myArr);

  // array.forEach((item, index) => {
  //   if (array.indexOf(item) === index) {
  //     myArr.push(item);
  //   }
  // });

  // console.log(myArr);

  // let i = 0;
  // do {
  //   if (!myArr.includes(array[i])) {
  //     myArr.push(array[i]);
  //   }
  //   i++;
  // } while (i < array.length);
  // console.log(myArr);

  // let myArr = [];

  // let i = 0;
  // do {
  //   if (array.indexOf(array[i]) === i) {
  //     myArr.push(array[i]);
  //   }
  //   i++;
  // } while (i < array.length);
  // console.log(myArr);

  // let i = 0;
  // while (i < array.length) {
  //   if (array.indexOf(array[i]) === i) {
  //     myArr.push(array[i]);
  //   }
  //   i++;
  // }
  // console.log(myArr);

  // let i = 0;
  // while (i < array.length) {
  //   if (!myArr.includes(array[i])) {
  //     myArr.push(array[i]);
  //   }
  //   i++;
  // }
  // console.log(myArr);

  // for (let i = 0; i < array.length; i++) {
  //   const item = array[i];
  //   const index = i;
  //   if (array.indexOf(item) === index) {
  //     myArr.push(item);
  //     console.log(myArr);
  //   }
  // }

  // for (let i = 0; i < array.length; i++) {
  //   if (!myArr.includes(array[i])) {
  //     myArr.push(array[i]);
  //   }
  // }
  // console.log(myArr);

  // array = array.filter((ele, index) => {
  //   if (array.indexOf(ele) === index) {
  //     return ele;
  //   }
  // });
  // console.clear();
  // console.log(array);

  // array = array.filter((ele) => {
  //   if (!myArr.includes(ele)) {
  //     myArr.push(ele);
  //   }
  // });
  // console.clear()
  // console.log(myArr);

  // let myArr = [];

  // for(let i = 0 ; i < array.length; i ++){

  // }

  // let b = array
  //   .map((item) => {
  //     if (!myArr.includes(item)) {
  //       return myArr.push(item);
  //     }
  //   })
  //   .filter((el) => el != undefined);
  // console.log(b, myArr);

  // let b = array
  //   .map((item, idx) => {
  //     if (array.indexOf(item) === idx) {
  //       return item;
  //     }
  //   })
  //   .filter((el) => el != undefined);
  // console.log(b);

  // let b = array
  //   .map((ele) => {
  //     if (!arr.includes(ele)) {
  //       return arr.push(ele);
  //     }
  //   })
  //   .filter((ele) => ele != undefined);

  // console.log(b);

  // let firstNum = 0;
  // let secondNum = 1;
  // let sum = 0;

  // while (sum < 5) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  //   sum++;
  // }

  // do {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  //   sum++;
  // } while (sum < 5);

  // let firstNum = 0;
  // let secondNum = 1;

  // for (let i = 0; i < 5; i++) {
  //   var sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  // }
  // console.log(sum);

  // const test = async () => {
  //   return false;
  // };

  // test().then(() => console.log("OK"));

  // Difference between promises and async function

  // In Promises we have to declare 2 variables resolve and reject in order to use then and catch function
  // where as async function actually returns the promise as well
  // async function is easy to make as well we only have to write async before the normal function to make it async
  // async function also works in background mode

  // let firstNum = 0;
  // let secondNum = 1;
  // var sum;

  // let i = 0;
  // while (i < 5) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  //   i++;
  // }

  // do {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  //   i++;
  // } while (i < 5);

  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // const a = [
  //   1, 2, 32, 1, 4, 14, 1243, 1423, 124, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  // ];

  // let b = a.filter((ele, index) => {
  //   if (a.indexOf(ele) === index) return ele;
  // });

  // console.log(b);

  // let b = a
  //   .map((ele, index) => {
  //     if (a.indexOf(ele) === index) return ele;
  //   })
  //   .filter((item) => item !== undefined);

  // console.log(b);

  // let i = 1;
  // do {
  //   console.log("object");
  //   console.log(i < 1);
  //   i++;
  // } while (i < 1);

  // let i = 0;

  // while (i < a.length) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  //   i++;
  // }
  // console.log(arr);

  // let i = 0;
  // do {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  //   i++;
  // } while (i < a.length);

  // console.log(arr);

  // for (const i in a) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  // }
  // console.log(arr);

  // for (let i = 0; i < a.length; i++) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  // }
  // console.log(arr);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function one() {
  //     console.log("function One Start");
  //     await "OKKKK";
  //     // dispatch(fetchData());
  //     console.log("function One End");
  //   }
  //   function two() {
  //     console.log("function Two");
  //   }
  //   one();
  //   two();
  // }, []);

  // function asyncFunction() {
  //   console.log("Start");

  //   const result = setTimeout(() => {
  //     console.log("Async Function Await After Settimeout");
  //   }, 0);

  //   console.log("After await");

  //   return result;
  // }

  // function someSyncFunction() {
  //   console.log("Sync function");
  // }

  // asyncFunction();
  // someSyncFunction();

  // let firstNum = 0;
  // let secondNum = 1;
  // let sum = 0;

  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // const a = [1, 2, 1, 2, 3, 4, 5, 4, 4];
  // console.log([...new Set(a)]);

  // let arr = [];

  // let i = 0;
  // while (i < a.length) {
  //   if (!arr.includes(a[i])) arr.push(a[i]);
  //   i++;
  // }

  // console.log(arr);

  // let arr = [];
  // let i = 0;
  // do {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  //   i++;
  // } while (i < a.length);

  // console.log(arr)

  // let arr = [];
  // a.forEach((i) => {
  //   if (!arr.includes(i)) {
  //     arr.push(i);
  //   }
  // });
  // console.log(arr);

  // let b = a.filter((item, index) => {
  //   if (a.indexOf(item) === index) return item;
  // });
  // console.log(b);

  // let b = a
  //   .map((item, index) => {
  //     if (a.indexOf(item) === index) return item;
  //   })
  //   .filter((item) => item != undefined);

  // console.log(b);

  // let arr = [];

  // for (let i = 0; i < a.length; i++) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  // }
  // console.log(arr);

  // const test = (callback) => {
  //   const response = prompt("Enter Anything");
  //   return callback(response);
  // };

  // useEffect(() => {
  //   test((res) => {
  //     alert(`Hello ${res}`);
  //   });
  // }, []);

  // function promises(
  //   conditionOne,
  //   conditionTwo = false,
  //   conditionThree = false
  // ) {
  //   const firstPromise = new Promise((resolve, reject) => {
  //     if (conditionOne) {
  //       resolve("Success");
  //     }
  //     reject("Error");
  //   });
  //   const secondPromise = new Promise((resolve, reject) => {
  //     if (conditionTwo) {
  //       resolve("Success");
  //     }
  //     reject("Error");
  //   });
  //   const thirdPromise = new Promise((resolve, reject) => {
  //     if (conditionThree) {
  //       resolve("Success");
  //     }
  //     reject("Error");
  //   });
  //   return Promise.all([firstPromise, secondPromise, thirdPromise]);
  // }

  // promises(true, true, true)
  //   .then((res) => {
  //     console.log("All Promises Are Fulfilled", res);
  //   })
  //   .catch((error) => {
  //     console.log("Rejected", error);
  //   });

  // function promiseFunction(condition) {
  //   const prom = new Promise((res, rej) => {
  //     if (condition) {
  //       return res();
  //     } else {
  //       return rej();
  //     }
  //   });
  //   return prom;
  // }

  // let onResult = (param) => {
  //   console.log(`Promise is ${param}`);
  // };

  // const test = () => {
  //   promiseFunction(false)
  //     .then(() => {
  //       onResult("FULFILLED");
  //     })
  //     .catch(() => {
  //       onResult("REJECTED");
  //     });
  // };

  // function isPromiseSuccessOrFailed(condition) {
  //   const response = new Promise((resolve, reject) => {
  //     if (condition) {
  //       resolve("success");
  //     } else {
  //       reject("error");
  //     }
  //   });
  //   return response;
  // }

  // const test = () => {
  //   isPromiseSuccessOrFailed(false)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   test();
  // }, []);

  // let firstNum = 0;
  // let secondNum = 1;
  // let sum = 0;
  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // const a = [1, 1, 1, 2, 3, 4, 5];
  // console.log([...new Set(a)]);

  // let b = a.filter((item, index) => {
  //   // return a.indexOf(item) === index;
  //   if (a.indexOf(item) === index) return item;
  // });
  // console.log(b);

  // let b = a.map((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     return item;
  //   }
  // });
  // console.log(b.filter((item) => item !== undefined));

  // let arr = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (!arr.includes(a[i])) arr.push(a[i]);
  // }
  // console.log(arr);

  //                              O           O              P

  // class employee {
  //   constructor(args) {
  //     const { name, age, qualif } = args;
  //     this.empName = name;
  //     this.empAge = age;
  //     this.empQualif = qualif;
  //     // console.log(args);
  //     // const { name, age, qualif } = args;
  //     // console.log(name, age, qualif);
  //     // this.name = name;
  //     // console.log(name, age, qualif);
  //     // let { name: testName } = this;
  //     // console.log(testName);
  //     // const t = this;
  //     // this.empName = name;
  //     // console.log(t, "empName");
  //   }
  //   info() {
  //     console.log(
  //       `Name: ${this.empName}, Age: ${this.empAge}, Qualification: ${this.empQualif}`
  //     );
  //   }
  // }

  // class manager extends employee {
  //   info() {
  //     console.log("Manager CLass");
  //     super.info();
  //   }
  // }

  // let managerClass = new manager({ name: "Manahil", age: 23, qualif: "BS-CS" });
  // managerClass.info();

  // class fruits {
  //   constructor(name) {
  //     this.name = name;
  //     console.log(this.name);
  //     // console.log("Call immediately");
  //   }
  //   static staticMethod() {
  //     console.log("object");
  //   }
  //   test() {
  //     const response = "Hello from " + this.name;
  //     return response;
  //   }
  // }

  // // let fruitsClass = new fruits("Manahil");

  // class vegetables extends fruits {
  //   constructor(className) {
  //     super();
  //     console.log(className);
  //   }
  // }

  // let vegetablesClass = new vegetables("Fruit Class");
  // console.log(vegetablesClass.test());

  //                             F I B O N A C C I

  // let firstNum = 0;
  // let secondNum = 1;

  // for (let i = 0; i < 5; i++) {
  //   var sum = 0;
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // let firstNum = 0;
  // let secondNum = 1;
  // let sum = 0;

  // for (let i = 0; i < 5; i++) {
  //   sum = firstNum + secondNum;
  //   firstNum = secondNum;
  //   secondNum = sum;
  //   console.log(sum);
  // }

  // let a = [1, 2, 2, 2, 3, 4];
  // let arr = [];

  // a.forEach((ele) => {
  //   if (arr.includes(ele)) return;
  //   else {
  //     arr.push(ele);
  //   }
  // });

  // console.log(arr);

  // let a = [1, 2, 2, 2, 3, 4];
  // let arr = [];
  // for (let i = 0; i < a.length; i++) {
  //   const element = a[i];
  //   if (!arr.includes(element)) {
  //     arr.push(element);
  //   }
  // }
  // console.log(arr);

  // let a = [1, 2, 2, 2, 3, 4];
  // let b = a.filter((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     return item;
  //   }
  // });
  // console.log(b);
  // let uniqArr = b.filter((item) => item !== undefined);
  // console.log(uniqArr);

  // let a = [1, 2, 2, 2, 3, 4];
  // let b = a.map((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     return item;
  //   }
  // });
  // let uniqArr = b.filter((item) => item != undefined);
  // console.log(uniqArr);

  // FROM LOADASH

  // let a = [1, 2, 2, 2, 3, 4];
  // console.log(_.uniq(a, false));

  // let a = [1, 2, 2, 2, 3, 4];
  // let arr = [];
  // a.forEach((element) => {
  //   if (!arr.includes(element)) {
  //     arr.push(element);
  //   }
  // });
  // console.log(arr);

  // let a = [1, 2, 2, 2, 3, 4];
  // let b = a.filter((item, index) => {
  //   console.log(a.indexOf(item), "index");
  //   if (a.indexOf(item) == index) {
  //     return item;
  //   }
  // });
  // console.log(b);

  // let a = [1, 2, 2, 2, 3, 4];

  // let arr = [];

  // for (let i = 0; i < a.length; i++) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  // }
  // console.log(arr);

  // let a = [1, 2, 2, 2, 3, 4];
  // let arr = [];
  // let b = a.filter((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     // arr.push(item);
  //     return item;
  //   }
  // });
  // console.log(b);

  // let a = [1, 2, 2, 2, 3, 4];
  // let sortedArr = a.filter((item, index) => {
  //   if (a.indexOf(item) === index) {
  //     return item;
  //   }
  // });
  // console.log(sortedArr);

  // let a = [1, 2, 2, 2, 3, 4];
  // // let arr = [];
  // console.log([...new Set(a)]);

  // REMOVE DUPLICATES FROM AN ARRAY WITHOUT USING JAVASCRIPT BUILTIN FUNCTIONS

  // let a = [1, 2, 2, 2, 3, 4];
  // let arr = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   }
  // }
  // console.log(arr);

  // console.log(!arr.includes(a[i]));
  // if (arr.includes(a[i])) {
  //   console.log(arr);
  //   return;
  // } else {
  //   arr.push(a[i]);
  //   // console.log(arr);
  // }

  // const a = new hello("World");

  // // a.name = "Manahil";

  // console.log(a.test());

  // useEffect(() => {
  //   console.log(test());
  // }, []);
  // const obj = {
  //   name: "Manahil",
  //   age: 23,
  // };

  // console.log(obj["name"]);

  // const arr = [1, 2, 1, 23132, 131, 3];

  // const [a, b, c, ...res] = arr;

  // console.log(a, b, c, ...res);

  // let a = "name";

  // let obj = {
  //   [a]: "Yahoo",
  // };

  // console.log(obj);

  // function test() {
  //   console.log(arguments);
  // }

  // const test1 = () => console.log(arguments);

  // test1();

  // let obj = {
  //   name: "World",
  //   hello() {
  //     console.log(this);
  //   },
  //   // hello() {
  //   //   console.log(this.name);
  //   // },
  // };

  // // function hello() {
  // //   let name = "hello";
  // //   console.log(this);
  // // }

  // obj.hello(1, 2, 3, 4, 5);
  // function hello() {
  //   let sum = 0;
  //   let arr = [];
  //   for (let i in arguments) {
  //     if (typeof arguments[i] === "string") {
  //       arr.push(arguments[i]);
  //       delete arguments[i];
  //     } else {
  //       sum = sum + arguments[i];
  //     }
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //   }
  //   console.log(arr);
  //   console.log(sum);
  // }

  // hello(1, "YYYYYYYYYYY", 2, 3, 4, 5, "Hello");

  // {
  //   let a = "OK";
  // }

  // console.log(a);

  // if (true) {
  //   let x = "YES";
  // }

  // console.log(x);

  // {
  //   var x = "Hello";
  // }
  // var x = "No";
  // console.log(x);

  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // const updateCursorPosition = (e) => {
  //   setCursorPosition({ x: e.clientX, y: e.clientY });
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", (e) => {
  //     setCursorPosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   });

  //   return () => {
  //     document.removeEventListener("mousemove", updateCursorPosition);
  //   };
  // }, []);

  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset == 100) {
  //     console.log("object");
  //   }
  // });

  // const a = {
  //   name: "Manahil",
  //   age: 21,
  //   qualification: "BS_CS",
  //   user: ["1", "2", "3"],
  // };

  // let newObject = {
  //   ...a,
  //   // user: a.user.map((userId) => ({
  //   //   userId,
  //   // })),
  // };

  // newObject.user = {};

  // console.log(a, newObject);

  // console.log(test());

  // const newObject = {
  //   ...a,
  //   user: a.user.map((userId) => ({ userId })),
  // };

  // console.log(newObject);

  //                                                                                 fibonacci code

  // function fibonacci(num) {
  //   let num1 = 0;
  //   let num2 = 1;
  //   let sum;
  //   let i = 0;
  //   for (i = 0; i < num; i++) {
  //     sum = num1 + num2;
  //     num1 = num2;
  //     num2 = sum;
  //     console.log(sum);
  //   }
  // }
  // fibonacci(10);

  // console.log("first");

  // setTimeout(() => {
  //   console.log("second");
  // }, 0);
  // console.log("third");

  // const a = {
  //   name: "Manahil",
  //   age: 21,
  //   qualification: "BS_CS",
  // };

  // console.log(a["qualification"]);

  // for (let i in a) {
  //   document.write(`${i} : ${a[i]} <br>`);
  //   // console.log(`${i} : ${a[i]}`);
  //   // console.log(a);
  // }

  // let a = "hello";

  // a = a.replace("h", "t");
  // console.log(a);

  // function test(args) {
  //   console.log(arguments);
  // }

  // test("hello");

  // const a = "50";

  // console.log(+a + 20);

  // let a = "Hello, World, From, Mars";
  // console.log(a.replace(/,/g, "  "));

  // let a = [12, 2.45, 15564];
  // a = a.toString().replace(",", "    ");
  // console.log(a);

  // const str = "hello from earth";
  // console.log(str.includes("f"));

  // let array = [1, 123, 32, 44, 50];
  // let a = array.map((el) => el * 10);
  // console.log(a);

  // array = [];
  // console.log(array);

  // console.log(data["company"]);

  // for (let i in data) {
  //   delete data?.company;
  //   delete data?.address;
  //   // console.log(i);
  //   document.write(`${i} : ${data[i]} <br>`);
  //   // return <h1>{data[i]}</h1>;
  //   // console.log(data[i]);
  // }

  // const a = {
  //   fName: "Syed",
  //   lName: "Manahil",
  //   age: 23,
  // };

  // for (let i in a) {
  //   console.log(a);
  //   // console.log(a[i]);
  // }

  // for (const i in a) {
  //   const element = a[i];
  //   console.log(element);
  //   // if (Object.hasOwnProperty.call(a, i)) {
  //   //   const element = a[i];
  //   //   console.log(element);
  //   // }
  // }

  // const a = {
  //   name: "manahil",
  // };

  // a = {};

  // a.name = "Hello";
  // console.log(a);

  // const a = [20, 24, 35];
  // a[2] = 30;
  // console.log(a);

  // const a = new Object();
  // a.firstName = "Syed ";
  // a.lastName = "Manahil";
  // const { firstName, lastName } = a;
  // console.log(firstName, lastName);

  // const a = ["Manahil", "Moiz"];
  // console.log(a.toString());
  // const a = [1, 2, 3, 4, 4, 43, 234, 23, 23];
  // // a = "hello";
  // console.log(a.toString());

  // const ages = [10, 13, 18, 20];
  // const checkAdults = (age) => {
  //   return age >= 21;
  // };

  // const a = ages.some(checkAdults);
  // console.log(a);
  // function checkAdults(age) {
  //   console.log(arguments);
  //   // console.log(age);
  // }
  // console.log(a);

  // console.log(ages.some((ele) => ele >= 18));
  // var adults = 18;
  // for (let i = 0; i < ages.length; i++) {
  //   if (ages[i] >= adults) {
  //     console.log(ages[i]);
  //   }
  // }

  // var c = "ok";
  // const a = () => {
  //   var b = "hello";
  // };
  // console.log(c, b);

  // let a = 1;
  // const test = () => {
  //   let a = 11000;
  //   a = "OK";
  //   console.log(a);
  // };
  // a = "ok";
  // test();

  // const array = [
  //   {
  //     name: "Ayub",
  //     age: 2000,
  //   },
  //   {
  //     name: "Nasrullah",
  //     age: 999999999999999,
  //   },
  // ];

  // let test = array.map((item) => item.name).join(" MashAAllah ");
  // console.log(test);

  // const array = [
  //   {
  //     name: "Manahil",
  //     age: "23",
  //   },
  //   {
  //     name: "Maaz",
  //     age: "200",
  //   },
  // ];
  // const array2 = [
  //   {
  //     name: "Ayub",
  //     age: "50",
  //   },
  //   {
  //     name: "Usman",
  //     age: "200",
  //   },
  // ];

  // let a = array.concat(array2);
  // a.reverse();
  // console.log(a);

  // const a = ["Hello", "world"];
  // const b = ["yes", "no"];
  // console.log(a.concat(a));

  // let arr = Array();
  // let arr = new Array();
  // arr[0] = "hello";
  // console.log(arr[0]);

  // let array = [10, 20, 30, 40];
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum = sum + array[i];
  // }
  // console.log(sum);

  // For Loop Example Of Table Of 3

  // for (let i = 1; i <= 10; i++) {
  //   console.log(`3 x ${i} = ${i * 3}`);
  // }
  // do {
  //   console.log("hello");
  // } while (false);

  // While Loop Example Of Table Of 3
  // let i = 1;
  // while (i <= 10) {
  //   console.log(`3 x ${i} = ${i * 3}`);
  //   i++;
  // }

  // While Loop Example Of Odd Num
  // let i = 0;
  // while (i < 10) {
  //   i++;
  //   if (i % 2 !== 0) {
  //     console.log(i);
  //   }
  // }

  // While Loop Example Of Even Num
  // let i = 0;
  // while (i < 10) {
  //   i++;
  //   if (i % 2 === 0) {
  //     console.log(i);
  //   }
  // }

  // Do While Loop Example Of Even Num
  // let i = 2;
  // do {
  //   if (i % 2 === 0) {
  //     console.log(i);
  //   }
  //   i++;
  // } while (i < 10);

  // Do While Loop Example Of Odd Num
  // let i = 1;
  // do {
  //   if (i % 2 !== 0) {
  //     console.log(i);
  //   }
  //   i++;
  // } while (i < 10);

  // Do While Loop Example Of Table
  //   let i = 0;
  //   do {
  //     i++;
  //     console.log(`3 x ${i} = ${i * 3}`);
  //   } while (i < 10);
  //  While Loop Example Of Table

  //   let j = 1;
  //   while (j <= 10) {
  //     console.log(`3 x ${j} = ${j * 2}`);
  //     j++;
  //   }
  //   let i = 0;
  //   while (i <= 10) {
  //     console.log(i);
  //     i++;
  //   }

  //   const a = 1;
  //   let b = 2;
  //   var c = 3;
  //   const test = () => console.log(a, b, c);
  //   test();

  // Difference B/W Arrow Function and Normal Functions

  // 1) Arguments can be found in normal function but not in arrow function
  // 2) In Fat Arrow We cannot create a constructor where as in normal function we can create a constructor
  // 3) Arrow Functions Do not have their own this where normal function has it in the object
  // 4) In arrow function we can return anything in just a single line where as in normal function we cannot do that we must have to use return keyword

  // function test(name) {
  //   this.name = name;
  //   console.log(name);
  //   return this.name;
  // }

  // const test = (name) => {
  //   console.log(name);
  //   this.name = name;
  // };

  // const t = new test("Manahil");
  // console.log(t);
  //   function test(name) {
  //     this.name = name;
  //     console.log(this.name, "this");
  //   }

  //   const t = new test("Manahil");
  //   console.log(t);
  //   function test(a, b, c) {
  //     console.log(arguments);
  //   }

  //   const test = (a, b, c) => {
  //     console.log(arguments);
  //   };

  //   test(10, 2, 10);

  //   const arr = [
  //     {
  //       name: "Hello",
  //     },
  //   ];

  //   console.log(typeof arr);
  //   const arr = [];
  //   console.log(typeof arr);
  //   for (let i = 2; i <= 10; i += 2) {
  //     console.log(i);
  //   }

  //   var a = 2;
  //   var a = 5;
  //   console.log(a);
  //   console.log(a);
  //   setTimeout(() => {
  //     console.log("Hello");
  //   }, 1);

  //   console.log("World");
  // for (let i in data) {
  //   console.log(data);
  //   console.log(i);
  //   return <h1>{data[i]}</h1>;
  // }

  // if (instance?.next === "ListingOfTheUsers") {
  //   console.log(data);
  //   data?.map((ele) => {
  //     return <h1>{ele?.name}</h1>;
  //   });
  // } else {

  // const [initialState, updatedState] = useState(false);

  // const NestedComp = ({ updatedState }) => {
  //   return <button onClick={() => updatedState(!initialState)}> Update</button>;
  // };

  // useEffect(() => {
  //   console.log("checking");
  // });

  // const [text, setText] = useState("");

  return (
    <>
      {/* <button onClick={() => throttleFunc()}>Submit</button> */}
      {/* <input type="text" value={text} /> */}
      {/* <button>{initialState ? "OK" : "Not Ok"}</button>
      <NestedComp updatedState={updatedState} /> */}
      {/* <div
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "2px solid yellow",
          // backgroundColor: "yellow", // Change the background color as needed
          transform: `translate(${cursorPosition.x - 10}px, ${
            cursorPosition.y - 10
          }px)`,
          pointerEvents: "none", // Prevent the cursor from interfering with elements
        }}
      ></div> */}
      {/* <h1
        id="1"
        onClick={() =>
          window.addEventListener("mousedown", (e) => {
            if (e.button == 0) {
              document.getElementById("1").style.background = "red";
            } else if (e.button == 1) {
              document.getElementById("1").style.background = "green";
            } else {
              document.getElementById("1").style.background = "yellow";
            }
          })
        }
      >
        hello
      </h1> */}
    </>
  );
};

export default Page;
