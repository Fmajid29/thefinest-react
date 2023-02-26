import React from "react";
import v1 from "./v1.mp4";
import "./Videos.css";
const Videos = () => {
  return (
    <div className="Vmain">
      <div className="Vbox">
        <video controls>
          <source src={v1} />
        </video>
        {/* <iframe
          width="1268"
          height="713"
          src="https://www.youtube.com/embed/dR4eijxUubw"
          title="I Can Speak Like Shah Rukh Khan - Thanks to this AI 🔥"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
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
