import React from 'react';
import ImagePath from '../assets/ImagePath';

const TrustSliderRight = React.memo(() => {
  return (
    <div className="trust-map-img-box">
      <img
        src={ImagePath.Map}
        alt="World map showing trust locations"
        className="img-fluid"
        loading="lazy"
      />
    </div>
  );
});

export default TrustSliderRight;
