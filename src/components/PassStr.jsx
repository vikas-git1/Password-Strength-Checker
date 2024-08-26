import React, { useRef, useState, useref } from "react";
import { FaRegCopy } from "react-icons/fa";
import "./PassStr.css";
const PassStr = () => {
  const [strength, setStrength] = useState(""); // strength of pass
  const [copyText, setCopyText] = useState(""); // copy pass val
  const inputRef = useRef(null); // to clear the input box after copy
  const chars = ["1", "2", "3", "4", "#", "@", "%", "-"];

  let pass;
  const handleOnChange = (event) => {
    pass = event.target.value;
    let specialChar = chars.some((char) => pass.includes(char));
    // console.log(specialChar); // returns boolean

    if (pass.length > 12 && specialChar) {
      setStrength("strong");
    } else if (pass.length > 8) {
      setStrength("moderate");
    } else {
      setStrength("weak");
    }
    setCopyText(pass);
  };

  const copyPass = () => {
    // navigator.clipboard.writeText(copyText) // this will also work
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert("Password Copied");
      })
      .catch((error) => {
        console.error("Failed to copy text", error);
      });
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="container">
        <div className="input_copy_container">
          <input
            type="password"
            onChange={handleOnChange}
            className={`input`}
            ref={inputRef}
            placeholder="Enter the pass..."
          />
          <FaRegCopy className="copy_icon" onClick={copyPass} />
        </div>
        <p className={`message ${strength} `}>
          {" "}
          {strength.length > 0
            ? ` Password is ${strength}`
            : `Check Password Strength`}
        </p>
      </div>
      <input
        type="text"
        name=""
        id=""
        className="test_pass_field"
        placeholder="Check The pass here."
      />
    </>
  );
};

export default PassStr;
