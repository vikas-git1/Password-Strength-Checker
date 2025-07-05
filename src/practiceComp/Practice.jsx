import React, { useState, useRef } from "react";

const Practice = () => {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const handlePassChange = (event) => {
    setPassword(event.target.value);
    let pass = event.target.value;

    let chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let specialChar = chars.some((char) => pass.includes(char));
    if (pass.length > 10 && specialChar) {
      setMsg("Strong");
    } else if (pass.length > 5) {
      setMsg("Moderate");
    } else if (pass.length > 0) {
      setMsg("Week");
    }
  };
  const handleCopyPass = () => {
    if (password.length > 0) {
      navigator.clipboard
        .writeText(password)
        .then(() => alert("password is copied"))
        .catch((err) => alert("Error Occurd :", err));
      setPassword("");
    } else {
      return alert("Please Enter the Password");
    }
  };

  return (
    <>
      <div>
        <input type="text" value={password} onChange={handlePassChange} />
        <button onClick={handleCopyPass}>Copy</button>
        <p>
          {password.length > 0
            ? `Your Password is ${msg}`
            : `Check Password Strength`}
        </p>
      </div>
    </>
  );
};

export default Practice;
