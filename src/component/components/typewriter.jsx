import React from "react";
import { useState, useEffect } from "react";
const Typewriter = (props) => {
  const { message } = props;
  const [textContent, setTextContent] = useState("");
  const typingSpeed = 10;
  let ind = 0,
    typingId;
  const handleTypeWriter = (ind) => {
    if (ind < message.length) {
      setTextContent((prev) => prev + message[ind]);
    } else clearInterval(typingId);
    typingId = setTimeout(() => handleTypeWriter(ind + 1), typingSpeed);
  };
  useEffect(() => {
    handleTypeWriter(ind);
  }, []);
  return <div className="type-writer-text">{textContent}</div>;
};

export default Typewriter;
