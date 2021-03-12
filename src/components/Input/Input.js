import React, { useState } from "react";
import './Input.css';

const Input = ({ placeholder, icon }) => {
  const [value, setValue] = useState("");
  const handleOnChange = (event) => {
    event.stopPropagation();
    setValue(event.target.value);
  };

  return (
    <div className="textInput">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      ></input>
      <div className="icon-wrapper">
        <i className={`icon ${icon}`}></i>
        </div>
    </div>
  );
};

export default Input;
