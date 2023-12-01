import React from "react";

interface Props {
  text: string;
  test: (a: string, b: number) => void;
}

const NestedComponent: React.FC<Props> = ({ text, test }) => {
  return <div>{text}</div>;
};

export default NestedComponent;
