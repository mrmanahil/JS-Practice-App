import React from "react";

const Test = ({ children }) => {
  // const words = [
  //   "spray",
  //   "limit",
  //   "elite",
  //   "exuberant",
  //   "destruction",
  //   "present",
  // ];

  // console.log(words.filter((item) => item.length > 5));
  return <h1 className="text-center">{children}</h1>;
};

export default Test;

// import React, { useState } from "react";

// const Test = ({ children }) => {
//   const [language, setLanguage] = useState("react");
//   return (
//     <div>
//       <button onClick={() => setLanguage("javascript")}>I love JS</button>
//       <p>I love {language}</p>
//     </div>
//   );
// };

// export default Test;
