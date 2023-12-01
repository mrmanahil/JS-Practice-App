import React from "react";
import NestedComponent from "./NestedComponent";

const Page: React.FC = () => {
  function test(a: string, b: number) {
    // The test function logic here
  }

  // Make sure to use the test function if needed

  return <NestedComponent text="Hello" test={test} />;
};

export default Page;
