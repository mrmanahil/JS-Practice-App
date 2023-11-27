// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Page = () => {
  // const [value, setValue] = useState("");

  const [phone, setPhone] = useState("");

  // console.log(`+${phone}` ==="+");

  return (
    // <PhoneInput
    //   placeholder="Enter phone number"
    //   value={value}
    //   onChange={setValue}
    // />
    <PhoneInput
      country={"eg"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
};

export default Page;
