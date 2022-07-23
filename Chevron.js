import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { details } from "./Data";

const Section = () => {
  const [currentimg, setcurrentimg] = useState(0);

  function handleright() {
    if (currentimg === details.length - 1) {
      setcurrentimg(0);
    } else {
      setcurrentimg(currentimg + 1);
    }
  }

  function handleleft() {
    if (currentimg === 0) {
      setcurrentimg(details.length - 1);
    } else {
      setcurrentimg(currentimg - 1);
    }
  }

  return (
    <div className="carousel">
      <div
        className="carousel-Inner"
        style={{ backgroundImage: `url(${details[currentimg].img})` }}
      >
        <div className="left">
          <FaChevronCircleLeft onClick={handleleft} size={50} />
        </div>
        <div className="center">
          <h2>{details[currentimg].title}</h2>
        </div>
        <div className="right">
          <FaChevronCircleRight onClick={handleright} size={50} />
        </div>
      </div>
    </div>
  );
};

export default Section;
