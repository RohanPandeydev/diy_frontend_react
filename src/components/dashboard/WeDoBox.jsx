import React from 'react';
import { Button } from 'reactstrap';

const WeDoBox = React.memo(({ icon, title, desc }) => (
  <div className="we-do-box">
    {icon}
    <hr />
    <h3>{title}</h3>
    <p>{desc}</p>
    <Button className="common-btn">Learn More</Button>
  </div>
));

export default WeDoBox;