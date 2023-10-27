import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/Actions/customer.action";
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(fetchData());
// }, []);
// let data = useSelector((state) => state?.customers?.data[0]);

const Page = () => {
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

  // let test = array.map((item) => item.name).join("===");
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
  return;
};

export default Page;
