import React from "react";
import ImagePath from "../assets/ImagePath";

const WhoWeAreRight = React.memo(() => {
  return (
    <div className="we-are-right">
      <div className="we-are-back-image-section">
        <img
          src={ImagePath.WRB}
          alt="Background of engineering excellence"
          className="img-fluid"
          loading="lazy"
        />
        <div className="we-are-back-right-content-box">
          <div className="we-are-back-right-content">
            <h4>7+</h4>
            <p>Years of Experience</p>
          </div>
          <div className="divider"></div>
          <div className="we-are-back-right-content jcs">
            <p>Cutting-Edge Expertise</p>
            <p>Holistic Solutions Approach</p>
            <p>Client-Centric Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WhoWeAreRight;
