import React from "react";
import v1 from "./v1.mp4";
import "./Videos.css";
const Videos = () => {
  return (
    <div className="Vmain">
      <div className="Vbox">
        <video autoplay loop>
          <source src={v1} type="video/mp4" />
          your browser does not support this video
        </video>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
      </div>
    </div>
  );
};

export default Videos;
