import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import data from "./data";
import "./index.css";
const Question = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = (index) => {
    setToggle(toggle === index ? false : index);
  };
  return (
    <div>
      {data.map((item, index) => (
        <div className="container" key={index}>
          <div className="container-info">
            <div className="div-1">{item.title}</div>
          </div>
          <div className="button" onClick={() => handleToggle(index)}>
            {toggle !== index ? (
              <>
                <div className="container-plus">
                  <AiOutlinePlus />
                </div>
              </>
            ) : (
              <>
                <p className="div-2">{item.info}</p>
                <div className="container-plus">
                  <AiOutlineMinus />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
